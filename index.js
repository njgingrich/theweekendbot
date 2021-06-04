const { Client, MessageEmbed } = require('discord.js');
require('dotenv').config();

const config = {
    BOT_TOKEN: process.env.BOT_TOKEN,
}

const client = new Client();

async function sendMessage() {
    const promises = client.guilds.cache.map(async guild => {
        if (!guild.available) {
            console.log("unavailable");
            return;
        }

        const channelId = guild.systemChannelID;
        const channel = guild.channels.cache.find(ch => ch.id === channelId);
    
        if (channel) {
            const message = new MessageEmbed()
                .setTitle('Ladies and gentlemen...')
                .setImage('https://media1.tenor.com/images/e39daff4d4a5ebea5dd4e379fdb22e32/tenor.gif?itemid=20442724')
                .setColor(0xff0000);
            await channel.send(message);
        } else {
            console.log('no channel');
        }
    });
    await Promise.all(promises);
}

client.once('ready', async () => {
    await sendMessage();
    process.exit(0);
});

client.login(config.BOT_TOKEN);
