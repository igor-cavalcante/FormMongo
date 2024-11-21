//importando modelo
const { Rio } = require("../model/model");

const listarRio = async (req, res) => {
  try {
    const dadosRio = await Rio.find();
    res.status(200).json(dadosRio);
  } catch (error) {
    console.error("Erro ao buscar os dados", error);
    res.status(400).send("Erro ao buscar os dados");
  }
};

const cadastrarRio = async (req, res) => {
  const { Nome, Nascente, Pais, Comprimento } = req.body;

  try {
    const novoRio = new Rio({ Nome, Nascente, Pais, Comprimento });
    await novoRio.save();
    res.status(200).send("Dados salvos com sucesso");
  } catch (error) {
    console.error("Erro ao salvar dados ", error);
    res.status(400).send("Erro ao salvar dados");
  }
};

module.exports = {
  listarRio,
  cadastrarRio,
};
