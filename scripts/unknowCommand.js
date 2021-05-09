module.exports = (client, msg) => {
  var message = msg.content.split(" ");
  message = message[0];
  msg.reply(
    `Comando ' ${message} ' nao existe! \nDigite -help para obter a lista de comandos!`
  );
};
