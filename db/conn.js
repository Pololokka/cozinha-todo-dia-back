const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://bulbovas:Fb0oauUTlBrenZ7E@cluster0.y6535ow.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Conectado no Banco de Dados");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
