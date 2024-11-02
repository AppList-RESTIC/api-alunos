const express = require("express");
const {
  create,
  getAllAlunos,
  update,
  deleteAluno,
} = require("./repositories/alunoRepository");

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
  const alunos = getAllAlunos(); // Obtém todos os alunos
  res.status(200).json(alunos); // Retorna a lista de alunos em formato JSON
});

// Definindo uma rota PUT em "/alunos/:id" para atualizar alunos
app.put("/alunos/:id", (req, res) => {
  const { id } = req.params;
  const dadosAtualizados = req.body;

  // Chama a função update para atualizar o aluno
  const alunoAtualizado = update(id, dadosAtualizados);

  if (alunoAtualizado) {
    res.status(200).json(alunoAtualizado); // Envia o aluno atualizado em formato JSON
  } else {
    res.status(404).send({ message: "Aluno não encontrado" }); // Aluno não encontrado
  }
});

// Definindo uma rota DELETE em "/alunos" para criar alunos
app.delete("/alunos/:id", (req, res) => {
  const { id } = req.params;
  const removed = deleteAluno(id); // Verifica se a remoção foi bem-sucedida
  if (removed) {
    res.status(204).send(); // Aluno removido com sucesso
  } else {
    res.status(404).send({ message: "Aluno não encontrado" }); // Aluno não encontrado
  }
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
