import Equipo from "../models/equipos.js";

const obtenerEquipos = async (req, res) => {

    const equipos = await Equipo.find();

    res.json(equipos);

}

const agregarEquipo = async (req, res) => {

    const equipo = new Equipo(req.body);

    try {
        const nuevoEquipo = await equipo.save();

        res.json(nuevoEquipo);
    } catch (error) {
        console.log(`${error.message}`);
    }
}

const borrarEquipo = async (req, res) => {

    try {
        await Equipo.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Equipo no existe"});
    }
}

const actualizarEquipo = async  (req, res) => {
    try {
        const equipo = await Equipo.findOne({_id: req.params.id});

        if (req.body.nombre) {
            equipo.nombre = req.body.nombre;
        }
        if (req.body.pais){
            equipo.pais = req.body.pais;
        }
        if (req.body.can_ciclistas) {
            equipo.can_ciclistas = req.body.can_ciclistas;
        }


        await equipo.save();
        res.send(equipo);
    } catch (error) {
        res.status(404);
        res.send({error: "Equipo no existe"})
    }
}

const getOneEquipo = async (req, res) => {
    try {
        const equipo = await Equipo.findOne({_id: req.params.id});
        await equipo.save();
        res.send(equipo);
    } catch (error) {
        res.status(404);
        res.send({error: "Equipo no encontrada"});
    }
}

export {obtenerEquipos,agregarEquipo, borrarEquipo, actualizarEquipo, getOneEquipo};