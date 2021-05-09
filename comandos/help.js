const config = require("../config.json"); //requer a pasta de configuração com o token do Bot
const commands = require("../scripts/commandsReader")(config.prefix);

const descriptions = {
  "-help": "Use esse comando para ver todos os comandos disponiveis.",
  "-clear": "Limpar o Chat",
  "-aviso": "Escrever uma mensage no canal de avisos",
};

module.exports = async (client, msg) => {
  var texto = "Comandos: \n";
  Object.keys(commands).forEach((command) => {
    texto += `\n ${command}: ${
      descriptions[command] ? descriptions[command] : "Nao tem descrição."
    }`;
  });
  msg.reply(texto);
};
