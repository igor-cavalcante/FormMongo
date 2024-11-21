const express = require("express");
const {
  listarcidades,
  cadastrarCidades,
} = require("../controller/controllerCidade");

const {
  listarPaises,
  cadastrarPaises,
} = require("../controller/controllerPais");

const { listarRio, cadastrarRio } = require("../controller/controllerRio");

const router = express.Router();

// Rota GET raiz para testar a conexão
router.get("/", (req, res) => {
  res.send("Hello World");
});

// Rota GET para buscar todos os dados de cidades
router.get("/cidades", listarcidades);

// Rota POST para cadastrar uma nova cidade
router.post("/cadastrarCidade", cadastrarCidades);

//Rota GET para buscar todos os Paises
router.get("/pais", listarPaises);

//Rota POST para cadastrar um novo pais
router.post("/cadastrarPais", cadastrarPaises);

//Rota Get para buscar dados de Rio
router.get("/rio", listarRio);

router.post("/cadastrarRio", cadastrarRio);

module.exports = router;
