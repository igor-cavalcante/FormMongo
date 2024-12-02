# FormMongo
Um projeto utilizando Node.js, Express e MongoDB.

Requisitos
Antes de começar, certifique-se de que os seguintes itens estejam instalados na máquina:

Node.js (versão 16 ou superior recomendada)
MongoDB (instância local ou MongoDB Atlas)
Um editor de texto, como Visual Studio Code


Configuração do Ambiente
1. Clone o repositório
git clone https://github.com/seu-usuario/FomMongo.git

Navegue para o diretório do projeto:
cd FomMongo

2. Instale as dependências
No terminal, execute:
npm install


3. Configure o MongoDB
Opção 1: Usando uma instância local do MongoDB
Certifique-se de que o MongoDB está em execução na sua máquina.
Por padrão, o projeto está configurado para se conectar ao MongoDB local (mongodb://localhost:27017).
Para configurar a URL do seu banco vá para o arquivo ./src/connect.js

4. Execute o projeto
Para rodar o projeto com Nodemon (recomendado para desenvolvimento), execute:
npm run dev

Se preferir rodar com o Node.js padrão:
npm start


O servidor estará disponível em http://localhost:3000 (ou outra porta especificada no código).


Se tiver problemas ao rodar o projeto, consulte a seção Erros Comuns abaixo ou entre em contato comigo!

----Erros Comuns ----
MongoDB não está rodando:

Verifique se o MongoDB foi iniciado.
No terminal, inicie o MongoDB localmente:

mongod
Porta em uso:

Mude a porta do servidor alterando o código no index.js:
const port = 3000 || 4000; // Por exemplo, porta 4000
Dependências ausentes:

Execute npm install novamente para reinstalar as dependências.

Boa sorte e bom desenvolvimento! 🚀