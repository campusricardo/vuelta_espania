import Premio from "../models/premios.js";

const obtenerPremios = async (req, res) => {

    const premios = await Premio.find();

    res.json(premios);

}

const agregarPremio = async (req, res) => {

    const premio = new Premio(req.body);

    try {
        const nuevoPremio = await premio.save();

        res.json(nuevoPremio);
    } catch (error) {
        console.log(`${error.message}`);
    }
}

const borrarPremio = async (req, res) => {

    try {
        await Premio.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no existe"});
    }
}

const actualizarPremio = async  (req, res) => {
    try {
        const premio = await Premio.findOne({_id: req.params.id});

        if (req.body.nombre) {
            premio.nombre = req.body.nombre;
        }
        if (req.body.categoria){
            premio.categoria = req.body.categoria;
        }
        if (req.body.ganador) {
            premio.ganador = req.body.ganador;
        }

        await premio.save();
        res.send(premio);
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no existe"})
    }
}

const getOnePremio = async (req, res) => {
    try {
        const premio = await Premio.findOne({_id: req.params.id});
        await premio.save();
        res.send(premio);
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no encontrada"});
    }
}

export {obtenerPremios,agregarPremio, borrarPremio, actualizarPremio, getOnePremio};