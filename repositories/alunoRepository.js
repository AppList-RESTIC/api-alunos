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

function deleteAluno(id) {
  // Encontra o índice do aluno no array com base no ID fornecido
  const index = alunos.findIndex(aluno => aluno.id === id);

  if (index === -1) {
    console.log('Aluno não encontrado');
    return false; // Aluno não foi encontrado
  }
  alunos.splice(index, 1); // Remove o aluno no índice encontrado
  console.log('Aluno deletado');
  return true; 
}

// Exporta a funções para utilizar em outros módulos
module.exports = {
  create,deleteAluno
};
