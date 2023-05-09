const { Client, GatewayIntentBits, EmbedBuilder, ActivityType, Collection,  } = require('discord.js');

const wash = require('washyourmouthoutwithsoap');

const { translate } = require('free-translate');



 
const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

bot.on('ready', () => {
    console.log(`Bot ${bot.user.tag} is logged in! and watching `);

    bot.user.setActivity('Your Security', { type: ActivityType.Watching });
});

bot.on('guildMemberAdd', member => {
    const welcomeEmbed = new EmbedBuilder()
        .setColor('#0c2142')
        .setTitle(`ברוך הבא!!! **${message.author.username}** לעוד ה- **${message.guild.memberCount}** אנשים שנמצאים כאן איתך בשרת`)
        .setDescription('אני NetGuardian אני בוט שנועד למנוע פגיעיות בריוניות בשרת זה ואני כאן לשירותך')
        .setAuthor({ name: 'NetGuardian', iconURL: bot.user.displayAvatarURL(), url: 'https://discord.com/api/oauth2/authorize?client_id=1101546509218087052&permissions=8&scope=bot' })
        .setImage(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter({ text: 'Joined On ', iconURL: bot.user.displayAvatarURL()})
    member.channel.send({ embeds: [welcomeEmbed] });
});

bot.on('messageCreate', message => {
    console.log(message.content);
    (async () => {
        const translatedText = await translate(message.content, { to: 'en' });

        console.log(translatedText); // これはカッコいい！
        if(wash.check("en", translatedText))
        {
            
            message.delete(1000);
            message.channel.send("ההודעה ששלחת נמחקה כיוון שמכילה קללה!");
            const timeoutmessage = new EmbedBuilder()
                .setColor('#e30b0b')
                .setTitle(`**אזהרה !!! אסור לקלל בצ'אט**`)
                .setDescription("אדם שיקלל בצ'אט יורחק מהשרת לזמן מוקצב ולא יוכל לבצע אף פעולה בשרת!!!")
                .setAuthor({ name: 'NetGuardian', iconURL: bot.user.displayAvatarURL(), url: 'https://discord.com/api/oauth2/authorize?client_id=1101546509218087052&permissions=8&scope=bot' })
                .setImage('https://i.imgur.com/jx40uFy.jpeg')
                .setTimestamp()
            message.author.send({ embeds: [timeoutmessage] })
        }
    })();


});
bot.login("MTEwMTU0NjUwOTIxODA4NzA1Mg.GvwQwu.C0jGJ2TUQFmxuEyr_6jhaNjrpPHGzlZZZaIG7I");