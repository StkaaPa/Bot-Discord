//Este script será usado para ler a psata "comandos" e mostrar os mesmos no index.js

const fs = require("fs");
const dir = "./comandos/"; //para nao estar sempre a escrever o dir, define-se logo atraves desta const

module.exports = (prefix) => {
  var commands = {};

  const scripts = fs.readdirSync(dir);
  scripts.forEach((script) => {
    //usamos ../ quando é necessário utilizar o comando fs que esta em cima, pois executa como se estivesse no index.js
    //mas o "require" nao faz isso, e por isso tem que se voltar uma pasta atrás para pode requirir o ficheiro
    //script.split significa que vai separar o nome do script em dois, retirando o "." e retirando a extensao
    //para isso utiliza-se [0] para apenas ficar com o nome do script
    commands[prefix + script.split(".")[0]] = require("../" + dir + script);
  });
  //vai ler e vai returnar os comandos
  return commands;
};
