const express = require("express");
const path = require( 'path')
const {
  listarcidades,
  cadastrarCidades,
  deletarCidade,
  carregarCidadeParaEdicao,
  editarCidade
} = require("../controller/controllerCidade");


const router = express.Router();


// Configurar a rota raiz para servir o formulário
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "formCidade.html"));
});

// Rota GET para buscar todos os dados de cidades
router.get("/cidades", listarcidades);

// Rota POST para cadastrar uma nova cidade
router.post("/cadastrarCidade", cadastrarCidades);

// Rota DELETE para deletar uma cidade pelo ID
router.get("/deletarCidade/:id", deletarCidade);

// Rota para enviar o formulário de edição
router.get("/FormEdicaoCidade/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "editarCidade.html"));
});

router.get("/carregarCidade/:id", carregarCidadeParaEdicao); // Buscar dados da cidade para edição
router.post("/editarCidade/:id", editarCidade); // Salvar alterações da cidade




module.exports = router;
