import { Router, Request, Response} from "express";
import { CarroController } from "../controllers/CarroController";

const router = Router();
const carroController = new CarroController();

router.post("/carro/cadastrar", carroController.cadastrar);
router.get("/carro/buscar/:placa", carroController.buscar);
router.get("/carro/listar", carroController.listar);
router.put("/carro/alterar", carroController.alterar);
router.delete("/carro/remover/:placa", carroController.remover);

export { router };