import { model, Schema } from "mongoose";
import { mongoose } from "../config/database";

const MarcaSchema  = new Schema({
    nome: { 
        type: String, 
        required: [true,"O campo NOME da marca é obrigatório!"],
        min: [5, "O campo NOME deve ter  no mínimo 5 carateres!"],
        max: [128, "O campo NOME deve ter  no máximo 128 carateres!"],
    },
    carro: [
        {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "carros", 
        required: false
    }],
},
    {
        //Gera o criadoEm
        timestamps: true,
    }
);

export default model("marcas", MarcaSchema);