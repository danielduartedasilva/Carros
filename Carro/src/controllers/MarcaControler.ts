import { Request, Response } from "express";
import MarcaSchema from "../models/MarcaSchema";
import CarroSchema from "../models/CarroSchema";

class MarcaController {
    async cadastrar(request: Request, response: Response) {
        if (!request.body) {
          response.status(404).json({error: true,msg: "Está faltando o body da request!",});
        }
        try {
          const { nome, carro } = request.body;
            const marca = await MarcaSchema.create({nome});
            await Promise.all(carro.map( async carro => {
              const marcaCarro = new CarroSchema({ ...carro, marca: marca._id });
              await marcaCarro.save();
              marca.carro.push(marcaCarro);
            }));
            await marca.save();
            response.status(201).json({data: marca,error: false,msg: "Marca cadastrada com sucesso!",});
          } catch (error) {
            response.status(400).json({data: error,error: true,msg: "Não foi possível cadastrar a marca.",});
          }
        }

          async listar(request: Request, response: Response) {
            try {
                const marcas = await MarcaSchema.find().populate("carro");
                 response.status(200).json({ data: marcas, error: false, msg: "Lista de marcas atualizada!", });
            } catch (error) {
             response.status(400).json({ data: error, error: true, msg: "Não foi possível listar os marcas.", });
            }  
         }
         async listarPorId(request: Request, response: Response) {
          try {
            const { id } = request.params;
            const marca = await MarcaSchema.find({ _id: id }).populate("carro");
            if (marca != null) {
              response
                .status(200)
                .json({ data: marca, error: false, msg: "Marca encontrada!" });
            }
            response
              .status(400)
              .json({ data: marca, error: false, msg: "Marca não encontrada!" });
            } catch (error) {
              response
                .status(400)
                .json({ data: error, error: true, msg: "Formato de id não válido!" });
            }
          }

         async alterar(request: Request, response: Response) {
            if (!request.body) {
              response.status(404).json({
                error: true,
                msg: "Está faltando o body da request!",
            });
          }
        const { nome } = request.body;
        try {
            const marca = await MarcaSchema.findOne({ nome: nome });
          if (marca != null) {
            const result = await MarcaSchema.updateOne(
              { nome: nome },
              {
                $set: {
                  nome: nome,
                },
              }
            );
            response.status(200).json({
                data: result,
              error: false,
              msg: "Marca atualizada com sucesso!",
            });
          }
          response.status(404).json({
            data: marca,
            error: true,
            msg: "Marca não encontrada!",
          });
        } catch (err) {
          response.status(200).json({
            data: err,
            error: true,
            msg: "Marca não encontrada!",
          });
        }
         
        }

}

export { MarcaController };