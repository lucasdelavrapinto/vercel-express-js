// Importando as dependências
const express = require('express');

const home = require('./api/home.js');
const check = require('./api/check.js');

// Inicializando o aplicativo Express
const app = express();

// Configurando o middleware para análise de corpo (body) JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', home);
app.use('/api/checkdate', check);

// Iniciando o servidor na porta 3000
app.listen(3333, () => console.log(`Servidor iniciado na porta 3333`));

// Export the Express API
module.exports = app;