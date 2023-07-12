import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/config.js";
import ciclistasRouter from "./routes/ciclistas.routes.js";
import equiposRouter from "./routes/equipos.routes.js";
import etapaRouter from "./routes/etapas.routes.js";
import premioRouter from "./routes/premios.routes.js";
const app = express();
app.use(express.json());
dotenv.config();

app.use("/", ciclistasRouter);
app.use("/", equiposRouter);
app.use("/", etapaRouter);
app.use("/", premioRouter);

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () =>{
    console.log(`The server is running on the port: ${PORT}`);
});