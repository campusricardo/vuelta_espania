import Etapa from "../models/etapas.js";

const obtenerEtapas = async (req, res) => {

    const etapas = await Etapa.find();

    res.json(etapas);

}

const agregarEtapa = async (req, res) => {

    const etapa = new Etapa(req.body);

    try {
        const nuevoEtapa = await etapa.save();

        res.json(nuevoEtapa);
    } catch (error) {
        console.log(`${error.message}`);
    }
}

const borrarEtapa = async (req, res) => {

    try {
        await Etapa.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Etapa no existe"});
    }
}

const actualizarEtapa = async  (req, res) => {
    try {
        const etapa = await Etapa.findOne({_id: req.params.id});

        if (req.body.nombre) {
            etapa.nombre = req.body.nombre;
        }
        if (req.body.duracionM){
            etapa.duracionM = req.body.duracionM;
        }
        if (req.body.longitudK) {
            etapa.longitudK = req.body.longitudK;
        }
        if (req.body.tmrM) {
            etapa.tmrM = req.body.tmrM;
        }


        await etapa.save();
        res.send(etapa);
    } catch (error) {
        res.status(404);
        res.send({error: "Etapa no existe"})
    }
}

const getOneEtapa = async (req, res) => {
    try {
        const etapa = await Etapa.findOne({_id: req.params.id});
        await etapa.save();
        res.send(etapa);
    } catch (error) {
        res.status(404);
        res.send({error: "Etapa no encontrada"});
    }
}

export {obtenerEtapas,agregarEtapa, borrarEtapa, actualizarEtapa, getOneEtapa};