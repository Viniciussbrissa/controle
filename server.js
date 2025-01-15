// Importa o Express
const express = require('express');

// Cria uma aplicação Express
const app = express();

// Define a porta em que o servidor vai rodar
const PORT = process.env.PORT || 10000;

// Cria uma rota GET para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
