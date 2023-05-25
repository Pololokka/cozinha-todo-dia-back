const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.listen(5173, function () {
  console.log("Servidor Online");
});

//Fb0oauUTlBrenZ7E
