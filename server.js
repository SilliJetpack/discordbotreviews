var express = require('express')
, app        = express()
, http       = require('http')
, session    = require('express-session')
, passport   = require('passport')
, Strategy   = require('./lib').Strategy
, hljs       = require('highlight.js')
, remarkable = require("remarkable") // Markdown support
, md         = new remarkable({ highlight: function (str, lang) { if (lang && hljs.getLanguage(lang)) { try { return hljs.highlight(lang, str).value; } catch (err) {} } try { return hljs.highlightAuto(str).value; } catch (err) {} return ''; /* use external default escaping */ }})
, cors       = require('cors')
, fs         = require('fs')
, middleware = require("./lib/dbrmiddleware.js")
, compare    = require("string-similarity")
, moment = require("moment")
var tagnames = {
  imagemanipulation: "Image Manipulation",
  logging: "Logging",
  moderation: "Moderation",
  multilanguage: "Multi Language",
  music: "Music",
  fun: "Fun",
  multipurpose: "Multi Purpose",
  stats: "Statistics",
  gaming: "Gaming",
  dashboard: "Web Dashboard",
  nsfw: "NSFW",
  sync: "Sync",
  roleplay: "Roleplay",
  configuration: "Configuration or Management",
  welcoming: "Welcoming",
  utility: "Utility",
  economy: "Economy",
  anime: "Anime",
  memes: "Memes",
  minecraft: "Minecraft",
  pubg: "PUBG",
  fortnite: "Fortnite"
}
// set the view engine to ejs
app.set('view engine', 'ejs');
// app.set('views', './')
app.set('views', __dirname +  '/views')
// Set Public folder (can be used by glitch console)
app.use(express.static(__dirname + '/public'))
app.use(express.static("/opt/staytus/staytus/public")) // staytus assets
// Set dir for CSS file
app.use(express.static(__dirname + '/views'))
// make express interpret forms
app.use(express.json());
app.use(express.urlencoded());
app.use(function(req, res, next){
        res.render("end.ejs")
        
        });
setInterval(function () {
  var today = new Date()
   var i; var count = 0; while(bot.ipbans.filter(r=> r.expiration !== "forever").array()[count]) {
     
    var lmao = new Date(bot.ipbans.filter(r=> r.expiration !== "forever").array()[count].expiration)
    if(moment(lmao).diff(moment(today), "seconds") < 1) {
      bot.ipbans.delete(bot.ipbans.filter(r=> r.expiration !== "forever").array()[count].ip)
    }
     
  count++}
}, 5000)


// returns random key from Set or Map
function getRandomKey(collection) {
    let index = Math.floor(Math.random() * collection.size);
    let cntr = 0;
    for (let key of collection.keys()) {
        if (cntr++ === index) {
            return key;
        }
    }
}
function generatePassword() {
    var length = 80,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //



passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var scopes = ['identify'];
var callbackurl = "https://discordbotreviews.xyz/callback"
passport.use(new Strategy({
    clientID: "506213298153193483",
    clientSecret: "TiRCvm2eabjoHkvkmk2R43qbU6xId-jt",
    callbackURL: callbackurl,
    scope: scopes
}, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
        return done(null, profile);
    });
}));
var percentColors = [
    { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
    { pct: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
    { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } } ];

function getColorForPercentage(pct) {
    for (var i = 1; i < percentColors.length - 1; i++) {
        if (pct < percentColors[i].pct) {
            break;
        }
    }
    var lower = percentColors[i - 1];
    var upper = percentColors[i];
    var range = upper.pct - lower.pct;
    var rangePct = (pct - lower.pct) / range;
    var pctLower = 1 - rangePct;
    var pctUpper = rangePct;
    var color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
    // or output as hex if preferred
}  


app.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  var ip;
if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
} else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
} else {
    ip = req.ip;
}
  if(bot.ipbans.has(ip)) {
    res.send("")
  } else next()
});
app.get('/auth',
        passport.authenticate('discord', { scope: scopes }), function(req, res) {}
       );
app.get('/callback',
    passport.authenticate('discord', { failureRedirect: '/404' }), function(req, res) { 
  res.redirect('/info')
  bot.fetchUser(req.user.id)
  
  bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + req.user.id + ")" + " logged in")
} // auth success

        
);

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect(req.get("referer"));
});
app.get('/info', checkAuth, function(req, res) {
    //console.log(req.user)
    // res.json(req.user);
  bot.userinfo.ensure(req.user.id, { info: null });
if(!bot.notis.has(req.user.id)) {bot.notis.set(req.user.id, {notis: Array()})}
  res.redirect("/");
});

app.disable("x-powered-by")
function checkAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.send('not logged in :(');
}

 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //
 //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- // //------------------PASSPORT-DISCORD-OAUTH2------------------- //



