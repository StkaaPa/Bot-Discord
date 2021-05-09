const Discord = require("discord.js"); //exigir a dependencia discord.js
const client = new Discord.Client(); //cria um novo Discord.Client e o atribui à constante client

const config = require("./config.json"); //requer a pasta de configuração com o token do Bot
const commands = require("./scripts/commandsReader")(config.prefix);
const unknowCommand = require("./scripts/unknowCommand");

client.on("ready", () => {
  console.log(`iniciando com o bot ${client.user.tag}`);
});

client.on("message", (msg) => {
  //verificar se a mensagem não é enviada pelo bot
  if (!msg.author.bot) {
    //args é uma lista com o conteudo da mensagem toda separada por espaço
    const args = msg.content.split(" ");
    //verifica o primeiro espaço do argumento
    if (commands[args[0]]) commands[args[0]](client, msg);
    else if (args[0].split("")[0] == config.prefix) unknowCommand(client, msg);
  }
});

client.on("guildMemberAdd", async (member) => {
  const entradasChannel = member.guild.channels.cache.find(
    (channel) => channel.id == config.entradasChannelId
  );
  entradasChannel.send(`${member.user}! Seja Bem vindo ao nosso servidor!`);
});

client.on("guildMemberRemove", (member) => {
  const entradasChannel = member.guild.channels.cache.find(
    (channel) => channel.id == config.entradasChannelId
  );
  entradasChannel.send(`${member.user}! Saiu do Servidor!`);
});

client.login(config.BOT_TOKEN); //é usado o metodo login no client para fazer login no bot Discord
