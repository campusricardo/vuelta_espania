import mongoose from "mongoose";

const premioSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    categoria: {
        type: String,
        required: true,
        trim: true
    },
    ganador: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
}); 


const Premio = mongoose.model("Premio", premioSchema);


export default Premio;