//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
/*
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});     
const token = "NTA2MjEzMjk4MTUzMTkzNDgz.DsINOw.SRe9DHDHrhXcxroe7kKtIv18Whs";
const util = require("util");
const prefix = "dbr!";
bot.idiots = {}
bot.on('ready', async() => {

  console.log("Logged in " + bot.user.tag);
  bot.user.setActivity(bot.botinfo.size + " bots ", { type: 0 }); 
  let ass = bot.botinfo.map(r=> r.submitter); ass.forEach(async (cli_id, submitter) => { bot.fetchUser(cli_id); if(!bot.userinfo.get(cli_id)){bot.userinfo.set(cli_id, {info: null})}});
  let ass2 = bot.botinfo.map(r=> r.cli_id); ass2.forEach(async (cli_id, submitter) => { bot.fetchUser(cli_id); if(!bot.reactions.get(cli_id)){bot.reactions.set(cli_id, {likes: Array(), dislikes: Array()});}});
  let ass3 = bot.comments.map(r=> r.author); ass3.forEach(async (author, submitter) => { bot.fetchUser(author); });
  let ass69 = bot.submission.map(r=> r.cli_id); ass69.forEach(async (cli_id, submitter) => { bot.fetchUser(cli_id);});
   
  setInterval(function () {
    bot.channels.get("595926335126503425").fetchMessage("595926628803018753")
    .then(r=> {
      var text = Array()
        var numba = 0
      bot.submission.map(r=> r).forEach((r) => {
      bot.fetchUser(r.cli_id)
   
        var checkif = bot.guilds.get("501823156915273751").members.get(r.cli_id) && bot.guilds.get("501823156915273751").members.get(r.cli_id).roles.has("627897708023382016") ? "** *Paused* **" : bot.guilds.get("501823156915273751").members.get(r.cli_id) ? "** *__Undergoing review__* **" : "**Pending approval**"
        text.push("**" + Number(numba + 1) + ".**" + " " + bot.users.get(r.cli_id).username + " (" + bot.users.get(r.cli_id).id + ")" + " | " + checkif)
        numba++
      
      })
      const embed = new Discord.RichEmbed()
      .setDescription("Discord Bot Reviews Quick Queue")
      .setColor("#789cde")
      .addField("**BOT** | **STATUS**", bot.submission.size < 1 ? "**The queue is empty. Nothing to show here.**" : text.slice(0, 10).join("\n"))
      .setFooter(bot.submission.size + " total bots in queue")
      .setTimestamp()
      r.edit(embed)
    })
  
  }, 2000)
  setInterval(function() {
  
  var lmao = bot.guilds.get("500658335217876997").members.filter(r=> r.user.bot).map(r=> r.user.id)
  lmao.forEach(async (id) => {
    var calculated = Number(bot.calculated.get(id, "calculated"))
       calculated++
bot.calculated.set(id, {id: id, calculated: calculated})    
  });
        var bitch = bot.guilds.get("500658335217876997").members.filter(r=> r.user.bot).filter(r=> r.presence.status !== "offline").map(r=> r.user.id)
bitch.forEach(async (id) => {
  
   var uptimes = Number(bot.uptimes.get(id, "uptime"))
   uptimes++
bot.uptimes.set(id, {id: id, uptime: uptimes})  
});
}, 1000)
});

bot.on('message', async message => {
  if (message.author.bot) return;
  const messageArray = message.content.split(" ");
  const command = messageArray[0];
  const args = messageArray.slice(1);
  const params = message.content.split(" ").slice(1);

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;


if (message.content.toLowerCase().startsWith(prefix + "bots")) {
 let owner = message.mentions.users.first() || bot.users.get(params[0]) || message.author;
 if (!owner) return message.channel.send("Please specify a user ID or a user mention.");

 let getbots = bot.botinfo.filter(e=>e.submitter === owner.id);
 if (owner.bot) return message.channel.send("Bots don't have their own bots.");
 if (getbots.size < 1) return message.channel.send(`**${owner.tag}** has no bots.`);

 const bots = new Discord.RichEmbed()
   .setColor("#789cde")
   .addField(owner.tag + " 's bots (" + getbots.size + ")", getbots.map(r=> bot.certified.get(owner.id, "bots").includes(r.cli_id) === true ? "<@" + r.cli_id + ">" + " <:dbrunique:507958292790902795> " : "<@" + r.cli_id + ">"))
  message.channel.send(bots)
            
};
    if (message.content.toLowerCase().startsWith(prefix + "uptime")) {
const who = message.mentions.users.first() || bot.users.get(params[0])
if(!who || !who.bot) return message.channel.send("Please mention a bot.")
      const embed = new Discord.RichEmbed()
      .setDescription(who.username + "'s uptime")
      .setColor("#789cde")
      .addField("Percentage", Math.round(bot.uptimes.get(who.id, "uptime")/ bot.calculated.get(who.id, "calculated") * 100) + "%")
      .addField("Calculated time (bots uptime/total time)", bot.uptimes.get(who.id, "uptime") + "/" + bot.calculated.get(who.id, "calculated"))
      .addField("Time online", (new Date(bot.uptimes.get(who.id, "uptime") * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0])
      .addField("Time offline", (new Date(Number(bot.calculated.get(who.id, "calculated") - bot.uptimes.get(who.id, "uptime")) * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0])
      .addField("Total time calculated", (new Date(bot.calculated.get(who.id, "calculated")* 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0])
      message.channel.send(embed)
    }
  if (message.content.toLowerCase().startsWith(prefix + "botinfo")) {
     let botmention = message.mentions.users.first() || bot.users.get(params[0]);
     if (!botmention) return message.channel.send("Please specify a bot ID or a bot mention.");
    if (!bot.botinfo.has(botmention.id)) return message.channel.send("Bot not found")
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const ismemberinserver = message.guild.members.get(botmention.id) ? message.guild.members.get(botmention.id).roles.has("511069587840827402") ? true : false : false
    const checker = bot.certified.has(bot.botinfo.get(botmention.id, "submitter")) ? bot.certified.get(bot.botinfo.get(botmention.id, "submitter"), "bots").includes(botmention.id) === true ? ismemberinserver ? "<:dbrveryunique:524183428405657610>" : "<:dbrunique:507958292790902795>" : "" : ""
    const certchecker = bot.certified.has(bot.botinfo.get(botmention.id, "submitter")) ? bot.certified.get(bot.botinfo.get(botmention.id, "submitter"), "bots") ? bot.certified.get(bot.botinfo.get(botmention.id, "submitter"), "bots").length >0 ? "<:dbrunique:507958292790902795>" : "" : "" : ""
    const embed = new Discord.RichEmbed()
    .setDescription(bot.users.get(botmention.id).tag + " 's info " + checker)
     .setColor("#789cde")
    .addField("Prefix", bot.botinfo.get(botmention.id, "prefix"))
    .addField("Support Server", bot.botinfo.get(botmention.id, "support_url").length >0 === true ? "[Link]" + "(https://discord.gg/" + bot.botinfo.get(botmention.id, "support_url") + ")" : "None", true) 
    .addField("Invite link", "[Link](" + bot.botinfo.get(botmention.id, "invite_url") + ")", true)
        .addField("Website", bot.botinfo.get(botmention.id, "websiteURL") && bot.botinfo.get(botmention.id, "websiteURL").length >0 === true ? "[Link]" + "(" + bot.botinfo.get(botmention.id, "websiteURL") + ")" : "None", true)
        .addField("Source", bot.botinfo.get(botmention.id, "source") &&  bot.botinfo.get(botmention.id, "source").length >0 === true ? "[Link]" + "(" + bot.botinfo.get(botmention.id, "source") + ")" : "None", true)
.addField("Server Count", bot.stats.has(botmention.id) === true ? numberWithCommas(bot.stats.get(botmention.id, "server_count")) : "None")
    .addField("Short Description", bot.botinfo.get(botmention.id, "short_description"), true)
    .addField("Owner", bot.users.get(bot.botinfo.get(botmention.id, "submitter")).tag + " (<@" + bot.botinfo.get(botmention.id, "submitter") + ">) " + certchecker)
    .addField("Likes", bot.reactions.get(botmention.id, "likes").length, true)
    .addField("Dislikes", bot.reactions.get(botmention.id, "dislikes").length, true)
        .addField("Comments", bot.comments.filter(r=> r.bot === botmention.id).size, true)

    message.channel.send(embed)
  };
if (message.content.toLowerCase().startsWith(prefix + "qbots")) {
 let owner = message.mentions.users.first() || bot.users.get(params[0]) || message.author;
 if (!owner) return message.channel.send("Please specify a user ID or a user mention.");

 let getbots = bot.submission.filter(e=>e.submitter === owner.id);
  let certbots = bot.queue.filter(r=> r.submitter === owner.id);
 if (owner.bot) return message.channel.send("Bots don't have their own bots.");

 if (getbots.size < 1 && certbots.size <1) return message.channel.send(`**${owner.tag}** has no bots that are awaiting verification.`);
  let lmao1 = getbots.size <1 ? "No bots are awaiting verification." : getbots.map(r=> "<@" + r.cli_id + ">" + " (**" + bot.users.get(r.cli_id).tag + " | " + r.cli_id + "**)")
  let lmao2 = certbots.size <1 ? "No bots are awaiting certification." : certbots.map(r=> "<@" + r.cli_id + "> " + "(**" + bot.users.get(r.cli_id).tag  + " | " + r.cli_id+ "**)")
 const bots = new Discord.RichEmbed()
   .setColor("#789cde")
   .setDescription(owner.tag + " 's bots that are waiting to be verified")
   .addField("<:green_check:527888780422545410> APPROVAL", lmao1)
 .addField("<:dbrunique:507958292790902795> UNIQUE/CERTIFICATION", lmao2)
  message.channel.send(bots)
            
};


if (message.content.toLowerCase().startsWith(prefix + "owner")) {
 let botid = message.mentions.users.first() || bot.users.get(params[0]);
 if (!botid) return message.channel.send("Input a bot mention or bot ID")
if (!bot.botinfo.has(botid.id)) return message.channel.send("Bot not found")
 let getowner = bot.botinfo.get(botid.id,"owner");
 let getbot = bot.fetchUser(botid.id).then(e=>e.tag)

 const owner = new Discord.RichEmbed()
  .setColor("#789cde")
 .addField("Owner of " + botid.tag + " is", "<@" + bot.botinfo.get(botid.id, "submitter") + ">")
 message.channel.send(owner)
};
  
if (message.content.startsWith(prefix + "eval")) {
  if (message.author.id === "469716275786940416" || message.author.id === "324920582665928727" || message.author.id === "432400084706131989") {
  const that = message.content.split(" ").slice(1);
try {
   let code = args.join(" ");
   let evaled = eval(code);
  
   if (typeof evaled !== "string") {
       evaled = require("util").inspect(evaled);
   }
  
   const ss = new Discord.RichEmbed()
     .setDescription("**EVAL**")
     .setColor('GREEN')
     .addField("INPUT", "```" +code + "```")
     .addField("OUTPUT", "```" + (evaled) + "```")
   message.channel.send(ss)

} catch (e) {
   console.log(e.stack);
   
  const err = new Discord.RichEmbed()
     .setDescription("**ERROR**")
     .setColor('RED')
     .addField("Error:", e)
  message.channel.send(err)
  
    }
  }
}
   if (message.content.startsWith(prefix + "notifications") || message.content.startsWith(prefix + "notifications")) {
     if(bot.notifications.has(message.author.id)) {
      bot.notifications.delete(message.author.id)
       message.channel.send("You have disabled notifications for commenting")
     } else {
      bot.notifications.set(message.author.id, null)
       message.channel.send("You have enabled notifications for commenting")
     }
   }
  if (message.content.startsWith(prefix + "leval") || message.content.startsWith(prefix + "le")) {
  if (message.author.id === "469716275786940416" || message.author.id === "324920582665928727" || message.author.id === "432400084706131989") {
  const that = message.content.split(" ").slice(1);
try {
   let code = args.join(" ");
   let evaled = eval(code);
  
   if (typeof evaled !== "string") {
       evaled = require("util").inspect(evaled);
   }
  
   message.channel.send("```js\n" + evaled + "```")

} catch (e) {
   console.log(e.stack);
   
  const err = new Discord.RichEmbed()
     .setDescription("**ERROR**")
     .setColor('RED')
     .addField("Error:", e)
  message.channel.send(err)
  
    }
  }
}
});

bot.on('guildMemberAdd', member => {
  if(member.guild.id === "500658335217876997") {
  if (member.user.bot) {
    const botrole = member.guild.roles.find(r=> r.name === "Bot")
    member.addRole(botrole.id)
    
};

  let fuckze = bot.botinfo.filter(r=> r.submitter === member.user.id)
  if (fuckze.size > 0) {
    const devrole = member.guild.roles.find(r=> r.name === "Bot Dev")
    member.addRole(devrole.id)
  }
  }
});
bot.on('guildBanAdd', (guild, member) => {
  if(member.bot) return;
  setTimeout(function () {
  bot.users.delete(member.id)
    if(bot.userinfo.has(member.id)) {
       bot.userinfo.delete(member.id)
  }
  }, 1000)
});
bot.login(token)

      const Enmap = require("enmap");
      const SQLite = require("enmap-sqlite");
  // Persistent providers load in an **async** fashion and provide a handy defer property:
      bot.botinfo    = new Enmap({name: "botinfo", autoFetch: true});
      bot.submission = new Enmap({name: "submission", autoFetch: true})
 bot.adds = new Enmap({name: "adds", autoFetch: true})
      bot.queue      = new Enmap({name: "queue", autoFetch: true})
bot.hidden = new Enmap({name: "hidden", autoFetch: true})
      bot.userinfo   = new Enmap({name: "userinfo", autoFetch: true})
      bot.reactions  = new Enmap({name: "reactions", autoFetch: true});
      bot.certified  = new Enmap({name: "certified", autoFetch: true});
     bot.comments  = new Enmap({name: "comments", autoFetch: true});
   bot.notifications  = new Enmap({name: "notifications", autoFetch: true});
   bot.tokens  = new Enmap({name: "tokens", autoFetch: true});
   bot.stats  = new Enmap({name: "stats", autoFetch: true});
   bot.notis  = new Enmap({name: "notis", autoFetch: true});
   bot.reports  = new Enmap({name: "reports", autoFetch: true});
  bot.ipbans  = new Enmap({name: "ipbans", autoFetch: true});
  bot.uptimes  = new Enmap({name: "uptimes", autoFetch: true});
  bot.calculated  = new Enmap({name: "calculated", autoFetch: true});
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //
//------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- // //------------------DISCORD-BOT-CODE------------------- //




//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //
//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //
//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //
//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //
//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //
//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //

app.use(function (req, res ,next) {
if(req.headers["x-forwarded-for"] == undefined) {
  res.render("500n.ejs", {
    user: req.isAuthenticated() ? req.user : null,
    bot: bot,
    req: req
  });
  return bot.channels.get("513512749662208041").send("Someone fucked up")
}
next()
});
app.use(middleware.banpage({bot: bot}));
app.use(middleware.envChoose)

// index page 
app.get('/', (req, res, next) => {
   var ip;
if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
} else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
} else {
    ip = req.ip;
}
  if(req.user) {
 bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + ip + ")" + " visited index page " + req.headers["host"])
  } else { bot.channels.get("513512749662208041").send(ip + " visited the index page `" + req.headers["host"] + "`") }

  var c;
  var list = new Set()
  var usedKey = new Set()
  for (c = 0; c < bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).size && c < 3; c++) {
    var key = getRandomKey(bot.botinfo)
    if (usedKey.has(key)) {
      var key = getRandomKey(bot.botinfo)
      c--;
    } else {
      list.add(bot.botinfo.get(key))
      usedKey.add(key)
    }
  }
  var array = new Array()
  list.forEach(function(m){array.push(m)})
  var certbots = bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).filter((f) => {try{return bot.guilds.get("500658335217876997").members.get(f.cli_id).roles.has("507628704751419393")}catch{return false}});
  var c = 0;
  var list = new Set()
  var usedKey = new Set()
  for (c = 0; c < certbots.filter(r=> !bot.hidden.has(r.cli_id)).size && c < 3; c++) {
    var key = getRandomKey(certbots)
    if (usedKey.has(key)) {
      var key = getRandomKey(certbots)
      c--;
    } else {
      list.add(certbots.get(key))
      usedKey.add(key)
    }
  }
  var array2 = new Array()
  list.forEach(function(m){array2.push(m)})
  var array3 = Array()
  var i = 0;
  var sortable = [];
  while (bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).map(r=> r)[i]) {
      var d = bot.reactions.get(bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).map(r=> r.cli_id)[i], "likes")
      var w = bot.reactions.get(bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).map(r=> r.cli_id)[i], "dislikes")
      if (!d) { continue; }
      sortable.push([bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).map(r=> r.cli_id)[i], d.length - w.length]);
      i++;
  }
  var sortable = sortable.sort(function(a, b) {
    return a[1] - b[1];
  });
  i = 0;
  while (sortable[i]) {
    var p = bot.botinfo.get(sortable[i][0])
    array3.push(p)
    i++;
  }
    res.render('index.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       bots: array,
       certbots: array2,
       toplikedbots: array3.reverse().slice(0, 3),
       numberWithCommas: numberWithCommas
  });
*/
/* ---------------------------------------------- */ /* ---------------------------------------------- */ /* ---------------------------------------------- */ 
/* ---------------------------------------------- */ /* ---------------------------------------------- */ /* ---------------------------------------------- */ 
/* ---------------------------------------------- */ /* ---------------------------------------------- */ /* ---------------------------------------------- */ 
/* ---------------------------------------------- */ /* ---------------------------------------------- */ /* ---------------------------------------------- */ 
/* ---------------------------------------------- */ /* ---------------------------------------------- */ /* ---------------------------------------------- */ 
/*
});


bot.require = require

app.get("/ping", (req, res) => {
    console.log(Date.now() + " Ping Received");
    res.json({ping: true, time: Date.now()})
});
// FAQ page
app.get('/faq', (req, res) => {
  res.render('bot_aboutus.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
  });
});


/*BOTBLOCK BOT ADD CODE

NOTE: DO NOT MODIFY OR DELETE IT IN THIS TIME

*/
/*
app.post("/api/alternate/addbot", cors(), (req, res) => {
if(req.headers["authorization"] === "5HTnZ8JjbxBjsRdeCwwDRVpZ86nvwxya76wDXHc8NjNu2WDRdtgh3LtycBQf") {
  var website = null
  var source = null
  var support = null
  var invite_url = null
  var body = req.body
  if(!body.owner_id) return res.json({"message": "A submitter ID is required"})
  if(!body.id) return res.json({"message": "A bot ID is required"})
  if(!body.prefix) return res.json({"message": "A prefix is required"})
  if(!body.short_desc) return res.json({"message": "Short Description is required"})
  if(!body.long_desc_rich) return res.json({"message": "Long Description is required"})
  bot.fetchUser(body.owner_id)
  .then(r=> {
    bot.fetchUser(body.id)
    .then(ree=> {
      if(r.bot) return res.json({"error": true, "message": "Submitter is a bot, not a user"})
      if(!ree.bot) return res.json({"error": true, "message": "The client ID is not a bot"})
  if(body.website_url && body.website_url.length >0) {website = body.website_url}
  if(body.github_url && body.github_url.length >0) {source = body.github_url}
  if(body.support_url && body.support_url.length >0) {support = body.support_url}
  if(body.tags && body.tags.split(",").map(r=> r.trim()).length >10) return res.send("Tags have a maximum limit of 10")
  if(body.tags && body.tags.split(",").map(r=> r.trim()).some(item=> item.length >15)) return res.send("Tags must be fewer than 15 characters")
  if(body.tags && body.tags.split(",").map(r=> r.trim()).some(item=> item.length <1)) return res.send("You must provide a tag name, if you have done this by mistake, make sure to remove the ','")

  if(body.short_desc && body.short_desc.length >150 || body.short_desc && body.short_desc.length <5) return res.json({"error": true, "message": "short description must be between 5-150 chars"})
  if(body.long_desc_rich && body.long_desc_rich.length >10000 || body.long_desc_rich && body.long_desc_rich.length <100) return res.json({"error": true, "message": "long description must be between 100-10000 chars"})

if(bot.submission.has(body.id) || bot.botinfo.has(body.id)) return res.json({"error": true, "message": "This bot already exists"})
bot.guilds.get("500658335217876997").fetchBans()
.then(ree=> {
  if(ree.has(body.id)) return res.json({"error": true, "message": "Submitter is banned, they are not allowed to submit any bots."})
  if (!bot.certified.get(body.owner_id)) { bot.certified.set(body.owner_id, {bots: Array()}) }
  bot.submission.set(body.id, {cli_id: body.id, prefix: body.prefix, invite_url: body.invite_url && body.invite_url.length >0 ? body.invite_url : `https://discordapp.com/oauth2/authorize?client_id=${body.id}&scope=bot&permissions=0`,support_url : support, short_description: body.short_desc, long_description: body.long_desc_rich, submitter: body.owner_id, verified: false, vanityURL: null, websiteURL: website, source: source, tags: body.tags ?  body.tags.replace(/[^A-Z0-9,]/ig, '').toLowerCase().split(",").map(r=> r.trim()) : [], allowcomments: false})
  if(!bot.notis.has(req.body.owner_id)) {
    bot.notis.set(req.body.owner_id, {notis: Array()})
  }
bot.fetchUser(body.owner_id)
.then(ros=> {
  bot.fetchUser(body.id)
  .then(ras=> {
  bot.channels.get("505765871663317024").send("<:plus:527880890253312001> **" + ros.tag + " (" + ros.id + ") **" + " submitted bot " + "`" + ras.username + "` " + "(" + ras.id + ") " + "<@&515591820583895060>")
res.json({"error": false, "message": "Successfull add"})
});
});
});
    }).catch(err=> {return res.json("Fuck")})
  }).catch(err=> { return res.json({"message": "Unknown User ID"})})
} else res.status(401).json({"message": "Unauthorized"})
});

app.get('/commentrules', (req, res) => {
  res.render('bot_commentrules.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
  });
});


app.get('/requirements', (req, res) => {
  res.render('bot_requirements.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
  });
  var ip;
  if (req.headers['x-forwarded-for']) {
      ip = req.headers['x-forwarded-for'].split(",")[0];
  } else if (req.connection && req.connection.remoteAddress) {
      ip = req.connection.remoteAddress;
  } else {
      ip = req.ip;
  }
    if(req.user) {
   bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + ip + ")" + " visited requirements page")
    } else { bot.channels.get("513512749662208041").send(ip + " visited the requirements page") }
});


app.get('/submit', (req, res) => {
      res.render('bot_submit.ejs', {
       user: req.isAuthenticated() ? req.user :   res.redirect("/auth"),
       bot: bot,
       req: req
  });
      var forwardedIpsStr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
   var IP = '';

   if (forwardedIpsStr) {
      IP = forwardedIps = forwardedIpsStr.split(',')[0];  
   }
  if(req.user) {
    
bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + IP + ")" + " visited submit page")
  } 
});
app.get('/certification/apply', (req, res) => {
  if (!req.user) { res.redirect("/auth") }
  if (bot.botinfo.filter(r=> r.submitter == req.user.id).size < 1) { res.redirect("/") }
  res.render("applycertify.ejs", {
        user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req,
       bots: bot.botinfo.filter(r=> !bot.certified.get(req.user.id, "bots").includes(r.cli_id) && r.submitter == req.user.id)
  });
      
});
app.get('/user/:id/notifications', (req, res) => {
var id = req.params["id"]
if(!req.user) return res.redirect("/auth")
if(id === req.user.id) {
res.render("notifications.ejs", {
  user: req.isAuthenticated() ? req.user : null,
  bot: bot,
  req: req,
  notis: bot.notis,
  unread: bot.notis,
  moment: moment
});

} else {res.status(403).render("403.ejs", {
  user: req.isAuthenticated() ? req.user : null,
  bot: bot,
  req: req

})}

});
app.get('/user/:id/config', (req, res) => {
  var id = req.params["id"]
  if(!req.user) {
    res.redirect("/auth")
  }
  if(id === req.user.id) {
    res.render('user_edit.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       id: req.params['id'],
       bots: bot.botinfo.filter(r=> r.submitter == req.params['id'])
    });
  } else {
    res.status(403).render("403.ejs", {
      user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
    });
  }
});
 app.post("/api/form/userconfig", (req, res) => {
   if (!req.user) { res.redirect("/auth") }
  var body = req.body
  const lmfao = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if(body.website && body.website.length >200) return res.send("Websites aren't that long, c'mon")
  if(body.biog && body.biog.length >150) return res.send("Biographies have a maximum length of 150")
  var bioupdated = ""
  var webupdated = ""
  var backgroundupdated = ""
  var pulsecolorupdated = ""
  var commentbubbleupdated = ""
  /*
  bot.userinfo.has(req.user.id) && bot.userinfo.get(req.user.id, "info") !== body.biog ? bioupdated = "\n - has updated their biography" : ""
  bot.userinfo.has(req.user.id) && body.biog && bot.userinfo.get(req.user.id, "info") &&bot.userinfo.get(req.user.id, "info") !== body.biog && bot.userinfo.get(req.user.id, "info").length <1 && body.biog.length >0 ? bioupdated = "\n - set their biography" : ""  
  bot.userinfo.has(req.user.id) && body.biog && bot.userinfo.get(req.user.id, "info") !== body.biog && body.biog.length <1 && bot.userinfo.get(req.user.id, "info") &&bot.userinfo.get(req.user.id, "info").length >0 ? bioupdated = "\n - removed their biography" : ""

  bot.userinfo.has(req.user.id) && bot.userinfo.get(req.user.id, "website") !== body.website ? webupdated = "\n - has updated their personal website url" : ""
  bot.userinfo.has(req.user.id) && body.website && bot.userinfo.get(req.user.id, "website") !== body.website && bot.userinfo.get(req.user.id, "website").length <1 && body.website.length >0 ? webupdated = "\n - set their personal website url" : ""  
  bot.userinfo.has(req.user.id) && body.website && bot.userinfo.get(req.user.id, "website") !== body.website && body.website.length <1 && bot.userinfo.get(req.user.id, "website").length >0 ? webupdated = "\n - removed their personal website url" : ""

  bot.userinfo.has(req.user.id) && body.pulse &&bot.userinfo.get(req.user.id, "custompulse") && bot.userinfo.get(req.user.id, "custompulse") !== body.pulse ? backgroundupdated = "\n - has updated their custom background image" : ""
  bot.userinfo.has(req.user.id) && body.pulse && bot.userinfo.get(req.user.id, "custompulse") && bot.userinfo.get(req.user.id, "custompulse") !== body.pulse && bot.userinfo.get(req.user.id, "custompulse").length <1 && body.pulse.length >0 ? backgroundupdated = "\n - set their custom background image " : ""  
  bot.userinfo.has(req.user.id) && body.pulse && bot.userinfo.get(req.user.id, "custompulse") && bot.userinfo.get(req.user.id, "custompulse") !== body.pulse && body.pulse.length <1 && bot.userinfo.get(req.user.id, "custompulse").length >0 ? backgroundupdated = "\n - removed their custom background image" : ""

  bot.userinfo.has(req.user.id) && body.nametag && bot.userinfo.get(req.user.id, "nametag") && bot.userinfo.get(req.user.id, "nametag") !== body.nametag ? pulsecolorupdated = "\n - has updated their nametag color" : ""
  bot.userinfo.has(req.user.id) && body.nametag && bot.userinfo.get(req.user.id, "nametag") && bot.userinfo.get(req.user.id, "nametag") !== body.nametag && bot.userinfo.get(req.user.id, "nametag").length <1 && body.nametag.length >0 ? pulsecolorupdated = "\n - set their nametag color " : ""  
  bot.userinfo.has(req.user.id) && body.nametag && bot.userinfo.get(req.user.id, "nametag") && bot.userinfo.get(req.user.id, "nametag") !== body.nametag && body.nametag.length <1 && bot.userinfo.get(req.user.id, "nametag").length >0 ? pulsecolorupdated = "\n - removed their nametag color" : ""

  bot.userinfo.has(req.user.id) && body.commentb && bot.userinfo.get(req.user.id, "commentbubble") && bot.userinfo.get(req.user.id, "commentbubble") !== body.commentb ? commentbubbleupdated = "\n - has updated their comment bubble image/color" : ""
  bot.userinfo.has(req.user.id) && body.commentb && bot.userinfo.get(req.user.id, "commentbubble") && bot.userinfo.get(req.user.id, "commentbubble") !== body.commentb && bot.userinfo.get(req.user.id, "commentbubble").length <1 && body.nametag.length >0 ? commentbubbleupdated = "\n - set their comment bubble image/color " : ""  
  bot.userinfo.has(req.user.id) && body.commentb && bot.userinfo.get(req.user.id, "commentbubble") && bot.userinfo.get(req.user.id, "commentbubble") !== body.commentb && body.commentb.length <1 && bot.userinfo.get(req.user.id, "commentbubble").length >0 ? commentbubbleupdated = "\n - removed their comment bubble image/color" : ""
*/
/*
  if(lmfao) {
    if(lmfao.roles.has("507628349707911178") || lmfao.roles.has("500662148561764352") || lmfao.roles.has("500658928602841099")) {
  bot.userinfo.set(req.user.id, {info: body.biog, certbots: Array(), custompulse: body.pulse, pulsetime: body.pulse2.length <1 === true || body.pulse2.length >3 === true || isNaN(body.pulse2) ? "0" : body.pulse2, pulsecolor: body.pulsecolor.length <1 || body.pulsecolor.length >11=== true ? "0" : body.pulsecolor, website: body.website, nametag: body.nametag.length <1 || body.nametag.length >11=== true ? "0" : body.nametag, commentbubble: body.commentb && body.commentb.length >0 ? body.commentb : ""})
    } else {
       bot.userinfo.set(req.user.id, {info: body.biog, certbots: Array(), website: body.website})
    }
  } else {
      bot.userinfo.set(req.user.id, {info: body.biog, certbots: Array(), website: body.website})
  }

  bot.channels.get("528256942574141440").send(`<:blurple_config:527888800513392640> **${req.user.username + "#" + req.user.discriminator} (${req.user.id})** configured their profile page ${bioupdated}${webupdated}${backgroundupdated}${pulsecolorupdated}${commentbubbleupdated}`)
  res.redirect("/user/" + req.user.id)
});
app.get('/user/:id', (req, res) => {
  if (!bot.users.get(req.params['id']) || bot.users.get(req.params['id']).bot || !bot.userinfo.has(req.params["id"])) {
      res.status(404).render('404.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req})
  } else {
    res.render('user_page.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       id: req.params['id'],
       bots: bot.botinfo.filter(r=> r.submitter == req.params['id']),
       subbots: bot.submission.filter(r=> r.submitter === req.params["id"]),
       numberWithCommas: numberWithCommas
    });
  }
})
app.get("/api/bot/:id", cors(), (req, res) => {
  var ip;
  if (req.headers['x-forwarded-for']) {
      ip = req.headers['x-forwarded-for'].split(",")[0];
  } else if (req.connection && req.connection.remoteAddress) {
      ip = req.connection.remoteAddress;
  } else {
      ip = req.ip;
  }

  var id = req.params['id']
  var checkif = bot.botinfo.filter(r=> r.vanityurl === id) != null ? bot.botinfo.filter(r=> r.vanityurl === id).map(r=> r.cli_id) [0] : null
if(checkif) {id = checkif}
  var info = bot.botinfo.get(id)
  if (!info) {
    res.status(404).json({message: "NotFound"})
  } else {
    const asscrack = bot.guilds.get("500658335217876997").members.get(id);
    if (asscrack) { 
      if (asscrack.roles.has("507628704751419393")) { 
        var verifiedUnique = true 
      } else { 
        var verifiedUnique = false 
      }
      if (asscrack.roles.has("511069587840827402")) {
        var verifiedVeryUnique = true
      } else {
          var verifiedVeryUnique = false 
      } } else { 
        var verifiedUnique = false
        var verifiedVeryUnique = false
      }
    var reactions = bot.reactions.get(id)
    var n = bot.userinfo.get(info.submitter)
    var m = Object()
    if (n) { m.bio = n.info && n.info.length >0 ? n.info : null }
    var certified = bot.certified.get(info.submitter, "bots")
    if (certified && certified.length > 0) { m.certified = true; } else { m.certified = false; }
    m.id = info.submitter
    m.username = bot.users.get(info.submitter).username
    m.discriminator = bot.users.get(info.submitter).discriminator
    m.avatar = bot.users.get(info.submitter).avatarURL || bot.users.get(info.submitter).defaultAvatarURL
    res.json({username: bot.users.get(info.cli_id).username, discriminator: bot.users.get(info.cli_id).discriminator, avatar: bot.users.get(info.cli_id).avatarURL || bot.users.get(info.cli_id).defaultAvatarURL, clientID: info.cli_id, prefix: info.prefix, invite_url: info.invite_url, support_url: info.support_url.length <1 ? null : info.support_url, short_description: info.short_description, long_description: info.long_description, owner: m, likes: reactions.likes.length, dislikes: reactions.dislikes.length, unique: verifiedUnique, veryUnique: verifiedVeryUnique, website: info.websiteURL.length <1 ? null : info.websiteURL, servers: bot.stats.has(id) === true ? Number(bot.stats.get(id, "server_count")) : null, source: info.source === undefined ? null : info.source.length <1 ? null : info.source, vanityURL: info.vanityurl == null ? null : info.vanityurl.length <1 ? null : info.vanityurl, tags: info.tags === undefined ? null : info.tags.length <1 ? null : info.tags, comments: bot.comments.filter(r=> r.bot === id).size, commentsdisabled: bot.botinfo.get(id, "allowcomments") ? bot.botinfo.get(id, "allowcomments") : false, privaterating: bot.botinfo.get(id, "verified"), uptime: bot.guilds.get("500658335217876997").members.get(id) && bot.uptimes.has(id)  ?  Math.round(Number(bot.uptimes.get(id, "uptime"))/Number(bot.calculated.get(id, "calculated")) * 100) : "???", uptimecalculated: bot.guilds.get("500658335217876997").members.get(id) || bot.uptimes.has(id)  ? bot.uptimes.get(id, "uptime") : "???", uptimetotal: bot.guilds.get("500658335217876997").members.get(id) || bot.uptimes.has(id)  ? bot.calculated.get(id, "calculated") : "???", invites: bot.adds.has(id) ? bot.adds.get(id, "adds").length : 0});
  }
  /*if(req.user) {
    bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + ip + ")" + " used the bot api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")")
    
     } else { bot.channels.get("513512749662208041").send(ip + " used the bot api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")") }*/
