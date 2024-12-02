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
    res.redirect("/rio");
  } catch (error) {
    console.error("Erro ao salvar dados ", error);
    res.status(400).send("Erro ao salvar dados");
  }
};



// Deletar cidade por ID
const deletarRio = async (req, res) => {
  const { id } = req.params;

  try {
    const rioRemovido = await Rio.findByIdAndDelete(id);
    if (!rioRemovido) {
      return res.status(404).send("rio não encontrada.");
    }
    // Redirecionar para a rota raiz
    res.redirect("/rio"+"?sucessoDelete=true");
  } catch (error) {
    console.error("Erro ao deletar o Rio:", error);
    res.status(500).send("Erro ao deletar o Rio .");
  }
};


// Carregar dados da cidade para edição
const carregarrioParaEdicao = async (req, res) => {
  const { id } = req.params;

  try {

    const rio = await Rio.findById(id);
    if (!rio) {
      return res.status(404).send("Rio não encontrada.");
    }

    res.status(200).json(rio); // Renderiza um template com os dados da cidade
  } catch (error) {
    console.error("Erro ao carregar o Rio para edição:", error);
    res.status(500).send("Erro ao carregar os dados.");
  }
};


const editarRio = async (req, res) => {
  const { id } = req.params; // Captura o ID do rio a ser editado
  const { Nome, Nascente, Pais, Comprimento } = req.body; // Obtém os dados enviados pelo formulário

  try {
    // Atualiza o rio no banco de dados
    const rioAtualizado = await Rio.findByIdAndUpdate(
      id,
      { Nome, Nascente, Pais, Comprimento },
      { new: true } // Retorna o documento atualizado
    );

    if (!rioAtualizado) {
      return res.status(404).send("Rio não encontrado."); // Retorna erro se o rio não existir
    }

    res.redirect("/rio"); // Redireciona para a lista de rios após a edição
  } catch (error) {
    console.error("Erro ao editar o rio:", error);
    res.status(500).send("Erro ao editar o rio."); // Retorna erro genérico em caso de falha
  }
};


module.exports = {
  listarRio,
  cadastrarRio,
  deletarRio,
  carregarrioParaEdicao,
  editarRio
};

