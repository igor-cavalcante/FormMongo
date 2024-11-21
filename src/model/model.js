const mongoose = require("mongoose");

// Definição do Schema e do Modelo Cidade
const SchemaCidade = new mongoose.Schema({
  Nome: String,
  Pais: String,
  Pop: Number,
  Capital: String,
});

const Cidade = mongoose.model("Cidade", SchemaCidade, "cidade");

//Definição do Schem e Modelo Pais
const SchemaPais = new mongoose.Schema({
  Nome: { type: String, required: false },
  Pais: { type: String, required: false },
  Pop: { type: Number, required: false },
  Capital: { type: String, required: false },
});

const Paises = mongoose.model("Pais", SchemaPais, "pais");

//definicão do schema e para modelo Rio

const SchemaRio = new mongoose.Schema({
  Nome: String,
  Nascente: String,
  Pais: String,
  Comprimento: Number,
});

const Rio = mongoose.model("Rio", SchemaRio, "rio");

module.exports = {
  Cidade,
  Paises,
  Rio,
};