/*
});
app.get("/api/bot/:id/rating", cors(), (req, res) => {
  var id = req.params['id']
  var checkif = bot.botinfo.filter(r=> r.vanityurl === id) != null ? bot.botinfo.filter(r=> r.vanityurl === id).map(r=> r.cli_id) [0] : null
  if(checkif) {id = checkif}
  var info = bot.botinfo.get(id)
  if (!info) {
    res.status(404).json({message: "NotFound"})
  } else {
    var likes = bot.reactions.get(id, "likes")
    var dislikes = bot.reactions.get(id, "dislikes")
if(bot.botinfo.get(id, "verified") === true) {
  if(req.headers["authorization"] === bot.tokens.get(id, "token")) {
    res.json({likers: likes, dislikers: dislikes, totallikes: likes.length, totaldislikes: dislikes.length, total: Number(likes.length + dislikes.length), ratiofull: Number(likes.length - dislikes.length), ratio: Math.round((Number(likes.length) / Number(likes.length + dislikes.length)) * 100)})
  } else return res.status(401).json({"message": "unauthorized"})
} 
if(bot.botinfo.get(id, "verified") === false) {
  res.json({likers: likes, dislikers: dislikes, totallikes: likes.length, totaldislikes: dislikes.length, total: Number(likes.length + dislikes.length), ratiofull: Number(likes.length - dislikes.length), ratio: Math.round((Number(likes.length) / Number(likes.length + dislikes.length)) * 100)})
} 
  }
  var ip;
  if (req.headers['x-forwarded-for']) {
      ip = req.headers['x-forwarded-for'].split(",")[0];
  } else if (req.connection && req.connection.remoteAddress) {
      ip = req.connection.remoteAddress;
  } else {
      ip = req.ip;
  }
    /*if(req.user) {
   bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + ip + ")" + " used the rating api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")")
    } else { bot.channels.get("513512749662208041").send(ip + " used the rating api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")") }*/
/*
});
app.get("/api/bot/:id/comments", cors(), (req, res) => {
  var id = req.params['id']
  var checkif = bot.botinfo.filter(r=> r.vanityurl === id) != null ? bot.botinfo.filter(r=> r.vanityurl === id).map(r=> r.cli_id) [0] : null
  if(checkif) {id = checkif}
  var info = bot.botinfo.get(id)
  if (!info) {
    res.status(404).json({message: "NotFound"})
  } else {
    if(bot.botinfo.get(id, "allowcomments") && bot.botinfo.get(id, "allowcomments")) return res.json({"message": "Comments are disabled on this bot"})    
var lmao = bot.comments.filter(r=> r.bot === id)
bot.guilds.get("500658335217876997").fetchBans()
.then(re=> {
res.json(lmao.map((r) => {return {id: r.id, author: r.author, username: bot.users.get(r.author).username, discriminator: bot.users.get(r.author).discriminator, avatar: bot.users.get(r.author).avatarURL || bot.users.get(r.author).defaultAvatarURL, content: r.comment, time: r.time, timestamp: r.timestamp === undefined ? new Date(r.time).getTime() : r.timestamp, hidden: re.has(r.author) ? true : false}}))
});
}
var ip;
if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
} else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
} else {
    ip = req.ip;
}
  /*if(req.user) {
 bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + ip + ")" + " used the comment api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")")
  } else { bot.channels.get("513512749662208041").send(ip + " used the comment api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")") }*/
