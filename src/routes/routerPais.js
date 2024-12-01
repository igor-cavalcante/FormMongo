const express = require("express");
const path = require("path")

const {
    listarPaises,
    cadastrarPaises,
    
  } = require("../controller/controllerPais");


  const routerPais = express.Router();
routerPais.get("/pais", (req, res)=>{
    res.sendFile(path.join(__dirname, "..","view","formPais.html"))
})

//Rota GET para buscar todos os Paises
routerPais.get("/listarpaises", listarPaises);

//Rota POST para cadastrar um novo pais
routerPais.post("/cadastrarPais", cadastrarPaises);


module.exports =  routerPais ; 