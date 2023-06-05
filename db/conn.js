const mongoose = require("mongoose");
const dbUSer = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://${dbUSer}:${dbPass}@cluster0.y6535ow.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conectado no Banco de Dados");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
