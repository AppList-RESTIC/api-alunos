# API RESTful para Gestão de Alunos 🖥️🧑🏾‍🎓

## Descrição

Este projeto é uma API RESTful desenvolvida em Node.js com o framework Express. A API permite a criação, leitura, atualização e exclusão (CRUD) de registros de alunos. O projeto foi criado como parte da colaboração em grupo do curso da CEPEDI.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework minimalista para construção de APIs e aplicativos web.
- **Nodemon**: Ferramenta que ajuda a desenvolver aplicações Node.js, reiniciando automaticamente o servidor sempre que mudanças nos arquivos são detectadas.
- **UUID**: Biblioteca para geração de IDs únicos, utilizada para identificar os alunos de forma exclusiva.
- **REST Client**: Extensão para o Visual Studio Code que facilita o teste de requisições HTTP.

## Funcionalidades

A API permite as seguintes operações:

1. **Criar Aluno**
   - **Método**: `POST`
   - **Endpoint**: `/alunos`
   - **Body**: JSON contendo `nomeCompleto`, `email` e `nomeCurso`.

2. **Listar Alunos**
   - **Método**: `GET`
   - **Endpoint**: `/alunos`
   - **Resposta**: JSON com a lista de alunos.

3. **Atualizar Aluno**
   - **Método**: `PUT`
   - **Endpoint**: `/alunos/:id`
   - **Body**: JSON com os dados a serem atualizados (`nomeCompleto`, `email`, `nomeCurso`).
   - **Parâmetros**: `id` (ID único do aluno a ser atualizado).

4. **Remover Aluno**
   - **Método**: `DELETE`
   - **Endpoint**: `/alunos/:id`
   - **Parâmetros**: `id` (ID único do aluno a ser removido).

## Como Executar

1. **Clonar o Repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <DIRETORIO_DO_REPOSITORIO>
   ```

2. **Instalar Dependências**
   ```bash
   npm install
   ```

3. **Executar a Aplicação**
   ```bash
   npm run dev
   ```
   Isso iniciará o servidor em `http://localhost:3000`.

## Exemplos de Requisições

- **Criar Aluno**
   ```http
   POST http://localhost:3000/alunos
   Content-Type: application/json

   {
       "nomeCompleto": "Aluno 4",
       "email": "aluno4@teste.com",
       "nomeCurso": "Geografia"
   }
   ```

- **Listar Alunos**
   ```http
   GET http://localhost:3000/alunos
   Content-Type: application/json
   ```

- **Atualizar Aluno**
   ```http
   PUT http://localhost:3000/alunos/<id>
   Content-Type: application/json

   {
       "nomeCompleto": "Aluno Atualizado",
       "email": "aluno_atualizado@teste.com",
       "nomeCurso": "Engenharia"
   }
   ```

- **Remover Aluno**
   ```http
   DELETE http://localhost:3000/alunos/<id>
   ```


