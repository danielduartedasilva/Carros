import { model, Schema } from "mongoose";
const CarroSchema = new Schema({
    modelo: { 
        type: String, 
        required: [true,"O campo modelo é obrigatório!"],
    },
    placa: {
        type: String,
        required: [true,"O campo placa é obrigatório!"],
        min: [8, "O campo deve ter 8 dígitos. Exemplo: aaa-1111"],
    },
    ano: {
        type: Number,
        required: [true,"O campo ano do carro é obrigatório!"],
    },
},
    {
        //Gera o criadoEm
        timestamps: true,
    }
);

//export { CarroSchema};
export default model("carros", CarroSchema);