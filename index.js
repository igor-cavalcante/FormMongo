const express = require("express");
const app = express();
const port = 8080;
const { connect } = require("./src/connection/connect");
// Middleware para processar JSON no corpo da requisição
app.use(express.json());
const router = require("./src/routes/routes"); // Importar rotas

app.use(router);

connect
  .then(() => {
    console.log("Conexão estabelecida com sucesso no index.js");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB no index.js:", err);
  });

// Iniciando o servidor
app.listen(port, () => {
  console.log("Servidor rodando na porta:", port);
});
