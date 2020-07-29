const express = require("express");
const { response } = require("express");
const app = express();

app.use(express.json());

const { uuid } = require("uuidv4");

const scraps = [];

// listar scraps
app.get("/scraps", (request, response) => {
  const { title } = request.query;

  const results = title
    ? scraps.filter((scrap) => scrap.title.includes(title))
    : scraps;

  return response.json(results);
});

app.post("/scraps", (request, response) => {
  const { title, message } = request.body;

  const scrap = { id: uuid(), title, message };

  scraps.push(scrap);

  return response.json(scrap);
});

const port = 3333;

app.listen(3333, () => {
  console.log(`Server up and running on PORT ${port}`);
});