/*
});

app.get("/api/user/:id", cors(), (req, res) => {
  var id = req.params['id']
  var info = bot.userinfo.get(id)
  if (!info) {
    res.status(404).json({message: "NotFound"})
  } else {
    var g = bot.botinfo.filter(r=> r.submitter === id).map(function(r){
    const asscrack = bot.guilds.get("500658335217876997").members.get(r.cli_id);
    if (asscrack) { 
      if (asscrack.roles.has("507628704751419393")) { 
        var verifiedUnique = true 
      } else { 
        var verifiedUnique = false 
      }
      if (asscrack.roles.has("511069587840827402")) {
        var verifiedVeryUnique = true
      } else {
          var verifiedVeryUnique = false 
      } } else { 
        var verifiedUnique = false
        var verifiedVeryUnique = false
      }
   
      var reactions = bot.reactions.get(r.cli_id)
      if (!reactions) { reactions = {likes: [], dislikes: []} }
      return {username: bot.users.get(r.cli_id).username, discriminator: bot.users.get(r.cli_id).discriminator, avatar: bot.users.get(r.cli_id).avatarURL || bot.users.get(r.cli_id).defaultAvatarURL, clientID: r.cli_id, prefix: r.prefix, invite_url: r.invite_url, support_url: r.support_url ? null : r.support_url, short_description: r.short_description, long_description: r.long_description, likes: reactions.likes.length, dislikes: reactions.dislikes.length, unique: verifiedUnique, veryUnique: verifiedVeryUnique, website: r.websiteURL.length <1 ? null : r.websiteURL, servers: bot.stats.has(id) === true ? bot.stats.get(id, "server_count") : null, source: r.source === undefined ? null : r.source.length <1 ? null : r.source,  vanityURL: r.vanityurl == null ? null : r.vanityurl.length <1 ? null : r.vanityurl, tags: r.tags === undefined ? null : r.tags.length <1 ? null : r.tags}
    })
    var certified = bot.certified.get(id)
    if (certified && bot.certified.get(id, "bots").length > 0) { var c = true; } else { var c = false; }
    var biography = info.info
       var badges = Array()
      
      if(bot.guilds.get("500658335217876997").members.get(id)) {
        if(bot.guilds.get("500658335217876997").members.get(id).roles.has("637796644552835083")) {badges.push("Library_creator")}
            if(bot.guilds.get("500658335217876997").members.get(id).roles.has("500658928602841099")) {badges.push("Administrator")}
            if(bot.guilds.get("500658335217876997").members.get(id).roles.has("500662148561764352")) {badges.push("Website_Moderator")}
            if(bot.guilds.get("500658335217876997").members.get(id).roles.has("507628349707911178")) {badges.push("Unique_Developer")}
      }
    if(biography) biography = info.info.length >0 ? info.info : null
    res.json({"id": id,username: bot.users.get(id).username, discriminator: bot.users.get(id).discriminator, avatar: bot.users.get(id).avatarURL || bot.users.get(id).defaultAvatarURL, "bio": biography, "certified": c, "bots": g, "website": info.website === undefined ? null : info.website.length <1 ? null : info.website, "background": info.custompulse === undefined ? null : info.custompulse.length <1 ? null : info.custompulse, "certifiedbots": bot.certified.has(id) === true ? bot.certified.get(id, "bots").length <1 ? null : bot.certified.get(id, "bots") : null, "pulsecolor": info.pulsecolor === undefined ? null : info.pulsecolor.length <1 ? null : info.pulsecolor, "animationtime": info.pulsetime === undefined ? null : info.pulsetime.length <1 ? null : Number(info.pulsetime), themecolor: info.nametag && info.nametag.length >1 ? info.nametag : null, commenttheme: info.commentbubble && info.commentbubble.length >1 ? info.commentbubble : null, badges: badges})
  }
  var ip;
  if (req.headers['x-forwarded-for']) {
      ip = req.headers['x-forwarded-for'].split(",")[0];
  } else if (req.connection && req.connection.remoteAddress) {
      ip = req.connection.remoteAddress;
  } else {
      ip = req.ip;
  }
    /*if(req.user) {
   bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + ip + ")" + " used the user api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")")
    } else { bot.channels.get("513512749662208041").send(ip + " used the user api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")") }*/
});
app.get("/api/widget/:id/widget", cors(), async(req, res) => {
  var id = req.params['id']
  var info = bot.botinfo.get(id)
  if (!info) {
    res.status(404).send("Bot ID not found. Please make sure you typed in the correct ID.")
  } else {
    var user = await bot.fetchUser(id)
    var owner = await bot.fetchUser(info.submitter)
    res.render("widget.ejs", {id: id,color: bot.uptimes.has(id) && bot.calculated.has(id) && bot.guilds.get("500658335217876997").members.get(id) ? getColorForPercentage(Number(bot.uptimes.get(id, "uptime")) / Number(bot.calculated.get(id, "calculated"))) : "grey", bot: bot, q: info, u: user, owner: owner, query: req.query, uptime: bot.uptimes.has(id) && bot.calculated.has(id) && bot.guilds.get("500658335217876997").members.get(id) ? Math.round(Number(bot.uptimes.get(id, "uptime")) / Number(bot.calculated.get(id, "calculated")) * 100) : "no"})
  }
});
app.get("/api/widget/:id/widget2", cors(), async(req, res) => {
  var id = req.params['id']
  var info = bot.botinfo.get(id)
  if (!info) {
    res.status(404).send("Bot ID not found. Please make sure you typed in the correct ID.")
  } else {
    var user = await bot.fetchUser(id)
    var owner = await bot.fetchUser(info.submitter)
    res.render("widget2.ejs", {id: id, uptime: bot.uptimes.has(id) && bot.calculated.has(id) && bot.guilds.get("500658335217876997").members.get(id) ? Math.round(Number(bot.uptimes.get(id, "uptime")) / Number(bot.calculated.get(id, "calculated")) * 100) : "no",color: bot.uptimes.has(id) && bot.calculated.has(id) && bot.guilds.get("500658335217876997").members.get(id) ? getColorForPercentage(Number(bot.uptimes.get(id, "uptime")) / Number(bot.calculated.get(id, "calculated"))) : "grey", bot: bot, q: info, u: user, owner: owner, query: req.query})
  }
});
app.get("/api/widget/2/:id.png", cors(), (req, res) => { 
  var snek = require("snekfetch")
  var lmao = req.query.header1 && req.query.header1.length >0 === true ?  "header1=" + req.query.header1 : null
  var lmao2 = req.query.header2 && req.query.header2.length >0 === true ? "header2=" + req.query.header2 : null
  var lmao3 = req.query.body && req.query.body.length >0 === true ? "body=" + req.query.body : null
  var lmao4 = req.query.removeowneravatar && req.query.removeowneravatar.length >0 === true ? "removeowneravatar=" + req.query.removeowneravatar : null
  var lmao5 = req.query.gradient1 && req.query.gradient1.length >0 === true ? "gradient1=" + req.query.gradient1 : null
  var lmao6 = req.query.gradient2 && req.query.gradient2.length >0 === true ? "gradient2=" + req.query.gradient2 : null
  var lmao7 = req.query.hidelikes && req.query.hidelikes.length >0 === true ? "hidelikes=" + req.query.hidelikes : null
  var lmao8 = req.query.hidedislikes && req.query.hidedislikes.length >0 === true ? "hidedislikes=" + req.query.hidedislikes : null
  var lmao9 = req.query.hidecomments && req.query.hidecomments.length >0 === true ? "hidecomments=" + req.query.hidecomments : null
  var lmao10 = req.query.hideservers && req.query.hideservers.length >0 === true ? "hideservers=" + req.query.hideservers : null
  var lmao11 = req.query.hideicon && req.query.hideicon.length >0 === true ? "hideicon=" + req.query.hideicon : null
  var id = req.params["id"]
  var checkif = bot.botinfo.filter(r=> r.vanityurl === id) != null ? bot.botinfo.filter(r=> r.vanityurl === id).map(r=> r.cli_id) [0] : null
  if(checkif) {id = checkif}
  if(!bot.botinfo.has(id)) return res.status(404).json({"message": "not found"})
  snek.get("https://pretty-sofa.glitch.me/2")
  .set("url", "https://discordbotreviews.xyz/api/widget/" + id + "/widget2?" + lmao + "&" + lmao2 + "&" + lmao3 + "&" + lmao4 + "&" + lmao5 + "&" + lmao6 + "&" + lmao7 + "&" + lmao8 + "&" + lmao9 + "&" + lmao10 + "&" + lmao11)
  .then(r=> {
    res.write(r.body)
    res.end()
  })
  /*Screenshot({
  url: 'https://discordbotreviews.xyz/api/widget/' + id + '/widget2?'+ lmao + "&" + lmao2 + "&" + lmao3 + "&" + lmao4 + "&" + lmao5 + "&" + lmao6 + "&" + lmao7 + "&" + lmao8 + "&" + lmao9 + "&" + lmao10 + "&" + lmao11,
  width: 464,
  height: 175
  }).then(screenshot => {
  res.write(screenshot)
  res.end()
})*/
var ip;
if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
} else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
} else {
    ip = req.ip;
}
  if(req.user) {
 bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + ip + ")" + " used the widget2 api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")")
  } else { bot.channels.get("513512749662208041").send(ip + " used the widget2 api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")") }
});
app.get("/api/widget/:id.png", cors(), (req, res) => {
  var snek = require("snekfetch")
  var lmao = req.query.header1 && req.query.header1.length >0 === true ?  "header1=" + req.query.header1 : null
  var lmao2 = req.query.header2 && req.query.header2.length >0 === true ? "header2=" + req.query.header2 : null
  var lmao3 = req.query.body && req.query.body.length >0 === true ? "body=" + req.query.body : null
  var lmao4 = req.query.removeowneravatar && req.query.removeowneravatar.length >0 === true ? "removeowneravatar=" + req.query.body : null  
   var lmao7 = req.query.hidelikes && req.query.hidelikes.length >0 === true ? "hidelikes=" + req.query.hidelikes : null
  var lmao8 = req.query.hidedislikes && req.query.hidedislikes.length >0 === true ? "hidedislikes=" + req.query.hidedislikes : null
  var lmao9 = req.query.hidecomments && req.query.hidecomments.length >0 === true ? "hidecomments=" + req.query.hidecomments : null
  var lmao10 = req.query.hideservers && req.query.hideservers.length >0 === true ? "hideservers=" + req.query.hideservers : null
  var lmao11 = req.query.hideicon && req.query.hideicon.length >0 === true ? "hideicon=" + req.query.hideicon : null
  var id = req.params["id"]
  var checkif = bot.botinfo.filter(r=> r.vanityurl === id) != null ? bot.botinfo.filter(r=> r.vanityurl === id).map(r=> r.cli_id) [0] : null
  if(checkif) {id = checkif}
  if(!bot.botinfo.has(id)) return res.status(404).json({"message": "not found"})
  
    snek.get("https://pretty-sofa.glitch.me/")
  .set("url", "https://discordbotreviews.xyz/api/widget/" + id + "/widget?" + lmao + "&" + lmao2 + "&" + lmao3 + "&" + lmao4  + "&" + lmao7 + "&" + lmao8 + "&" + lmao9 + "&" + lmao10 + "&" + lmao11)
  .then(r=> {
    res.write(r.body)
    res.end()
  })
var ip;
if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
} else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
} else {
    ip = req.ip;
}
  if(req.user) {
 bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + ip + ")" + " used the widget1 api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")")
  } else { bot.channels.get("513512749662208041").send(ip + " used the widget1 api for " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")") }
});
app.get('/search', (req, res) => {
  if (req.query.query && !req.query.query.replace(/ /g, "") == "") {  
    var searchitem = req.query.query.split(" ")
  	res.render('bot_search.ejs', {
       		user: req.isAuthenticated() ? req.user : null,
       		bot: bot,
       		req: req,
       		bots: bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).filter((c) => {return bot.users.get(c.cli_id).tag.toLowerCase().includes(req.query.query.toLowerCase()) || c.short_description.toLowerCase().includes(req.query.query.toLowerCase()) || c.tags && c.tags.some(tag=> searchitem.includes(tag))}).map(r=> r),
       		numberWithCommas: numberWithCommas
  	});
  } else {
         res.render('bot_search.ejs', {
       		user: req.isAuthenticated() ? req.user : null,
       		bot: bot,
       		req: req,
       		bots: null,
       		numberWithCommas: numberWithCommas
 	 });
  }
});
app.get('/browse', (req, res) => { res.redirect("/browse/1") });
app.get('/browse/top', (req, res) => { res.redirect("/browse/top/1") });
app.get('/browse/unique', (req, res) => { res.redirect("/browse/unique/1") });
app.get('/bot/:id/comments', (req, res) => {
  var id = req.params["id"]
  res.redirect("/bot/" + id + "/comments/1")
});
app.get('/browse/tag/:tag', (req, res) => {res.redirect("/browse/tag/" + req.params["tag"].toLowerCase() + "/1")});
app.get('/browse/new', (req, res) => { res.redirect("/browse/new/1") });
app.get('/browse/top/:page', (req, res) => {
  var array = Array()
  var i = 0;
  var sortable = [];
  while (bot.botinfo.map(r=> r)[i]) {
      var d = bot.reactions.get(bot.botinfo.map(r=> r.cli_id)[i], "likes")
      var w = bot.reactions.get(bot.botinfo.map(r=> r.cli_id)[i], "dislikes")
      if (!d) { continue; }
      sortable.push([bot.botinfo.map(r=> r.cli_id)[i], d.length - w.length]);
      i++;
  }
  var sortable = sortable.sort(function(a, b) {
    return a[1] - b[1];
  });
  i = 0;
  while (sortable[i]) {
    var p = bot.botinfo.get(sortable[i][0])
    array.push(p)
    i++;
  }

  res.render('bot_browse_topvoted.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       bots: array.reverse().filter(r=> !bot.hidden.has(r.cli_id)).slice((function(){if(req.params.page==1){return 0}else{return req.params.page*15-15}})(), (function(){if(req.params.page==1){return 15}else{return (req.params.page*15-15)+15}})()),
       numberWithCommas: numberWithCommas
  });
});
app.get('/browse/unique/:page', (req, res) => {

  res.render('bot_browse_certified.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       bots: bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).filter(r=> bot.certified.get(r.submitter) && bot.certified.get(r.submitter, "bots").includes(r.cli_id)).map(r=> r).slice((function(){if(req.params.page==1){return 0}else{return req.params.page*15-15}})(), (function(){if(req.params.page==1){return 9}else{return (req.params.page*15-15)+15}})()),
       numberWithCommas: numberWithCommas,
       bsize: bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).filter(r=> bot.certified.get(r.submitter) && bot.certified.get(r.submitter, "bots").includes(r.cli_id)).size
  });
});
app.get('/browse/tags', (req,res) => {
res.render('bot_browse_tags.ejs', {
  user: req.isAuthenticated() ? req.user : null,
  bot: bot,
  req: req,
  tagnames: tagnames
});
});
app.get('/browse/tag/:tag/:page', (req, res) => {
    var i = 0;
  var sortable = [];
  var array = Array()
  while (bot.botinfo.map(r=> r)[i]) {
      var d = bot.reactions.get(bot.botinfo.map(r=> r.cli_id)[i], "likes")
      var w = bot.reactions.get(bot.botinfo.map(r=> r.cli_id)[i], "dislikes")
      if (!d) { continue; }
      sortable.push([bot.botinfo.map(r=> r.cli_id)[i], d.length - w.length]);
      i++;
  }
  var sortable = sortable.sort(function(a, b) {
    return a[1] - b[1];
  });
  i = 0;
  while (sortable[i]) {
    var p = bot.botinfo.get(sortable[i][0])
    array.push(p)
    i++;
  }
    res.render('bot_browse_tag.ejs', {
         user: req.isAuthenticated() ? req.user : null,
         bot: bot,
         req: req,
         bots: array.reverse().filter(r=> !bot.hidden.has(r.cli_id)).filter(r=> r.tags && r.tags.includes(req.params["tag"])).map(r=> r).slice((function(){if(req.params.page==1){return 0}else{return req.params.page*15-15}})(), (function(){if(req.params.page==1){return 9}else{return (req.params.page*15-15)+15}})()),
         numberWithCommas: numberWithCommas,
         bsize: bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).filter(r=> r.tags && r.tags.includes(req.params["tag"])).size,
         tagname: req.params["tag"],
      tagnames: tagnames
    });
  });
app.get('/browse/new/:page', (req, res) => {
  res.render('bot_browse_new.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       bots: bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).map(r=> r).reverse().slice((function(){if(req.params.page==1){return 0}else{return req.params.page*15-15}})(), (function(){if(req.params.page==1){return 15}else{return (req.params.page*15-15)+15}})()),
       numberWithCommas: numberWithCommas,
  });
});

app.get('/browse/:page', (req, res) => {

  res.render('bot_browse.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       bots: bot.botinfo.filter(r=> !bot.hidden.has(r.cli_id)).map(r=> r).slice((function(){if(req.params.page==1){return 0}else{return req.params.page*15-15}})(), (function(){if(req.params.page==1){return 15}else{return (req.params.page*15-15)+15}})()),
       numberWithCommas: numberWithCommas
  });
});


app.get('/badges', (req, res) => {
  res.render('badges.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
  });
});


app.get('/certification', (req, res) => {
  res.render('certification.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
  });
  
});
app.get('/api/docs', (req, res) => {
  res.render('api.ejs', {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
hljs: hljs
  });
});
app.get('/api', (req, res) => {
  res.redirect("/api/docs")
});

