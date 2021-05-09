//coloca-se async porque o comando bulkDelete é assíncrono
module.exports = async (client, msg) => {
  const channel = msg.channel;
  //utiliza-se await para o bot nao apagar a propria mensagem a dizer que o chat esta limpo
  const FetchMsg = await channel.messages.fetch();
  await channel.bulkDelete(FetchMsg);
  msg.reply("The chat is clean!");
};
