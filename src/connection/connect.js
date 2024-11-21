
const mongoose = require('mongoose');
// Conexão com o banco de dados
const connect = mongoose.connect('mongodb://localhost:27017/Aula-10-10', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Conectado ao MongoDB!')).catch(err => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = {connect};