app.get('/bot/:id/edit', (req,res) => {
if(!req.user) {
  res.redirect("/auth")
} else {
  var id = req.params["id"]
if(bot.submission.has(id)) {
  var ownerIDs = bot.submission.get(id, "submitter")
  if(req.user.id === ownerIDs) {
    res.render("bot_sedit.ejs", {
     user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req,
    botid: id
  });
  }
} else {
  var checkif = bot.botinfo.filter(r=> r.vanityurl === id) != null ? bot.botinfo.filter(r=> r.vanityurl === id).map(r=> r.cli_id) [0] : null
  if(checkif) {id = checkif}
    if(!bot.botinfo.has(id)) {
       res.status(404).render("404.ejs", {
         user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
     });
    
    }
  var sexygirly = bot.botinfo.get(id, "submitter")
if(req.user.id === sexygirly) {
  res.render("bot_edit.ejs", {
     user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req,
    botid: id
  });
   } else {
     res.status(403).render("403.ejs", {
         user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
     });
   }
}
}
});
app.get('/bot/:id/token', (req,res) => {
if(!req.user) {
  res.redirect("/auth")
} else {
  var id = req.params["id"]
  if(!bot.botinfo.has(id)) {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
  }
  var checkif = bot.botinfo.filter(r=> r.vanityurl === id) != null ? bot.botinfo.filter(r=> r.vanityurl === id).map(r=> r.cli_id) [0] : null
  if(checkif) {id = checkif}
  var sexygirly = bot.botinfo.get(id, "submitter")
if(req.user.id === sexygirly) {
  res.render("token.ejs", {
     user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req,
    botid: id,
botname: bot.users.get(id).username
  });
   } else {
     res.status(403).render("403.ejs", {
         user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
     });
   }
}
});
app.post('/api/form/reportbot', (req, res) => {
if(!req.user) {res.redirect("/auth")} 
var body = req.body
if(!body.botid || !bot.botinfo.has(body.botid)) return res.send("Invalid bot")
if(body.reason === "Malicious Bot" || body.reason === "NSFW in non-NSFW" || body.reason === "Bot was deleted" || body.reason === "Bot is a clone" || body.reason === "Other" || body.reason === "Open eval" || body.reason === "Broken" || body.reason === "Not english") {
  const datetoday = new Date()
if(body.reportform.length >600) return res.send("Invalid report reason, please check that the additional reason is less than 600 characters.")
var lmao = body.reportform === null || body.reportform.length <1 ? "No information was provided." : body.reportform
bot.channels.get("509494711782866965").send("--------------------------------------- \n --------------------------------------- \n **REPORTER:** \n `" + req.user.username + "#" + req.user.discriminator + " (" + req.user.id + ")" +"` \n \n **TARGET: ** \n `" + bot.users.get(body.botid).username + " (" + bot.users.get(body.botid).id + ")` \n \n **REASON: ** \n `" + body.reason + "` \n \n **ADITIONAL INFORMATION: ** \n ```" + lmao + "```" + "\n" + datetoday.toLocaleDateString() + " " + datetoday.toLocaleTimeString())
  bot.reports.set(bot.reports.size, {reporter: req.user.id, target: body.botid, subreason: body.reason, comment: lmao, time: datetoday.toLocaleDateString(), id: bot.reports.size})
res.render("reportss.ejs", {
   user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req,
});
} else {
  res.send("Invalid reason/input form")
}

});
app.get('/bot/:id/report', (req,res) => {
  if(!req.user) {
    res.redirect("/auth")
  } else {
    var id = req.params["id"]
    if(!bot.botinfo.has(id)) {res.render("404.ejs", {
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req,
    });
    } else {
    res.render("bot_report.ejs", {
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
         bot: bot,
         req: req,
      botid: id,
  botname: bot.users.get(id).username
    });
  }
}
  });
app.get('/bot/:id/redeem-token', (req,res) => {
if(!req.user) {
  res.redirect("/auth")
} else {
  var id = req.params["id"]
  var sexygirly = bot.botinfo.get(id, "submitter")
if(req.user.id === sexygirly) {
 function generatePassword() {
    var length = 80,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
bot.tokens.set(id, {token: generatePassword()})
  res.redirect("/bot/" + id + "/token")
} else {
     res.status(403).render("403.ejs", {
         user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
     });
   }
}
});


app.post("/api/form/edit", (req, res) => {
  if (!req.user) { res.redirect("/auth") }
  var body = req.body
  if(bot.submission.has(body.botid)) {
      if(!body.prefix || body.prefix.length <1) return res.send("Prefix must be specified.")  
  if(!body.shortdesc || body.shortdesc.length <5) return res.send("Short Description must be a minimum of 5 characters")  
  if(!body.longdesc || body.longdesc.length <100) return res.send("Long description must be a minimum 100 characters.")
  if(body.shortdesc && body.shortdesc.length >150) return res.send("Short Description cannot be longer than 150 characters")
   if(body.tags && body.tags.split(",").map(r=> r.trim()).length >10) return res.send("Tags have a maximum limit of 10")
    if(body.tags && body.tags.split(",").map(r=> r.trim()).some(item=> item.length >15)) return res.send("Tags must be fewer than 15 characters")
    if(body.tags && body.tags.split(",").map(r=> r.trim()).some(item=> item.length <1)) return res.send("You must provide a tag name, if you have done this by mistake, make sure to remove the ','")
    if(req.user.id === bot.submission.get(body.botid, "submitter")) {
      bot.fetchUser(body.botid).then(r=> {
      bot.submission.set(body.botid, {cli_id: body.botid, prefix: body.prefix, invite_url: body.invite_url.length <1 === true ? "https://discordapp.com/oauth2/authorize?client_id=" + body.cli_id + "&scope=bot&permissions=0" : body.invite_url ,support_url : body.support, short_description: body.shortdesc, long_description: body.longdesc, submitter: req.user.id, verified: true, vanityurl: l && l.length >0 ? l : null, websiteURL: body.website, source: body.source, tags: body.tags.replace(/[^A-Z0-9,]/ig, '').toLowerCase().split(",").map(r=> r.trim()), allowcomments: true})
          bot.channels.find(r=> r.id === "505765871663317024").send("<:blurple_config:527888800513392640> <@" + req.user.id + ">" + " edited unverified bot " + "`" + r.username + "` "+ "(<@" + r.id + ">) " + "\n" + "https://discordbotreviews.xyz" + "/" + "bot" + "/" + body.botid + " \n`(only bot owner/website moderator may access this`")
res.redirect("/bot/" + body.botid)
      })
    } else res.send("Moron, you don't own this bot, so fuck off with ur inspect element/third party client shit")
  } else {
  if(!body.prefix || body.prefix.length <1) return res.send("Prefix must be specified.")  
  if(!body.shortdesc || body.shortdesc.length <5) return res.send("Short Description must be a minimum of 5 characters")  
  if(!body.longdesc || body.longdesc.length <100) return res.send("Long description must be a minimum 100 characters.")
  if(body.shortdesc && body.shortdesc.length >150) return res.send("Short Description cannot be longer than 150 characters")

  if (body.vanityurl) { var l = body.vanityurl.replace(" ", "_"); } else { var l = null }

  var votingallowed = false
  var commentsallowed = false
  if(body.commentsallowed && body.commentsallowed == "true") {commentsallowed = true} else if(body.commentsallowed && body.commentsallowed == "false") {commentsallowed = false} else {commentsallowed = false}
if(body.votingallowed && body.votingallowed == "true") {votingallowed = true} else if(body.votingallowed && body.votingallowed == "false") {votingallowed = false} else {votingallowed = false}
  if (!bot.certified.get(req.user.id, "bots").includes(body.botid) && !body.vanityurl == '') { res.status(400).send("Cannot edit bot. Please go back."); return }
  if (body.vanityurl && bot.botinfo.filter(r=> r.vanityurl == body.vanityurl).size > 0 && bot.botinfo.get(body.botid, "vanityurl") !== body.vanityurl) { res.send("Vanity URL already taken."); return }
  if(!body.botid) return res.send("Why df are you trying to troll? Get a life fat bitch")
  if(!bot.botinfo.get(body.botid)) return res.send("Bot does not exist")
  if(bot.botinfo.get(body.botid, "submitter") === req.user.id) {
    if(body.tags && body.tags.split(",").map(r=> r.trim()).length >10) return res.send("Tags have a maximum limit of 10")
    if(body.tags && body.tags.split(",").map(r=> r.trim()).some(item=> item.length >15)) return res.send("Tags must be fewer than 15 characters")
    if(body.tags && body.tags.split(",").map(r=> r.trim()).some(item=> item.length <1)) return res.send("You must provide a tag name, if you have done this by mistake, make sure to remove the ','")
    
  bot.botinfo.set(body.botid, {cli_id: body.botid, prefix: body.prefix, invite_url: body.invite_url.length <1 === true ? "https://discordapp.com/oauth2/authorize?client_id=" + body.cli_id + "&scope=bot&permissions=0" : body.invite_url ,support_url : body.support, short_description: body.shortdesc, long_description: body.longdesc, submitter: req.user.id, verified: votingallowed, vanityurl: l && l.length >0 ? l : null, websiteURL: body.website, source: body.source, tags: body.tags.replace(/[^A-Z0-9,]/ig, '').toLowerCase().split(",").map(r=> r.trim()), allowcomments: commentsallowed})

  // put send code here
  bot.fetchUser(body.botid)
  .then(r=> {
  bot.channels.find(r=> r.id === "505765871663317024").send("<:blurple_config:527888800513392640> <@" + req.user.id + ">" + " edited bot " + "`" + r.username + "` "+ "(<@" + r.id + ">) " + "\n" + "https://discordbotreviews.xyz" + "/" + "bot" + "/" + body.botid)

  res.redirect("/bot/" + body.botid)
  });
    } else {
    res.send("Moron, you don't own this bot, so fuck off with ur inspect element/third party client shit")
  }
  }
});

app.get('/bot/:id/hidepart', (req, res) => {
  var id = req.params["id"]
  if (!req.user) {
    res.redirect('/auth')
  }else{
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (userlol.roles.has("500662148561764352") || userlol.roles.has("500658928602841099")) {
    if(!bot.botinfo.has(id)) return res.render("404.ejs", {
        user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
    });
    res.render("bot-hide.ejs", {
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req,
      action: bot.hidden.has(id) ? "Unhide" : "Hide",
      cli_id: id
     }); } else {
      res.status(403).render('403.ejs', { 
        user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
        bot: bot,
        req: req
   });
    }
  }
});


app.post('/modportal/hidebot', (req, res) => {
  var id = req.body.cli_id
  if (!req.user) {
    res.redirect('/auth')
  }else{
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (userlol.roles.has("500662148561764352") || userlol.roles.has("500658928602841099")) {
    if(!bot.botinfo.has(id)) return res.render("404.ejs", {
        user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
    });
if(!bot.hidden.has(id)) {
bot.hidden.set(id)
   res.render("sucess.ejs", {
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req,
      message: "Bot successfully hidden",
      idbot: id
    });
  bot.channels.get("505765871663317024").send("<:red_cross:527888790069706783> <@" + req.user.id + ">" + " unlisted `" + bot.users.get(id).username + "` (" + "<@" + id + ">)")
} else {
  bot.hidden.delete(id)
   res.render("sucess.ejs", {
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req,
      message: "Successfully removed hidden state",
      idbot: id
    });
    bot.channels.get("505765871663317024").send("<:green_check:527888780422545410> <@" + req.user.id + ">" + " removed hidden status for `" + bot.users.get(id).username + "` (" + "<@" + id + ">)")

}
  } else {
      res.status(403).render('403.ejs', { 
        user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
        bot: bot,
        req: req
   });
    }
  }

});

app.get('/modportal', (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }else{
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (userlol.roles.has("500662148561764352") || userlol.roles.has("500658928602841099")) {
    res.render("modportal.ejs", {
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
     }); } else {
      res.status(403).render('403.ejs', { 
        user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
        bot: bot,
        req: req
   });
    }
  }
});

