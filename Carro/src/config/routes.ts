import { Router, Request, Response} from "express";
import { CarroController } from "../controllers/CarroController";

const router = Router();
const carroController = new CarroController();
router.post("/carro/cadastrar", carroController.cadastrar);
router.get("/carro/listar", carroController.listar);
router.get("/carro/listar/:placa", carroController.buscar);
router.get("/carro/remover/:placa", carroController.remover);


export { router };