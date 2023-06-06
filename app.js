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

//// CRIAR USER E LOGIN ////
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

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    return res.status(422).json({ msg: "Email já cadastrado!" });
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: passwordHash,
  });

  try {
    await user.save();
    res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: `Erro no servidor. Tente novamente mais tarde!` });
  }
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({ msg: "Favor preencher o email!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "Favor preencher a senha!" });
  }

  const userExist = await User.findOne({ email: email });

  if (!userExist) {
    return res.status(404).json({ msg: "Chef não encontrado!" });
  }

  const checkPassword = await bcrypt.compare(password, userExist.password);

  if (!checkPassword) {
    return res.status(422).json({ msg: "Senha incorreta!" });
  }

  try {
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: userExist._id,
      },
      secret
    );

    res.status(200).json({ msg: "Login feito com sucesso!", token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: `Erro no servidor. Tente novamente mais tarde!` });
  }
});

//// POSTAR RECEITA ////

const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3000, function () {
  console.log("Servidor Online");
});
