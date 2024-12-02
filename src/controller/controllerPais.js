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

// Rota POST para cadastrar um novo país
const cadastrarPaises = async (req, res) => {
  const { Nome, Continente, Pop, PIB, Expec_via } = req.body; // Desestruturação dos dados do corpo da requisição
  try {
    // Criação de um novo documento no MongoDB
    const novoPais = new Paises({ Nome, Continente, Pop, PIB, Expec_via });
    await novoPais.save(); // Salva o novo documento no banco de dados
    res.redirect("/pais");
  } catch (error) {
    console.error("Erro ao cadastrar dados:", error);
    res.status(400).send("Erro ao cadastrar dados");
  }
};


// Deletar cidade por ID
const deletarPais = async (req, res) => {
  const { id } = req.params;

  try {
    const paisRemovido = await Paises.findByIdAndDelete(id);
    if (!paisRemovido) {
      return res.status(404).send("Pais não encontrada.");
    }
    // Redirecionar para a rota raiz
    res.redirect("/pais"+"?sucessoDelete=true");
  } catch (error) {
    console.error("Erro ao deletar a cidade:", error);
    res.status(500).send("Erro ao deletar a cidade.");
  }
};


// Carregar dados da cidade para edição
const carregarpaisParaEdicao = async (req, res) => {
  const { id } = req.params;

  try {

    const pais = await Paises.findById(id);
    if (!pais) {
      return res.status(404).send("Cidade não encontrada.");
    }

    res.status(200).json(pais); // Renderiza um template com os dados da cidade
  } catch (error) {
    console.error("Erro ao carregar a cidade para edição:", error);
    res.status(500).send("Erro ao carregar os dados.");
  }
};

const editarPais = async (req, res) => {
  const { id } = req.params;
  const { Nome, Continente, Pop, PIB, Expec_via } = req.body;

  try {
    const paisAtualizado = await Paises.findByIdAndUpdate(
      id,
      { Nome, Continente, Pop, PIB, Expec_via },
      { new: true }
    );

    if (!paisAtualizado) {
      return res.status(404).send("Cidade não encontrada.");
    }

    res.redirect("/pais"); // Redireciona para a lista de cidades após a edição
  } catch (error) {
    console.error("Erro ao editar o pais:", error);
    res.status(500).send("Erro ao editar o pais.");
  }
};


module.exports = {
  listarPaises,
  cadastrarPaises,
  deletarPais,
  carregarpaisParaEdicao,
  editarPais
};