app.get("/modportal/queue", (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (userlol.roles.has("500662148561764352") || userlol.roles.has("500658928602841099")) {
    res.render("queue.ejs", {
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 }); } else {
    res.status(403).render('403.ejs', { 
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 });
  }
});
app.get("/modportal/reports", (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (userlol.roles.has("500662148561764352") || userlol.roles.has("500658928602841099")) {
    res.render("reports.ejs", {
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 }); } else {
    res.status(403).render('403.ejs', { 
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 });
  }
});
app.get("/modportal/reportform", (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (userlol.roles.has("500662148561764352") || userlol.roles.has("500658928602841099")) {
    if(!bot.reports.has(req.query.id)) return   res.status(404).render('404.ejs', { 
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 });
    res.render("reportform.ejs", {
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 }); } else {
    res.status(403).render('403.ejs', { 
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 });
  }
});
app.get("/modportal/report/:id/action", (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (userlol.roles.has("500662148561764352") || userlol.roles.has("500658928602841099")) {
    if(!bot.reports.has(req.params["id"])) return   res.status(404).render('404.ejs', { 
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 });
    res.render("reportaction.ejs", {
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 }); } else {
    res.status(403).render('403.ejs', { 
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 });
  }
});
app.get("/user/:id/ban", (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (userlol.roles.has("500662148561764352") || userlol.roles.has("500658928602841099")) {
    if(!bot.reports.has(req.params["id"])) return   res.status(404).render('404.ejs', { 
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 });
 bot.guilds.get("500658335217876997").ban(bot.reports.get(req.params["id"]).reporter)
 
    res.redirect("/modportal/reports")
  } else {
    res.status(403).render('403.ejs', { 
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 });
  }
});
app.get("/modportal/report/:id/dismiss", (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (userlol.roles.has("500662148561764352") || userlol.roles.has("500658928602841099")) {
    if(!bot.reports.has(req.params["id"])) return   res.status(404).render('404.ejs', { 
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 });
    bot.reports.set(req.params["id"], {reporter: null})
    res.redirect("/modportal/reports")
  } else {
    res.status(403).render('403.ejs', { 
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
      bot: bot,
      req: req
 });
  }
});
app.get("/modportal/cert", (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
  res.render("certqueue.ejs", {
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  });
  }
});
app.get("/modportal/ipbans", (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
  res.render("ipbans.ejs", {
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req,
    moment: moment
  });
  }
});
app.get("/modportal/ipbans/unban", (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
 var ip = req.query.ip
 if(!bot.ipbans.has(ip)) return res.redirect("/modportal/ipbans")
bot.ipbans.delete(ip)
      res.redirect("/modportal/ipbans")
  }
});
app.get("/modportal/ipbans/addip", (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
  res.render("addip.ejs", {
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req,
    moment: moment
  });
  }
});
app.post("/modportal/ipbans/ban", (req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
      var body = req.body
bot.ipbans.set(body.ip, {ip: body.ip, reason: body.reason, time: new Date(), moderator: req.user.username + "#" + req.user.discriminator + " (" + req.user.id + ")", expiration: body.expiration})
    res.redirect("/modportal/ipbans")
}
});
app.post("/api/form/submit", (req, res) => {
  var body = req.body
  if(!req.user){res.redirect("/auth")}
  if(!body.cli_id) return res.status(400).render("exists.ejs", {user: req.isAuthenticated() ? req.user : null,bot: bot,req: req,message: "Client ID is not specified."})  
  if(!body.prefix || body.prefix.length <1) return res.status(400).render("exists.ejs", {user: req.isAuthenticated() ? req.user : null,bot: bot,req: req,message: "Prefix was not specified, please specify one"})
   if(body.prefix && body.prefix.length >10) return res.status(400).render("exists.ejs", {user: req.isAuthenticated() ? req.user : null,bot: bot,req: req,message: "Prefix was not specified, please specify one"})
  if(!body.shortdesc || body.shortdesc && body.shortdesc.length <5) return res.status(400).render("exists.ejs", {user: req.isAuthenticated() ? req.user : null,bot: bot,req: req,message: "Prefix must be shorter than 10 characters."})
  if(!body.longdesc || body.longdesc.length <100) return res.status(400).render("exists.ejs", {user: req.isAuthenticated() ? req.user : null,bot: bot,req: req,message: "Long description must be minimum 100 characters."})
  if(body.shortdesc && body.shortdesc.length >150) return res.status(400).render("exists.ejs", {user: req.isAuthenticated() ? req.user : null,bot: bot,req: req,message: "Short description must be shorter than 150 characters."})
  if(body.tags && body.tags.split(",").map(r=> r.trim()).length >10) return res.status(400).render("exists.ejs", {user: req.isAuthenticated() ? req.user : null,bot: bot,req: req,message: "Tags have a maximum limit of 10."})
  if(body.tags && body.tags.split(",").map(r=> r.trim()).some(item=> item.length >15)) return res.status(400).render("exists.ejs", {user: req.isAuthenticated() ? req.user : null,bot: bot,req: req,message: "Tag names must be fewer than 15 characters."})
  if(body.tags && body.tags.split(",").map(r=> r.trim()).some(item=> item.length <1)) return res.status(400).render("exists.ejs", {user: req.isAuthenticated() ? req.user : null,bot: bot,req: req,message: "Tags must have a name. If you have done this by mistake, make sure to remove an extra ', ' if there is any."})
  if(bot.submission.has(body.cli_id) || bot.botinfo.has(body.cli_id)) return res.status(400).render("exists.ejs", {
      user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req,
    message: "The bot you tried to submit already exists"
  });
  // put send code here
  bot.fetchUser(body.cli_id)
  .then(r=> {
    if(!r.bot) return res.status(400).render("exists.ejs", {user: req.isAuthenticated() ? req.user : null,bot: bot,req: req,message: "Client ID is not a bot"})
    if (!bot.certified.get(req.user.id)) { bot.certified.set(req.user.id, {bots: Array()}) }
    bot.submission.set(body.cli_id, {cli_id: body.cli_id, prefix: body.prefix, invite_url: body.invite_url.length <1 === true ? "https://discordapp.com/oauth2/authorize?client_id=" + body.cli_id + "&scope=bot&permissions=0" : body.invite_url ,support_url : body.support, short_description: body.shortdesc, long_description: body.longdesc, submitter: req.user.id, verified: false, vanityURL: null, websiteURL: body.website, source: body.source, tags: body.tags.replace(/[^A-Z0-9,]/ig, '').toLowerCase().split(",").map(r=> r.trim()), allowcomments: false})
  bot.channels.find(r=> r.id === "505765871663317024").send("<:plus:527880890253312001> <@" + req.user.id + ">" + " submitted bot " + "`" + r.username + "` "+ "(<@" + body.cli_id + ">) <@&515591820583895060>" + "\n" + "https://discordbotreviews.xyz" + "/" + "bot" + "/" + body.cli_id)
  
 
        res.render('sucess.ejs', {
       user: req.isAuthenticated() ? req.user :   res.redirect("/auth"),
       bot: bot,
       req: req,
          idbot: body.cli_id,
          message: "Bot was successfully added to queue. We'll notify you by notificatons (the bell next to your username) about the results. If you'd like to cancel approval or edit the bot meanwhile, go to your profile under 'unverified bots' section."
  });
  }).catch((err) => res.status(400).render("exists.ejs", {user: req.isAuthenticated() ? req.user : null,bot: bot,req: req,message: "Client ID you provided does not belong to any discord accounts."}))
  
});
app.get("/api/uservalidate", cors({origin: "https://discordbotreviews.xyz"}), async(req, res) => {
  var params = req.query
  try  {
    var user = await bot.fetchUser(params['id'])
    res.json({bot: user.bot, tag: user.username, name: user.username, id: user.id, avatar_url: user.avatarURL, status: user.presence.status})
  } catch {
    res.json({bot: false, tag: null, name: null, id: null, avatar_url: null, status: null})
}
});
app.post("/api/form/certsubmit", (req, res) => {
  if (!req.user) { res.redirect("/auth") }
  var body = req.body
  var bass = bot.botinfo.filter(r=> r.cli_id === body.bot_id)
  if((bot.certified.get(req.user.id)) && bot.certified.get(req.user.id, "bots").includes(body.bot_id) || bot.queue.has(body.bot_id)) { res.redirect("/") }
  var d = bass.map(r=> r)[0]
  d.uniqueThings = body.uniqueThings
  d.uniqueReason = body.uniqueReason
  if(!body.uniqueThings || !body.uniqueReason) return res.send("You did not fill in all the required forms.")
  if(body.uniqueThings.length <100 || body.uniqueThings.length >10000) return res.send("Form about what is unique to your bot must be between 100-10000 characters.")
    if(body.uniqueReason.length <80 || body.uniqueReason.length >300) return res.send("Form about why you think your bot is unique  must be between 80-300 characters.")

  bot.queue.set(bass.map(r=> r.cli_id) [0], d)
  // put send code here
  bot.fetchUser(body.bot_id)
  .then(r=> {
  bot.channels.find(r=> r.id === "505765871663317024").send("<:dbrunique:507958292790902795> <@" + req.user.id + ">" + " applied " + "`" + r.username + "` for certification <@&515591912800124929>"+ " (<@" + r.id + ">)")
   
  res.redirect("/")
  });
  
});
app.get("/bot/:id/certinfo", async(req, res) => {
   if(!req.user) {
     res.redirect("/auth")
   }
  var id = req.params['id']
  if(!bot.queue.has(id) || !bot.botinfo.has(id)) {
   res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req 
   });
  } else {
    if(bot.guilds.get("500658335217876997").members.get(req.user.id) && bot.guilds.get("500658335217876997").members.get(req.user.id).roles.has("500658928602841099")) {
      var m = await bot.fetchUser(id)
      res.render("certview.ejs", { 
      user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req ,
       m: m,
      a: bot.queue.get(id)
  });
    } else {
    res.status(403).render("403.ejs", {
        user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req 
     });
    }
  }
});
app.get("/bot/:id/applycert", async(req, res) => {
   if(!req.user) {
     res.redirect("/auth")
   }
  var id = req.params['id']
  if(!bot.botinfo.has(id)) {
   res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req 
   });
  } else {
    if(req.user.id === bot.botinfo.get(id, "submitter")) {
         res.render("certform.ejs", { 
      user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req ,
     botid: id
  });
    } else {
    res.status(403).render("403.ejs", {
        user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req 
     });
    }
  }
});
app.get("/bot/:id/verify", async(req, res) => {
  if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500662148561764352") && !userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
     var id = req.params['id']
     var bass = bot.submission.filter(r=> r.cli_id == id)
     var owner = await bot.fetchUser(bass.map(r=> r.submitter) [0])
     if (bass.size == 0) {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
     }
   bot.fetchUser(id)
      .then(r=> {
  
    bot.channels.find(r=> r.id === "505765871663317024").send("<:green_check:527888780422545410> <@" + req.user.id + "> verified bot "  + "`" + r.username + "` "+ "(<@" + id + ">)" + " which was owned by " + "<@" + bass.map(r=> r.submitter) [0] + ">" + "\n" + "https://discordbotreviews.xyz" + "/" + "bot" + "/" + id)
     const myassbutt = bot.guilds.get("500658335217876997").members.get(bass.map(r=> r.submitter)[0])
     const asscrack = bot.guilds.get("500658335217876997").roles.get("500710035438043160")
     if(myassbutt) {
       myassbutt.addRole(asscrack)
     }
    
   bot.fetchUser(id)
.then(r=> {
         var fuckme = bot.guilds.get("501823156915273751").members.get(r.id)
       if(fuckme) {fuckme.kick("Bot Approved")}
     bot.fetchUser(bass.map(r=> r.submitter) [0])
     .then(re=> {
      bot.botinfo.set(bass.map(r=> r.cli_id) [0], bass.map(r=> r)[0])
       bot.uptimes.set(bass.map(r=> r.cli_id) [0], {id: bass.map(r=> r.cli_id) [0], uptime: 1})
       bot.calculated.set(bass.map(r=> r.cli_id) [0], {id: bass.map(r=> r.cli_id) [0], calculated: 1})
      bot.submission.delete(bass.map(r=> r.cli_id) [0])
      if(!bot.certified.get(bass.map(r=> r.submitter)[0])) { bot.certified.set(bass.map(r=> r.submitter), Array()) }
      var cli_id = bass.map(r=> r.cli_id)[0]
      if(!bot.reactions.get(cli_id)){bot.reactions.set(cli_id, {likes: Array(), dislikes: Array()});}
      if(!bot.tokens.has(cli_id)) { 
	var psswd = generatePassword()
        while (bot.tokens.findAll("token", psswd).length != 0) {
            var psswd = generatePassword() // ensure password is unique just in case
        }
	bot.tokens.set(cli_id, {token: psswd})
      }
      if(bot.notis.has(re.id)) {
        bot.notis.push(re.id, {id: bot.notis.get(re.id, "notis").length, type: "verified", subject: "Bot Verified ", message: "Your bot, " + r.username + " was verified by " + req.user.username + "#" + req.user.discriminator, date: new Date(), read: false}, "notis")
      } 
      res.redirect("/modportal/queue")
      });
    });
   });
    }
          
  });
 app.get("/bot/:id/delete", async(req,res) => {
   if(!req.user) {
     res.redirect("/auth")
   }
 
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
     var id = req.params['id']
     if(!bot.botinfo.has(id)) {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
     }
     var checkif = bot.botinfo.filter(r=> r.vanityurl === id) != null ? bot.botinfo.filter(r=> r.vanityurl === id).map(r=> r.cli_id) [0] : null
     if(checkif) {id = checkif}
     var bass = bot.botinfo.filter(r=> r.cli_id == id)
     var owner = await bot.fetchUser(bass.map(r=> r.submitter) [0])
     
     if (bass.size == 0) {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
     }
     if(req.user.id === bot.botinfo.get(id, "submitter")) {
        res.render("selfdelete.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       username: await bot.fetchUser(bass.map(r=> r.cli_id)[0]).then(r=> r.username),
       cli_id: bass.map(r=> r.cli_id)[0]
      });
   } else if (userlol.roles.has("500662148561764352") || userlol.roles.has("500658928602841099")){
    res.render("delete.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       username: await bot.fetchUser(bass.map(r=> r.cli_id)[0]).then(r=> r.username),
       cli_id: bass.map(r=> r.cli_id)[0]
      });
     } else {
       res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
      });
   }
 });
app.get("/user/:id/moderate", async(req, res) => {
  if (!req.user) {
    res.redirect('/auth')
  }
  var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  var id = req.params['id']
  if (userlol.roles.has("500662148561764352") || userlol.roles.has("500658928602841099")) {
    res.render("moderate.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       username: await bot.fetchUser(id).then(r=> r.username),
       cli_id: id
      });
  } else {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
     });
  }
});
app.post("/modportal/biodelete", async(req, res) => {
  if (!req.user) {
    res.redirect("/auth")
  }
  var biodeleted = req.body.cli_id
  if(!biodeleted) return res.send("USER ID is missing")
  bot.userinfo.delete(biodeleted, "info")
  bot.channels.get("528256942574141440").send(`<:trash:527879858571837451> **${req.user.username + "#" + req.user.discriminator} (${req.user.id})** deleted **${bot.users.get(biodeleted).tag} (${bot.users.get(biodeleted).id})**'s biography`)  
  res.redirect("/user/" + biodeleted + "/moderate")
  
});
app.post("/modportal/websitedelete", async(req, res) => {
  if (!req.user) {
    res.redirect("/auth")
  }
  var biodeleted = req.body.cli_id
  if(!biodeleted) return res.send("USER ID is missing")  
  bot.userinfo.delete(biodeleted, "website")
  res.redirect("/user/" + biodeleted + "/moderate")
  bot.channels.get("528256942574141440").send(`<:trash:527879858571837451> **${req.user.username + "#" + req.user.discriminator} (${req.user.id})** deleted **${bot.users.get(biodeleted).tag} (${bot.users.get(biodeleted).id})**'s personal website link`)  
  
});
app.post("/modportal/custompulsedelete", async(req, res) => {
  if (!req.user) {
    res.redirect("/auth")
  }
  var biodeleted = req.body.cli_id
  bot.userinfo.delete(biodeleted, "custompulse")
  bot.channels.get("528256942574141440").send(`<:trash:527879858571837451> **${req.user.username + "#" + req.user.discriminator} (${req.user.id})** deleted **${bot.users.get(biodeleted).tag} (${bot.users.get(biodeleted).id})**'s background header image`)  
  res.redirect("/user/" + biodeleted + "/moderate")  
});
app.post("/modportal/pulsecolordelete", async(req, res) => {
  if (!req.user) {
    res.redirect("/auth")
  }
  var biodeleted = req.body.cli_id
  if(!biodeleted) return res.send("USER ID is missing")  
  bot.userinfo.delete(biodeleted, "pulsecolor")
  bot.channels.get("528256942574141440").send(`<:trash:527879858571837451> **${req.user.username + "#" + req.user.discriminator} (${req.user.id})** deleted **${bot.users.get(biodeleted).tag} (${bot.users.get(biodeleted).id})**'s custom pulse color`)  
  res.redirect("/user/" + biodeleted + "/moderate")
});
app.post("/modportal/nametagdelete", async(req, res) => {
  if (!req.user) {
    res.redirect("/auth")
  }
  var biodeleted = req.body.cli_id
  if(!biodeleted) return res.send("USER ID is missing")  
  bot.userinfo.delete(biodeleted, "nametag")
  bot.channels.get("528256942574141440").send(`<:trash:527879858571837451> **${req.user.username + "#" + req.user.discriminator} (${req.user.id})** deleted **${bot.users.get(biodeleted).tag} (${bot.users.get(biodeleted).id})**'s custom name tag color`)  
  res.redirect("/user/" + biodeleted + "/moderate")
});
app.post("/modportal/commentbubbledelete", async(req, res) => {
  if (!req.user) {
    res.redirect("/auth")
  }
  var biodeleted = req.body.cli_id
  if(!biodeleted) return res.send("USER ID is missing")  
  bot.userinfo.delete(biodeleted, "commentbubble")
  bot.channels.get("528256942574141440").send(`<:trash:527879858571837451> **${req.user.username + "#" + req.user.discriminator} (${req.user.id})** deleted **${bot.users.get(biodeleted).tag} (${bot.users.get(biodeleted).id})**'s custom comment image/color`)  
  res.redirect("/user/" + biodeleted + "/moderate")
});

