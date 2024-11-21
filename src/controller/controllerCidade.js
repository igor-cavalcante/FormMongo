//importando modelo
const { Cidade } = require("../model/model");

// Buscar cidades
const listarcidades = async (req, res) => {
  try {
    const dadosCidades = await Cidade.find(); // Busca todas as cidades no banco
    res.status(200).json(dadosCidades); // Retorna os dados como JSON
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    res.status(500).send("Erro ao buscar os dados.");
  }
};

//cadastrar cidade

const cadastrarCidades = async (req, res) => {
  const { Nome, Pais, Pop, Capital } = req.body;

  try {
    const novaCidade = new Cidade({ Nome, Pais, Pop, Capital });
    await novaCidade.save();
    res.status(201).send("Dados cadastrados com sucesso!");
  } catch (error) {
    console.error("Erro ao cadastrar os dados:", error);
    res.status(400).send("Erro ao cadastrar os dados.");
  }
};

module.exports = {
  listarcidades,
  cadastrarCidades,
};
