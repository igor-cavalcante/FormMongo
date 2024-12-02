const express = require("express");
const path = require("path");


const { listarRio, cadastrarRio, deletarRio, carregarrioParaEdicao, editarRio } = require("../controller/controllerRio");

const routerRio = express.Router();

routerRio.get("/rio", (req,res)=>{
    res.sendFile(path.join(__dirname,"..","view","formRio.html"))
})

routerRio.get("/FormEdicaoRio/:id", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "view", "editarRio.html"));
  });

//Rota Get para buscar dados de Rio
routerRio.get("/listarrio", listarRio);
routerRio.get("/deletarRio/:id", deletarRio);

routerRio.get("/carregarRio/:id", carregarrioParaEdicao);
routerRio.post("/editarRio/:id", editarRio);

routerRio.post("/cadastrarRio", cadastrarRio);

module.exports = routerRio;