app.post("/modportal/revoke", (req, res) => {
var body = req.body
if(!req.user) return res.redirect("/auth")
if(!body.cli_id) return res.json({"message": "Not found"})
if(!bot.submission.has(body.cli_id)) return res.json({"message": "Not found"})
if(!req.user.id === bot.submission.get(body.cli_id, "submitter")) return res.json({"message": "Unauthorized"})
bot.submission.delete(body.cli_id)
bot.channels.get("505765871663317024").send("<:red_cross:527888790069706783> " + "<@" + req.user.id + "> revoked approval for " + "`" + bot.users.get(body.cli_id).username + "`" + " ( <@" + bot.users.get(body.cli_id).id + "> )")
res.redirect("/")
});
app.post("/modportal/selfdelete", async(req, res) => {
     if(!req.user) {
     res.redirect("/auth")
   }
  if(req.user.id === bot.botinfo.get(req.body.cli_id, "submitter")) {
   
     var bass = bot.botinfo.filter(r=> r.cli_id == req.body.cli_id)
     var user = await bot.fetchUser(req.body.cli_id)
       bot.channels.find(r=> r.id === "505765871663317024").send("<:trash:527879858571837451> <@" + req.user.id + "> deleted bot `" + user.username + "` " + "(<@" + req.body.cli_id + ">)")

                    bot.botinfo.delete(bass.map(r=> r.cli_id) [0])
     bot.reactions.delete(bass.map(r=> r.cli_id)[0])
     bot.tokens.delete(bass.map(r=> r.cli_id) [0])
        bot.uptimes.delete(bass.map(r=> r.cli_id) [0])
       bot.calculated.delete(bass.map(r=> r.cli_id) [0])
       bot.comments.filter(r=> r.bot === bass.map(r=> r.cli_id)[0]).forEach((comment) => {
bot.comments.set(comment.id, {author: null, bot: null, comment: null})
});
       if(bot.hidden.has(bass.map(r=> r.cli_id[0]))) {
         bot.hidden.delete(bass.map(r=> r.cli_id[0]))
       }
     if(bot.stats.has(bass.map(r=> r.cli_id) [0])) {
      bot.stats.delete(bass.map(r=> r.cli_id) [0])
    }
       const assfuck = bot.guilds.get("500658335217876997").members.get(bass.map(r=> r.cli_id) [0])
       if(assfuck) {
        assfuck.kick("Bot Deleted") 
       }
       const assfuck2 = bot.guilds.get("500658335217876997").members.get(bass.map(r=> r.submitter) [0])
       if(assfuck2) {
        const assfuck3 = bot.botinfo.filter(r=> r.submitter === bass.map(r=> r.submitter) [0]) 
        if(assfuck3.size <1) {
          const assrole = bot.guilds.get("500658335217876997").roles.get("500710035438043160")
        assfuck2.removeRole(assrole)
          if (bot.certified.get(req.user.id)) { bot.certified.delete(req.user.id) }
       }
       }
      res.redirect("/")
    
 
} else {
  res.status(403).render("403.ejs", {
     user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
  });
}
});
app.get("/modportal/notifpush", (req, res) => {
	if (!req.user) { res.redirect("/auth") }
	var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  	if (!userlol.roles.has("500658928602841099")) {
		res.status(403).render('403.ejs', { 
       			user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       			bot: bot,
       			req: req
		})
	} else {
		res.render('notifpush.ejs', {
			user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       			bot: bot,
       			req: req
		})
	}
})
app.post("/modportal/notifpushact", (req, res) => {
	if (!req.user) { res.redirect("/auth") }
	var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  	if (!userlol.roles.has("500658928602841099")) {
		res.status(403).render('403.ejs', { 
       			user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       			bot: bot,
       			req: req
		})
	} else {
		bot.guilds.get("500658335217876997").members.forEach(re=> {
			try {
					bot.notis.push(re.id, {id: bot.notis.get(re.id, "notis").length, type: req.body.type, subject: req.body.subject, message: req.body.message, date: new Date(), read: false}, "notis")
			} catch(e) {}
		})
		res.redirect("/modportal")
	}
})
app.post("/modportal/deleteact", (req, res) => {
     if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500662148561764352") && !userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
  var bass = bot.botinfo.filter(r=> r.cli_id == req.body.cli_id)
  var id = req.body.cli_id
  bot.fetchUser(id)
  .then(r=> {
 
       bot.channels.find(r=> r.id === "505765871663317024").send("<:trash:527879858571837451> <@" + req.user.id + "> deleted bot `" + r.username + "` " + "(<@" + id + ">)" + " which was owned by " + "<@" + bass.map(r=> r.submitter) [0] + ">" + "\n" + "Reason: " + req.body.reason)
   bot.fetchUser(id)
.then(r=> {
     bot.fetchUser(bass.map(r=> r.submitter) [0])
     .then(re=> {
      const quickdecline = new Discord.RichEmbed()
      .setDescription("<:trash:527879858571837451> Bot Deleted <:trash:527879858571837451> ")
      .addField("Bot", r.tag + " (<@" + id + ">)")
        .setColor("#789cde")
      .addField("Deleted By", req.user.username + "#" + req.user.discriminator)
      .addField("Bot was owned by", re.tag + " (" + "<@"  + re.id + ">" +")")
      .addField("Reason", req.body.reason)
      bot.channels.find(r=> r.id === "505765886594908160").send(quickdecline) // Any trouble you facing??
                    bot.botinfo.delete(bass.map(r=> r.cli_id) [0])
       bot.reactions.delete(bass.map(r=> r.cli_id)[0])
       bot.tokens.delete(bass.map(r=> r.cli_id) [0])
       bot.uptimes.delete(bass.map(r=> r.cli_id) [0])
       bot.calculated.delete(bass.map(r=> r.cli_id) [0])
       bot.comments.filter(r=> r.bot === bass.map(r=> r.cli_id)[0]).forEach((comment) => {
bot.comments.set(comment.id, {author: null, bot: null, comment: null})
});
       if(bot.hidden.has(bass.map(r=> r.cli_id[0]))) {
         bot.hidden.delete(bass.map(r=> r.cli_id[0]))
       }
       if(bot.stats.has(bass.map(r=> r.cli_id) [0])) {
         bot.stats.delete(bass.map(r=> r.cli_id) [0])
 
       }
       if(bot.notis.has(re.id)) {
        bot.notis.push(re.id, {id: re.id, type: "deleted", subject: "Bot Deleted ", message: "Your bot, " + r.username + " was deleted by " + req.user.username + "#" + req.user.discriminator + ", Reason: " + req.body.reason, date: new Date(), read: false}, "notis")
      } 
       const assfuck = bot.guilds.get("500658335217876997").members.get(bass.map(r=> r.cli_id) [0])
       if(assfuck) {
        assfuck.kick("Bot Deleted") 
       }
       const assfuck2 = bot.guilds.get("500658335217876997").members.get(bass.map(r=> r.submitter) [0])
       if(assfuck2) {
        const assfuck3 = bot.botinfo.filter(r=> r.submitter === bass.map(r=> r.submitter) [0]) 
        if(assfuck3.size <1) {
          const assrole = bot.guilds.get("500658335217876997").roles.get("500710035438043160")
        assfuck2.removeRole(assrole)
          if (bot.certified.get(re.id)) { bot.certified.delete(re.id) }
       }
       }
      res.redirect("/")
    
      });
    });
  });
    }
});
  app.get("/bot/:id/cdecline", async(req,res) => {
   if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
     var id = req.params['id']
     var bass = bot.queue.filter(r=> r.cli_id == id)
     var owner = await bot.fetchUser(bass.map(r=> r.submitter) [0])
     if (bass.size == 0) {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
     }
   
    res.render("certdecline.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       username: await bot.fetchUser(bass.map(r=> r.cli_id)[0]).then(r=> r.username),
       cli_id: bass.map(r=> r.cli_id)[0]
      });
     }
  });
  app.get("/bot/:id/cdelete", async(req,res) => {
   if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
     var id = req.params['id']
     var bass = bot.certified.filter(r=> r.bots.includes(id))
     
     if (bass.size == 0) {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
     }
   
    res.render("certdelete.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       username: await bot.fetchUser(id).then(r=> r.username),
       cli_id: id
      });
     }
  });
  app.get("/bot/:id/cverify", async(req,res) => {
   if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
     var id = req.params['id']
     var bass = bot.queue.filter(r=> r.cli_id == id)
     var owner = await bot.fetchUser(bass.map(r=> r.submitter) [0])
     if (bass.size == 0) {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
     }
   
    res.render("certdverify.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       username: await bot.fetchUser(bass.map(r=> r.cli_id)[0]).then(r=> r.username),
       cli_id: bass.map(r=> r.cli_id)[0]
      });
     }
  });
app.get("/bot/:id/cverify1", async(req, res) => {
  if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
     var id = req.params['id']
     var bass = bot.queue.filter(r=> r.cli_id == id)
     var owner = await bot.fetchUser(bass.map(r=> r.submitter) [0])
     if (bass.size == 0) {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
     }
   bot.fetchUser(id)
      .then(r=> {
     
     let fucksend = bot.users.get(bass.map(r=> r.submitter) [0])
     if(fucksend) {
           if(bot.notis.has(fucksend.id)) {
        bot.notis.push(fucksend.id, {id: bot.notis.get(fucksend.id, "notis").length, type: "certifiedapproved", subject: "Certification Approved", message: "Your application for certifying " + r.username + " was approved by " + req.user.username + "#" + req.user.discriminator, date: new Date(), read: false}, "notis")
      } 
     }
  
    bot.channels.find(r=> r.id === "505765871663317024").send("<:dbrunique:507958292790902795> <@" + req.user.id + "> certified bot "  + "`" + r.username + "` "+ "(<@" + id + ">)")
     const myassbutt = bot.guilds.get("500658335217876997").members.get(bass.map(r=> r.submitter)[0])
     const asscrack = bot.guilds.get("500658335217876997").roles.get("500710035438043160")
     if(myassbutt) {
       myassbutt.addRole("507628349707911178")
     }
      const myassbutt2 = bot.guilds.get("500658335217876997").members.get(bass.map(r=> r.cli_id)[0])
     const asscrack2 = bot.guilds.get("500658335217876997").roles.get("507628704751419393")
     if(myassbutt2) {
       myassbutt2.addRole("507628704751419393")
     }
   });
    }
  
  bot.certified.push(owner.id, id, "bots")
    bot.queue.delete(id)
          res.redirect("/modportal")
  });

app.post("/modportal/certdelete", (req, res) => {
     if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
  var id = req.body.cli_id
  var bass = bot.certified.filter(r=> r == id)
  var owner = bot.botinfo.get(id, "submitter")
  bot.fetchUser(id)
  .then(r=> {
  let fucksend = bot.users.get(owner)
  if(fucksend) {
         if(bot.notis.has(fucksend.id)) {
        bot.notis.push(fucksend.id, {id: bot.notis.get(fucksend.id, "notis").length, type: "certifieddeclined", subject: "Certification Deleted", message: "Your bot, " + r.username + " was uncertified by " + req.user.username + "#" + req.user.discriminator + ", Reason: " + req.body.reason, date: new Date(), read: false}, "notis")
      } 
  }
       bot.channels.find(r=> r.id === "505765871663317024").send("<:dbrcertdeclined:510418056917417994> <@" + req.user.id + "> uncertified bot `" + r.username + "` " + "(<@" + id + ">)"  + "\n" + "Reason: " + req.body.reason)
      res.redirect("/modportal/cert")
      bot.certified.remove(bot.botinfo.get(id, "submitter"), id, "bots")
    bot.botinfo.set(id, null, "vanityurl")
    const asshole11 = bot.guilds.get("500658335217876997").members.get(id)
    if(asshole11) {
     if(asshole11.roles.has("507628704751419393") || asshole11.roles.has("511069587840827402")){
       asshole11.removeRole("507628704751419393")
       asshole11.removeRole("511069587840827402")
        const asshole12 = bot.guilds.get("500658335217876997").members.get(owner)
        if(asshole12) {
          if(asshole12.roles.has("507628349707911178")) {
             if(bot.certified.get(owner, "bots").length <1) {
            asshole12.removeRole("507628349707911178")
             }
          }
        }
     }
    }
      });
    }
});
app.get("/bot/:id/cverify2", async(req, res) => {
  if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
     var id = req.params['id']
     var bass = bot.queue.filter(r=> r.cli_id == id)
     var owner = await bot.fetchUser(bass.map(r=> r.submitter) [0])
     if (bass.size == 0) {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
     }
   bot.fetchUser(id)
      .then(r=> {
     let fucksend = bot.users.get(bass.map(r=> r.submitter) [0])
     if(fucksend) {
          if(bot.notis.has(fucksend.id)) {
        bot.notis.push(fucksend.id, {id: bot.notis.get(fucksend.id, "notis").length, type: "ccertifiedapproved", subject: "Certification Approved", message: "Your application for certifying " + r.username + " was approved by " + req.user.username + "#" + req.user.discriminator, date: new Date(), read: false}, "notis")
      } 
     }
    bot.channels.find(r=> r.id === "505765871663317024").send("<:dbrunique:507958292790902795> <@" + req.user.id + "> certified bot "  + "`" + r.username + "` "+ "(<@" + id + ">)")
     const myassbutt = bot.guilds.get("500658335217876997").members.get(bass.map(r=> r.submitter)[0])
     const asscrack = bot.guilds.get("500658335217876997").roles.get("500710035438043160")
     if(myassbutt) {
       myassbutt.addRole("507628349707911178")
     }
      const myassbutt2 = bot.guilds.get("500658335217876997").members.get(bass.map(r=> r.cli_id)[0])
     const asscrack2 = bot.guilds.get("500658335217876997").roles.get("507628704751419393")
     if(myassbutt2) {
       myassbutt2.addRole("511069587840827402")
     }
           bot.certified.push(owner.id, id, "bots")
    bot.queue.delete(id)
   });
    }
          res.redirect("/modportal")
  });
app.post("/modportal/certdecline", (req, res) => {
     if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
  var bass = bot.queue.filter(r=> r.cli_id == req.body.cli_id)
  var id = req.body.cli_id
  bot.fetchUser(id)
  .then(r=> {
  let fucksend = bot.users.get(bass.map(r=> r.submitter) [0])
  if(fucksend) {
        if(bot.notis.has(fucksend.id)) {
        bot.notis.push(fucksend.id, {id: bot.notis.get(fucksend.id, "notis").length, type: "certifieddeclined", subject: "Certification Declined", message: "Your application for certifying " + r.username + " was declined by " + req.user.username + "#" + req.user.discriminator + ", Reason: " + req.body.reason, date: new Date(), read: false}, "notis")
      } 
  }
       bot.channels.find(r=> r.id === "505765871663317024").send("<:dbrcertdeclined:510418056917417994> <@" + req.user.id + "> declined application for certifying `" + r.username + "` " + "(<@" + id + ">)"  + "\n" + "Reason: " + req.body.reason)
      res.redirect("/modportal/cert")
      bot.queue.delete(id)
      });
    }
});
  app.get("/bot/:id/clearrating", async(req,res) => {
   if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol || !userlol.roles.has("500662148561764352") && !userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
     var id = req.params['id']
     if(!bot.botinfo.has(id)) {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
     } else {
   
    res.render("clearrating.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
     }
    }
  });
  app.get("/bot/:id/decline", async(req,res) => {
   if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol || !userlol.roles.has("500662148561764352") && !userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
     var id = req.params['id']
     var bass = bot.submission.filter(r=> r.cli_id == id)
     var owner = await bot.fetchUser(bass.map(r=> r.submitter) [0])
     if (bass.size == 0) {
    res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
     }
   
    res.render("decline.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       username: await bot.fetchUser(bass.map(r=> r.cli_id)[0]).then(r=> r.username),
       cli_id: bass.map(r=> r.cli_id)[0]
      });
     }
  });
app.post("/modportal/clearrating", (req, res) => {
     if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500662148561764352") && !userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {

  var id = req.body.cli_id
  if(!bot.botinfo.has(id)) return res.redirect("/")
bot.reactions.set(id, {likes: [], dislikes: []})
                    } 
    
      res.redirect("/")
    
      });
