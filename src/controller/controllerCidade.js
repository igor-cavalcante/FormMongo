const path = require("path"); 

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
    res.redirect("/");
  } catch (error) {
    console.error("Erro ao cadastrar os dados:", error);
    res.status(400).send("Erro ao cadastrar os dados.");
  }
};

// Deletar cidade por ID
const deletarCidade = async (req, res) => {
  const { id } = req.params;

  try {
    const cidadeRemovida = await Cidade.findByIdAndDelete(id);
    if (!cidadeRemovida) {
      return res.status(404).send("Cidade não encontrada.");
    }
    // Redirecionar para a rota raiz
    res.redirect("/"+"?sucessoDelete=true");
  } catch (error) {
    console.error("Erro ao deletar a cidade:", error);
    res.status(500).send("Erro ao deletar a cidade.");
  }
};

const editarCidade = async (req, res) => {
  const { id } = req.params;
  const { Nome, Pais, Pop, Capital } = req.body;

  try {
    const cidadeAtualizada = await Cidade.findByIdAndUpdate(
      id,
      { Nome, Pais, Pop, Capital },
      { new: true }
    );

    if (!cidadeAtualizada) {
      return res.status(404).send("Cidade não encontrada.");
    }


    
    res.redirect("/"); // Redireciona para a lista de cidades após a edição
  } catch (error) {
    console.error("Erro ao editar a cidade:", error);
    res.status(500).send("Erro ao editar a cidade.");
  }
};

// Carregar dados da cidade para edição
const carregarCidadeParaEdicao = async (req, res) => {
  const { id } = req.params;

  try {

    const cidade = await Cidade.findById(id);
    if (!cidade) {
      return res.status(404).send("Cidade não encontrada.");
    }

    res.status(200).json(cidade); // Renderiza um template com os dados da cidade
  } catch (error) {
    console.error("Erro ao carregar a cidade para edição:", error);
    res.status(500).send("Erro ao carregar os dados.");
  }
};




module.exports = {
  listarcidades,
  cadastrarCidades,
  deletarCidade,
  carregarCidadeParaEdicao,
  editarCidade
};
