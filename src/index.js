const express = require("express");
const { response } = require("express");
const app = express();

app.use(express.json());

const { uuid, isUuid } = require("uuidv4");

const scraps = [];

// Mmiddleware para exibir log com o tempo das requisições
function logRequest(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next(); // Próximo middleware

  console.timeEnd(logLabel);
}

// Middleware para validar se o uid do scrap é válido
function validateScrapId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response
      .status(400)
      .json({ error: `Param sent is not a valid UUID` });
  }

  next();
}

// Middleware para validar se title e message foram informados
function validateScrapTitleMessage(request, response, next) {
  const { title, message } = request.body;

  if (!title) {
    return response.status(400).json({ error: `Título não informado` });
  } else if (!message) {
    return response.status(400).json({ error: `Mensagem não informada` });
  }

  next();
}

app.use(logRequest);

// Método para listar recados
app.get("/scraps", (request, response) => {
  const { title } = request.query;

  const results = title
    ? scraps.filter((scrap) => scrap.title.includes(title))
    : scraps;

  return response.status(200).json(results);
});

// Método para criar recados
app.post("/scraps", validateScrapTitleMessage, (request, response) => {
  const { title, message } = request.body;

  const scrap = { id: uuid(), title, message };

  scraps.push(scrap);

  return response.status(201).json(scrap);
});

// Método para editar recados
app.put("/scraps/:id", validateScrapId, (request, response) => {
  const { id } = request.params;
  const { title, message } = request.body;

  const scrapIndex = scraps.findIndex((scrap) => scrap.id == id);

  if (scrapIndex < 0) {
    return response.status(404).json({ error: "scrap not found." });
  }

  const scrap = {
    id,
    title,
    message,
  };

  scraps[scrapIndex] = scrap;

  return response.status(202).json(scrap);
});

// Método para deletar recados
app.delete("/scraps/:id", validateScrapId, (request, response) => {
  const { id } = request.params;

  const scrapIndex = scraps.findIndex((scrap) => scrap.id === id);

  if (scrapIndex < 0) {
    return response.status(404).json({ error: "scrap not found." });
  }

  scraps.splice(scrapIndex, 1);

  return response.status(204).send();
});

const port = 3333;

app.listen(3333, () => {
  console.log(`Server up and running on PORT ${port}`);
});
