const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config()
 
const client = new DiscordJS.Client()
 
client.on('ready', () => {
  // Initialize WOKCommands
  console.log("Ready!!")
  new WOKCommands(client)
  .setMongoPath(process.env.MONGO_URI)
  .setDefaultPrefix(process.env.DEFAULT_PREFIX)
  .setSyntaxError('Incorrect syntax! Please use {PREFIX}{COMMAND} {ARGUMENTS}')
})
 
client.login(process.env.TOKEN)