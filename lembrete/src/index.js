const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
const lembretes = {};
contador = 0;
app.get("/lembretes", (req, res) => {
  res.send(lembretes);
});
app.put("/lembretes", async (req, res) => {
  contador++;
  const { texto } = req.body;
  lembretes[contador] = {
    contador,
    texto,
  };
  await axios.post("http://192.168.0.225:10000/eventos", {
    tipo: "LembreteCriado",
    dados: {
      contador,
      texto,
    },
  });
  res.status(201).send(lembretes[contador]);
});
app.listen(4000, () => {
  console.log("Lembretes. Porta 4000");
});
