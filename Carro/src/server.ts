import express from "express";
import cors from "cors";
import { router } from "./config/routes";
import { mongoose } from "./config/database";

console.clear();

const app = express();
const database = mongoose;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(1234, function () {
  console.log("Servidor rodando");
});
