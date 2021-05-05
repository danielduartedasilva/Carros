import { Router, Request, Response} from "express";
import { CarroController } from "../controllers/CarroController";
import { MarcaController } from "../controllers/MarcaControler";

const router = Router();
const carroController = new CarroController();
const marcaController = new MarcaController();
router.post("/carro/cadastrar", carroController.cadastrar);
router.get("/carro/listar", carroController.listar);
router.get("/carro/listar/:placa", carroController.buscar);
router.get("/carro/remover/:placa", carroController.remover);

router.post("/marca/cadastrar", marcaController.cadastrar);
router.get("/marca/listar", marcaController.listar);
router.get("/marca/listar/:id", marcaController.listarPorId);
router.put("/marca/alterar/:nome", marcaController.alterar);
//router.get("/carro/remover/:placa", carroController.remover);
export { router };