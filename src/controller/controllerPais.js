//importando modelo
const { Paises } = require("../model/model");

//Rota GET para buscar todos os Paises
const listarPaises = async (req, res) => {
  try {
    const dadosPaises = await Paises.find(); //busca paises no banco
    res.status(200).json(dadosPaises); //retornando dados
  } catch (error) {
    console.error("Erro ao buscar os dados", error);
    res.status(500).send("Erro ao buscas dados");
  }
};

//Rota POST para cadastrar um novo pais
const cadastrarPaises = async (req, res) => {
  const { Nome, Pais, Pop, Capital } = req.body;
  try {
    const novoPais = new Paises({ Nome, Pais, Pop, Capital });
    await novoPais.save();
    res.status(200).send("Dados cadastrados com sucesso");
  } catch (error) {
    res.status(400).send("Error ao cadastrar daddos");
  }
};

module.exports = {
  listarPaises,
  cadastrarPaises,
};
