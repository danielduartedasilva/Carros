import express from "express";
import { Request, Response} from "express";
import { router } from "./config/routes";
import { mongoose } from "./config/database";

console.clear();

const app = express();
const database = mongoose;

app.use(express.json());
app.use(router);

app.get("/", (request: Request, response: Response) =>{
    response.send("Alo Mundo");
});

app.listen(1234, function() {
    console.log("Servidor rodando");
});