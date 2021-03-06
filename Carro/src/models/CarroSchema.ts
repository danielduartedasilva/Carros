import { model, Schema } from "mongoose";
import { mongoose } from "../config/database";

const CarroSchema = new Schema(
  {
    modelo: {
      type: String,
      required: [true, "O campo modelo é obrigatório!"],
    },
    placa: {
      type: String,
      required: [true, "O campo placa é obrigatório!"],
      min: [8, "O campo deve ter 8 dígitos. Exemplo: AAA-1111"],
    },
    ano: {
      type: Number,
      required: [true, "O campo ano do carro é obrigatório!"],
    },
  },
  {
    //Gera o criadoEm
    timestamps: true,
  }
);

export default model("carros", CarroSchema);