app.post("/modportal/declineact", (req, res) => {
     if(!req.user) {
     res.redirect("/auth")
   }
      var userlol = bot.guilds.get("500658335217876997").members.get(req.user.id)
  if (!userlol.roles.has("500662148561764352") && !userlol.roles.has("500658928602841099")) {
    res.status(403).render('403.ejs', { 
       user: req.isAuthenticated() ? req.user : res.redirect("/auth"),
       bot: bot,
       req: req
  }); } else {
  var bass = bot.submission.filter(r=> r.cli_id == req.body.cli_id)
  var id = req.body.cli_id
  bot.fetchUser(id)
  .then(r=> {

       bot.channels.find(r=> r.id === "505765871663317024").send("<:red_cross:527888790069706783> <@" + req.user.id + "> declined bot `" + r.username + "` " + "(<@" + id + ">)" + " which was owned by " + "<@" + bass.map(r=> r.submitter) [0] + ">" + "\n" + "Reason: " + req.body.reason)
   bot.fetchUser(id)
.then(r=> {
     bot.fetchUser(bass.map(r=> r.submitter) [0])
     .then(re=> {
       var fuckme = bot.guilds.get("501823156915273751").members.get(r.id)
       if(fuckme) {fuckme.kick("Bot Declined: " + req.body.reason)}
      const quickdecline = new Discord.RichEmbed()
      .setDescription("<:red_cross:527888790069706783> Bot Declined <:red_cross:527888790069706783>")
      .addField("Bot", r.tag + " (<@" + id + ">)")
        .setColor("#789cde")
      .addField("Declined By", req.user.username + "#" + req.user.discriminator)
      .addField("Bot was owned by", re.tag + " (" + "<@"  + re.id + ">" +")")
      .addField("Reason", req.body.reason)
      bot.channels.find(r=> r.id === "505765886594908160").send(quickdecline) // Any trouble you facing??
                    bot.submission.delete(bass.map(r=> r.cli_id) [0])
                    if(bot.notis.has(re.id)) {
                      bot.notis.push(re.id, {id: bot.notis.get(re.id, "notis").length, type: "declined", subject: "Bot Declined ", message: "Your bot, " + r.username + " was declined by " + req.user.username + "#" + req.user.discriminator + ", Reason: " + req.body.reason, date: new Date(), read: false}, "notis")
                    } 
    
      res.redirect("/modportal/queue")
    
      });
    });
  });
    }
});
app.get("/bot/:id/react", (req, res) => {
  var id = req.params['id']
  if (!req.user) { res.redirect("/auth") }
  var reactorID = req.user.id
  var action = req.query['action']
  if(!bot.botinfo.has(id)) return res.redirect("/")
  if (action == "like") {
    if(!bot.reactions.get(id, "likes").includes(reactorID)) {
      bot.reactions.push(id, reactorID, "likes")
      bot.channels.get("528256942574141440").send("<:like:540924898617589770> **" + req.user.username + "#" + req.user.discriminator + " (" + req.user.id + ")**" + " liked bot **" + bot.users.get(id).username + " (" + bot.users.get(id).id + ")**")
    } 
    if (bot.reactions.get(id, "dislikes").includes(reactorID)) {
      bot.reactions.remove(id, reactorID, "dislikes")
      
    }
  } else if (action == "dislike") {
    if(!bot.reactions.get(id, "dislikes").includes(reactorID)) {
      bot.reactions.push(id, reactorID, "dislikes")
      bot.channels.get("528256942574141440").send("<:dislike:540927983750217757> **" + req.user.username + "#" + req.user.discriminator + " (" + req.user.id + ")**" + " disliked bot **" + bot.users.get(id).username + " (" + bot.users.get(id).id + ")**")
      
    } 
    if (bot.reactions.get(id, "likes").includes(reactorID)) {
      bot.reactions.remove(id, reactorID, "likes")      
    }
  } else if (action == "rmlike") {
    if(bot.reactions.get(id, "likes").includes(reactorID)) {
      bot.reactions.remove(id, reactorID ,"likes")
      
    } else if (!bot.reactions.get(id, "likes").includes(reactorID)) {
      res.status(400).send("Uhh, you know that you can't remove a like when you did not like the bot, right?")
    }
  } else if (action == "rmdislike") {
    if(bot.reactions.get(id, "dislikes").includes(reactorID)) {
      bot.reactions.remove(id, reactorID ,"dislikes")
      bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + req.user.id + ")" + " undisliked bot " + bot.users.get(id).tag + " (" + bot.users.get(id).id + ")")
      
    } else if (!bot.reactions.get(id, "likes").includes(reactorID)) {
      res.status(400).send("Uhh, you know that you can't remove a dislike when you did not dislike the bot, right?")
    }
  }
  res.redirect("/bot/" + id)
});
app.post("/api/form/postcomment", async(req, res) => {
   if (!req.user) { res.redirect("/auth") }
  var body = req.body
  if(!body.bot) return res.status(404).json({"message": "Not Found"})  
  if(!bot.botinfo.has(body.bot)) return res.status(404).json({"message": "Not Found"})
  if(bot.botinfo.get(body.bot, "allowcomments") && bot.botinfo.get(body.bot, "allowcomments")) return res.json({"message": "Comments are disabled on this bot"})
  if(body.comment.length >600) return res.send("Your comment must be less than 600 characters")
    if(body.comment.length <1) return res.send("Please provide a comment")
bot.comments.set(bot.comments.size, {id: bot.comments.size, author: req.user.id, bot: body.bot,  comment: body.comment, time: (new Date()).toISOString(), timestamp: Date.now()})
  if(bot.notifications.has(bot.botinfo.get(body.bot, "submitter"))) {

    bot.fetchUser(req.user.id)
    .then(r=> {
      bot.fetchUser(body.bot)
      .then(re=> {
        if(bot.botinfo.get(body.bot, "submitter") === req.user.id) return;
     bot.users.get(bot.botinfo.get(body.bot, "submitter")).send("<@" + r.id + ">"+ " `" + r.tag + "`" + " Commented on your bot " + "`" + re.tag + "`" + "<@" + re.id + ">" + "\n" + "Comment: " + body.comment)
      });
    });
  var m = body.comment.split(" ")
  var count = 0
  while (m[count]) {
    if (m[count].startsWith("@")) {
      var ll = bot.users.filter(r=> r.tag == m[count].substr(1) || r.username == m[count].substr(1))
      if (ll.size == 0) { count++; continue; }
      var u = Array()
      ll.forEach((p) => {u.push(p)})
      var p = await bot.fetchUser(u[0].id)
       bot.fetchUser(body.bot)
      .then(re=> {
      p.send(req.user.username + "#" + req.user.discriminator + " (" + req.user.id + ")" + " mentioned you in a comment.\n" + "Bot: " + re.tag + " (" + "<@" + re.id + ">" + ")"+ "\n" + body.comment)
       });
    }
    count++
  } 
  }
  bot.channels.get("528256942574141440").send("<:comment:528255671116759050>" + " **" + req.user.username + "#" + req.user.discriminator + " (" + req.user.id + ")" + "** posted a comment on **" +  bot.users.get(body.bot).username + " (" + bot.users.get(body.bot).id + ") " + "**")
  if(bot.notis.has(bot.botinfo.get(body.bot, "submitter")) && req.user.id !== bot.botinfo.get(body.bot, "submitter")) {
    bot.notis.push(bot.botinfo.get(body.bot, "submitter"), {id: bot.notis.get(bot.botinfo.get(body.bot, "submitter"), "notis").length, type: "commented", subject: "New comment on " + bot.users.get(body.bot).username, message: req.user.username + "#" + req.user.discriminator + " commented on your bot " + bot.users.get(body.bot).username + "\n Content: " + body.comment, date: new Date(), read: false}, "notis")
  } 
  if(req.query.redirect && req.query.page) {
    res.redirect("/bot/" + req.query.redirect + "/comments/" + req.query.page)
  }
  res.redirect("/bot/" + body.bot)
});

app.post("/api/bot/:id/stats", (req, res) => {
  var id = req.params["id"]
  var checkif = bot.botinfo.filter(r=> r.vanityurl === id) != null ? bot.botinfo.filter(r=> r.vanityurl === id).map(r=> r.cli_id) [0] : null
  if(checkif) {id = checkif}
  var body = req.body
  if(!bot.botinfo.has(id) || !bot.tokens.has(id)) { res.status(404).json({"message": "Not Found"})}
   if(req.headers["authorization"] === bot.tokens.get(id, "token")) {
if(isNaN(body.server_count) || req.body.server_count.length > 20) return res.json({"message": "Parameter must be a number or less than 20 characters"}) 
    bot.stats.set(id, {server_count: Number(body.server_count)})
     res.status(200).json({"message": "success"})
  } else {
res.status(401).json("Unathorized")
}
});

app.post("/api/form/deletecomment", (req, res) => {
  if (!req.user) { res.redirect("/auth") }
  var body = req.body
  if (req.user.id == bot.comments.get(body.commentID).author || bot.guilds.get("500658335217876997").members.get(req.user.id).roles.has("500662148561764352") || bot.guilds.get("500658335217876997").members.get(req.user.id).roles.has("500658928602841099")) {
    bot.channels.get("528256942574141440").send("<:trash:527879858571837451>" + " **" + req.user.username + "#" + req.user.discriminator + " (" + req.user.id + ")" + "** deleted a comment on **" +  bot.users.get(body.bot).username + " (" + bot.users.get(body.bot).id + ") " + "** by **" + bot.users.get(bot.comments.get(body.commentID, "author")).tag + " (" + bot.users.get(bot.comments.get(body.commentID, "author")).id + ")**")    
    bot.comments.set(body.commentID, {author: null, bot: null, comment: null})
    if(req.query.redirect && req.query.page) {
      res.redirect("/bot/" + req.query.redirect + "/comments/" + req.query.page)
    }
    res.redirect("/bot/" + body.bot)
  } else {
    res.status(403).render('403.ejs', { 
         user: req.isAuthenticated() ? req.user : null,
         bot: bot,
         req: req });
  }
});
app.get("/bot/:id/add", async (req, res) => {
var id = req.params["id"]
if(!bot.botinfo.has(id) && !bot.submission.has(id) && bot.botinfo.filter(r=> r.vanityurl === id).size <1) return res.status(404).render("404.ejs", {
  user: req.isAuthenticated() ? req.user : null,
  bot: bot,
  req: req
});
var lmao = bot.botinfo.filter(r=> r.vanityurl === id) 
if(lmao.size !== 0) {res.redirect(lmao.map(r=> r.invite_url) [0]) } 
var url = bot.submission.has(id) ? bot.submission.get(id, "invite_url") : bot.botinfo.get(id, "invite_url")
  var ip;
if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
} else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
} else {
    ip = req.ip;
}
if(bot.botinfo.has(id) && !bot.adds.has(id)) {
  bot.adds.set(id, {adds: Array()})

  bot.adds.push(id, ip, "adds")
}
  if(bot.botinfo.has(id) && bot.adds.has(id)) {
    bot.adds.push(id, ip, "adds")}
res.redirect(url)
});
app.get("/bot/:id", async(req, res) => {
  var id = req.params['id']

  var b = bot.botinfo.filter(r=> r.cli_id == id)
  if (b.size == 0) {
   var b = bot.submission.filter(r=> r.cli_id == id)
    if (!b.size == 0) {
      if(!req.user || req.user.id !== bot.submission.get(id, "submitter") && bot.guilds.get("500658335217876997").members.get(req.user.id) && !bot.guilds.get("500658335217876997").members.get(req.user.id).roles.has("500662148561764352")  && !bot.guilds.get("500658335217876997").members.get(req.user.id).roles.has("500658928602841099")) {
        res.status(403).render('403.ejs', { 
         user: req.isAuthenticated() ? req.user : null,
         bot: bot,
         req: req });
      }
      
    }
  }

  if (b.size == 0) {
    var b = bot.botinfo.filter(r=> r.vanityurl == id)
    if (b.size == 0) {
      res.status(404).render("404.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req
      });
    } else {
        var user = await bot.fetchUser(b.map(r=> r.cli_id)[0])
        var owner = await bot.fetchUser(b.map(r=> r.submitter)[0])
           bot.guilds.find(r=> r.id === "500658335217876997").fetchBans()
  .then(r=> {

       res.render("bot_page.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       l: user,
       b: b,
       owner: owner,
       md: md,
        bots: bot.comments.map(r=> r).reverse(),
         banned: r,
       numberWithCommas: numberWithCommas,
       remarkable: remarkable,
         tagnames: tagnames
      });
           });
  }
  }
      
  if(bot.botinfo.get(id)) {
  if (bot.botinfo.get(id).vanityurl) {
    res.redirect("/bot/" + bot.botinfo.get(id).vanityurl)
  } }else {}



	     await bot.fetchUser(b.map(e=>e.cli_id)[0])
  var user = await bot.fetchUser(b.map(r=> r.cli_id)[0])
  var owner = await bot.fetchUser(b.map(r=> r.submitter)[0])
    bot.guilds.find(r=> r.id === "500658335217876997").fetchBans()
  .then(r=> {
  res.render("bot_page.ejs", {
       user: req.isAuthenticated() ? req.user : null,
       bot: bot,
       req: req,
       l: user,
       b: b,
       owner: owner,
       md: md,
        bots: bot.comments.map(r=> r).reverse(),
    banned: r,
 numberWithCommas: numberWithCommas,
 remarkable: remarkable,
    tagnames: tagnames
  });
  
});
var ip;
if (req.headers['x-forwarded-for']) {
    ip = req.headers['x-forwarded-for'].split(",")[0];
} else if (req.connection && req.connection.remoteAddress) {
    ip = req.connection.remoteAddress;
} else {
    ip = req.ip;
}
  if(req.user) {
 bot.channels.get("513512749662208041").send(req.user.username + "#" + req.user.discriminator + " (" + ip + ")" + " visited " + bot.users.get(id).tag + "'s page")
  } else { bot.channels.get("513512749662208041").send(ip + " visited " + bot.users.get(id).tag + "'s page") }
});
app.get("/bot/:id/comments/:page", (req, res) => {
var id = req.params["id"]
var checkif = bot.botinfo.filter(r=> r.vanityurl === id) != null ? bot.botinfo.filter(r=> r.vanityurl === id).map(r=> r.cli_id) [0] : null
if(checkif) {id = checkif}
if(!bot.botinfo.has(id)) return res.status(404).render("404.ejs", {
  user: req.isAuthenticated() ? req.user : null,  
  req: req,
  bot: bot
});
bot.guilds.find(r=> r.id === "500658335217876997").fetchBans()
.then(r=> {
res.render("bot_page_comments.ejs", {
  user: req.isAuthenticated() ? req.user : null,  
  bot: bot,
req: req,
id: id,
banned: r,
page: req.params.page,
comments: bot.comments.filter(r=> r.bot === id).map(r=> r).reverse().slice((function(){if(req.params.page==1){return 0}else{return req.params.page*15-15}})(), (function(){if(req.params.page==1){return 15}else{return (req.params.page*15-15)+15}})())
});
});
});

app.get("/bot/:id/revoke", (req, res) => {
var id = req.params["id"]
if(!bot.submission.has(id)) return res.render("404.ejs", {
  user: req.isAuthenticated() ? req.user : null,  
  bot: bot,
req: req
});
if(!req.user.id === bot.submission.get(id, "submitter")) return res.render("403.ejs", {
  user: req.isAuthenticated() ? req.user : null,  
  bot: bot,
req: req
});

res.render("revoke.ejs", {
  user: req.isAuthenticated() ? req.user : null,  
  bot: bot,
req: req,
id: id
});
});
// DONT PUT ANY RENDER CODE AFTER THIS LINE!!!
app.use(middleware.notfound({bot: bot}));



app.listen(8080);


//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //
//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //
//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //
//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //
//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //
//------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- // //------------------WEBSITE-RENDER-CODE------------------- //
