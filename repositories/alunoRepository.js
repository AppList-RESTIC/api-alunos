const { v4: uuidv4 } = require("uuid");

// Array para armazenar os alunos
let alunos = [];

function create({ nomeCompleto, email, nomeCurso }) {
  // Cria um novo objeto aluno com um ID único e os dados fornecidos
  const aluno = {
    id: uuidv4(),
    nomeCompleto,
    email,
    nomeCurso,
  };

  // Adiciona o novo aluno ao array de alunos
  alunos.push(aluno);
  // Retorna o objeto do aluno criado
  return aluno;
}
