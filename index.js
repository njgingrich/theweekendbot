const { Client, MessageEmbed } = require('discord.js');
require('dotenv').config();

const config = {
    BOT_TOKEN: process.env.BOT_TOKEN,
    GUILD_ID: process.env.GUILD_ID,
}

const client = new Client();

async function sendMessage(){
    const guild = await client.guilds.fetch(config.GUILD_ID);
    if (!guild) {
        console.log("no guild");
        return;
    }

    if (!guild.available) {
        console.log("not available");
    }

    const channelId = guild.systemChannelID;
    const channel = guild.channels.cache.find(ch => ch.id === channelId);

    if (channel) {
        // const message = new MessageEmbed()
        //     .setTitle('Ladies and gentlemen...')
        //     .setColor(0xff0000)
        //     .setURL('https://www.youtube.com/watch?v=V_cnK8Cd6Ag')
        //     .setDescription('The Weekend.');
        // const message = 'https://www.youtube.com/watch?v=V_cnK8Cd6Ag';
        const message = new MessageEmbed()
            .setTitle('Ladies and gentlemen...')
            .setImage('https://media1.tenor.com/images/e39daff4d4a5ebea5dd4e379fdb22e32/tenor.gif?itemid=20442724')
            .setColor(0xff0000);
        channel.send(message);
    } else {
        console.log('no channel');
    }
}

client.once('ready', () => {
    sendMessage();
    process.exit(0);
});

client.login(config.BOT_TOKEN);
