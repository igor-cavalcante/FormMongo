const express = require("express");
const path = require("path");


const { listarRio, cadastrarRio } = require("../controller/controllerRio");

const routerRio = express.Router();

routerRio.get("/rio", (req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","formRio.html"))
})

//Rota Get para buscar dados de Rio
routerRio.get("/listarrio", listarRio);

routerRio.post("/cadastrarRio", cadastrarRio);

module.exports = routerRio;