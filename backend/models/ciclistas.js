import mongoose from "mongoose";

const ciclistaSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    edad: {
        type: Number,
        required: true,
        trim: true
    },
    peso: {
        type: Number,
        required: true,
        trim: true
    },
    equipo: {
        type: String,
        required: true,
        trim: true
    }

},
{
    timestamps: true,
}); 


const Ciclista = mongoose.model("Ciclista", ciclistaSchema);


export default Ciclista;