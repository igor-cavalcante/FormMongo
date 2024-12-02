const express = require("express");
const path = require("path")

const {
    listarPaises,
    cadastrarPaises,
    deletarPais,
    carregarpaisParaEdicao,
    editarPais
    
  } = require("../controller/controllerPais");
const router = require("./routerCidade");


  const routerPais = express.Router();
routerPais.get("/pais", (req, res)=>{
    res.sendFile(path.join(__dirname, "..","view","formPais.html"))
})

//Rota GET para buscar todos os Paises
routerPais.get("/listarpaises", listarPaises);

//Rota POST para cadastrar um novo pais
routerPais.post("/cadastrarPais", cadastrarPaises);

routerPais.get("/deletarPais/:id",deletarPais);

routerPais.get("/FormEdicaoPais/:id", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "view", "editarPais.html"));
  });


  routerPais.get("/carregarPais/:id", carregarpaisParaEdicao); // Buscar dados da cidade para edição
  routerPais.post("/editarPais/:id", editarPais); // Salvar alterações da cidade

module.exports =  routerPais ; 