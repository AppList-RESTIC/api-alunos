const express = require("express");

const app = express(); // Criando uma nova instância do servidor express
const port = 3000; // Porta da app

app.use(express.json()); // Para tratar requisições JSON

// Definindo uma rota POST em "/alunos" para criar alunos
app.post("/alunos", (req, res) => {
  // Extrai nomeCompleto, email e nomeCurso do corpo da requisição
  const { nomeCompleto, email, nomeCurso } = req.body;
  // Chama a função create para criar um novo aluno
  const aluno = create({ nomeCompleto, email, nomeCurso });
  // Envia uma resposta com status 201 (Criado) e o objeto do aluno em formato JSON
  res.status(201).json(aluno);
});

// Definindo uma rota GET em "/alunos" para listar alunos
app.get("/alunos", (req, res) => {
  res.send("Buscando todos os alunos");
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
