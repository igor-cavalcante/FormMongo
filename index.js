const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;
const { connect } = require('./src/connection/connect');
// Middleware para processar JSON no corpo da requisição
app.use(express.json());

connect.then(() => {
    console.log('Conexão estabelecida com sucesso no index.js');
}).catch(err => {
    console.error('Erro ao conectar ao MongoDB no index.js:', err);
});

// Definição do Schema e do Modelo Cidade
const SchemaCidade = new mongoose.Schema({
    Nome: String,
    Pais: String,
    Pop: Number,
    Capital: String,
});

const Cidade = mongoose.model('Cidade', SchemaCidade, "cidades");

//Definição do Schem e Modelo Pais 
const SchemaPais = new mongoose.Schema({
    Nome: { type: String, required: false },
    Pais: { type: String, required: false },
    Pop: { type: Number, required: false },
    Capital: { type: String, required: false }
  });

 

const Paises = mongoose.model('Pais', SchemaPais, "pais");

// Rota GET raiz para testar a conexão
app.get("/", (req, res) => {
    res.send('Hello World');
});


// Rota GET para buscar todos os dados de cidades
app.get("/cidades", async (req, res) => {
    try {
        const cidades = await Cidade.find(); // Busca todas as cidades no banco
        res.status(200).json(cidades); // Retorna os dados como JSON
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        res.status(500).send('Erro ao buscar os dados.');
    }
});

//Rota GET para buscar todos os Paises
app.get("/pais",async(req,res)=> {
    try {
        const paises = await Paises.find(); //busca paises no banco
        res.status(200).json(paises); //retornando dados
    } catch (error) {
        res.status(500).send("Erro ao buscas dados")
    }
});


//Rota POST para cadastrar um novo pais 
app.post("/cadastrarPais",async (req,res)=>{
    const {Nome ,Pais ,Pop ,Capital} = req.body;
    try {
        const novoPais = new Paises({Nome,Pais,Pop,Capital});
        await novoPais.save();
        res.status(200).send("Dados cadastrados com sucesso");
    } catch (error) {
        res.status(400).send("Error ao cadastrar daddos");
    }
});

// Rota POST para cadastrar uma nova cidade
app.post("/cadastrarCidade", async (req, res) => {
    const { Nome, Pais, Pop, Capital } = req.body;

    try {
        const novaCidade = new Cidade({ Nome, Pais, Pop, Capital });
        await novaCidade.save();
        res.status(201).send('Dados cadastrados com sucesso!');
    } catch (error) {
        console.error('Erro ao cadastrar os dados:', error);
        res.status(400).send('Erro ao cadastrar os dados.');
    }
});



// Iniciando o servidor
app.listen(port, () => {
    console.log("Servidor rodando na porta:", port);
});