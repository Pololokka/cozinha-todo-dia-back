require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cors());

app.use(express.json());

//DB connection
const conn = require("./db/conn");
conn();

//Model
const User = require("./models/User");

//Routes
app.post("/auth/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name) {
    return res.status(422).json({ msg: "Favor preencher o nome!" });
  }

  if (!email) {
    return res.status(422).json({ msg: "Favor preencher o email!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "Favor preencher a senha!" });
  }

  if (password !== confirmPassword) {
    return res.status(422).json({ msg: "As senhas não batem!" });
  }
});

const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3000, function () {
  console.log("Servidor Online");
});
