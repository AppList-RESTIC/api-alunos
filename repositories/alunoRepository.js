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


// Função para obter todos os alunos
function getAllAlunos() {
  return alunos;
}

// Função para atualizar um aluno
function update(id, dadosAtualizados) {
  const alunoIndex = alunos.findIndex((aluno) => aluno.id === parseInt(id));
  
  if (alunoIndex === -1) return null; // Aluno não encontrado
  
  // Atualiza os dados do aluno com as novas informações
  alunos[alunoIndex] = { ...alunos[alunoIndex], ...dadosAtualizados };
  
  return alunos[alunoIndex]; // Retorna o aluno atualizado
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

// Exporta as funções para utilizar em outros módulos
module.exports = {
  create,
  deleteAluno,
  getAllAlunos,
  update
};


