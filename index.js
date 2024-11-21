const express = require("express");
const app = express();
const port = 8080;
const { connect } = require("./src/connection/connect");
// Middleware para processar JSON no corpo da requisição
app.use(express.json());

connect
  .then(() => {
    console.log("Conexão estabelecida com sucesso no index.js");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB no index.js:", err);
  });

const {
  listarcidades,
  cadastrarCidades,
} = require("./src/controller/controllerCidade");

const {
  listarPaises,
  cadastrarPaises,
} = require("./src/controller/controllerPais");

const { listarRio, cadastrarRio } = require("./src/controller/controllerRio");

// Rota GET raiz para testar a conexão
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Rota GET para buscar todos os dados de cidades
app.get("/cidades", listarcidades);

// Rota POST para cadastrar uma nova cidade
app.post("/cadastrarCidade", cadastrarCidades);

//Rota GET para buscar todos os Paises
app.get("/pais", listarPaises);

//Rota POST para cadastrar um novo pais
app.post("/cadastrarPais", cadastrarPaises);

//Rota Get para buscar dados de Rio
app.get("/rio", listarRio);

app.post("/cadastrarRio", cadastrarRio);

// Iniciando o servidor
app.listen(port, () => {
  console.log("Servidor rodando na porta:", port);
});
