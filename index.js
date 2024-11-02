const express = require("express");

const app = express(); // app para receber o express
const port = 3000; // Porta da app

app.get("/alunos", (req, res) => {
  res.send("Buscando todas os alunos");
});

app.listen(port, () => console.log(`Server running em ${port} `));
