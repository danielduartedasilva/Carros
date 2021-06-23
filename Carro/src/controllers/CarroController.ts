import { Request, Response } from "express";
import CarroSchema from "../models/CarroSchema";
class CarroController {

    async cadastrar(request: Request, response: Response) {
        try {
            const{ placa } = request.body;
            if (await CarroSchema.exists({ placa })) {
                response.status(409).json({msg:"Esse carro já existe!"});
            } else {
                const carro = await CarroSchema.create(request.body);
            response.status(201).json({ data: carro, error: false, msg: "Carro cadastrado com sucesso!", });
            }
            
        } catch (error) {
            response.status(400).json({ data: error, error: true, msg: "Não foi possível cadastrar o carro.", });
        }   
    }

    async buscar(request: Request, response: Response) {
        try {
        const { placa } = request.params;
        const carro = await CarroSchema.find({ placa: placa });
        if (carro != null){
            response.status(200).json({ data: carro, error: false, msg: "Carro encontrado!", });
        }
            response.status(400).json({ data: carro, error: false, msg: "Carro não encontrado!", });
        } catch (error) {
            response.status(400).json({ data: error, error: true, msg: "Formato de placa não válido!", });
        }   
     }

    async listar(request: Request, response: Response) {
        try {
            const carros = await CarroSchema.find();
           // response.status(200).json({ data: carros, error: false, msg: "Lista de carros atualizada!", });
           response.status(200).json(carros);
        } catch (error) {
            response.status(400).json({ data: error, error: true, msg: "Não foi possível listar os carros.", });
        }
    }

    // async alterar(request: Request, response: Response) {
    //     try {
    //         const carros = await CarroSchema.find();
    //         response.status(200).json({ data: carros, error: false, msg: "Lista de carros atualizada!", });
    //     } catch (error) {
    //         response.status(400).json({ data: error, error: true, msg: "Não foi possível listar os carros.", });
    //     }
    // }

    async remover(request: Request, response: Response){
        try {
           const { placa } = request.params;
           const carro = await CarroSchema.deleteOne({ placa: placa });
           if (carro != null){
               response.status(200).json({ data: carro, error: false, msg: "Carro excluído!", });
           }
               response.status(400).json({ data: carro, error: false, msg: "Carro não encontrado!", });
        } catch (error) {
           response.status(400).json({ data: error, error: true, msg: "Formato de placa não válido!", });
        } 
    }  

    // async buscar(request: Request, response: Response) {
    //     const { placa } = request.params;
    //         response.status(200).json(await CarroSchema.find({ placa }));
    //  }

    // async listar(request: Request, response: Response) {
    //         response.status(200).json(await CarroSchema.find({  });
    // }

       async alterar(request: Request, response: Response){
           const { placa } = request.body;
           response.status(200).json(await CarroSchema.findOneAndUpdate({ placa }, request.body));
    }

    // async remover(request: Request, response: Response){
    //        const { placa } = request.params;
    //        response.status(200).json(await CarroSchema.deleteOne({ placa });
    // }
}

export { CarroController };