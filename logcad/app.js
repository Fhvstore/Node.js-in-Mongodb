const express = require('express')
const app = express();
const routes = require("./modules/routes") //importando o arq (routes.js)
const bodyParser = require("body-parser");
const mongo = require('mongodb');
const mongoose = require("mongoose");
const user = require("./user")
app.use("/", routes); //declarando o router ---(routes e o nome do arquivo.js)

//conexão com o MONGODB
mongoose.connect("mongodb+srv://fhvstore:aqwaqwaqw@cluster0.w18pldl.mongodb.net/test").then((data) => {
  console.log("Mongodb ON");
}).catch((err) => {
  console.log("error na conexao" + err);
})

// BODY PARSER // RECEBER DADOS DOS INPUT 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log("Servidor Online")
})