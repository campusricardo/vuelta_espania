import Ciclista from "../models/ciclistas.js";

const obtenerCiclistas = async (req, res) => {

    const ciclistas = await Ciclista.find();

    res.json(ciclistas);

}

const agregarCiclista = async (req, res) => {

    const ciclista = new Ciclista(req.body);

    try {
        const nuevoCiclista = await ciclista.save();

        res.json(nuevoCiclista);
    } catch (error) {
        console.log(`${error.message}`);
    }
}

const borrarCiclista = async (req, res) => {

    try {
        await Ciclista.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Ciclista no existe"});
    }
}

const actualizarCiclista = async  (req, res) => {
    try {
        const ciclista = await Ciclista.findOne({_id: req.params.id});

        if (req.body.nombre) {
            ciclista.nombre = req.body.nombre;
        }
        if (req.body.edad){
            ciclista.edad = req.body.edad;
        }
        if (req.body.peso) {
            ciclista.peso = req.body.peso;
        }
        if (req.body.equipo) {
            ciclista.equipo = req.body.equipo;
        }

        await ciclista.save();
        res.send(ciclista);
    } catch (error) {
        res.status(404);
        res.send({error: "Ciclista no existe"})
    }
}

const getOneCiclista = async (req, res) => {
    try {
        const ciclista = await Ciclista.findOne({_id: req.params.id});
        await ciclista.save();
        res.send(ciclista);
    } catch (error) {
        res.status(404);
        res.send({error: "Ciclista no encontrada"});
    }
}

export {obtenerCiclistas,agregarCiclista, borrarCiclista, actualizarCiclista, getOneCiclista};