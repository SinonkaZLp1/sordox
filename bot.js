const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NDE2MzIzNjgwOTk4Nzg1MDI0.Xqd6Zg.LBe54XyRo-w7Y24AoOcMRjebSGc";

client.on('ready', () => {
    console.log('I am ready!');
			
});

client.on('message', message => {
    if (message.content === '!help') {
        message.reply('command !help !info !atd... ');
      }
});

client.on('message', message => {
    if (message.content === 'smile') {
        message.reply('smile');
      }
});

client.on('message', message => {
    if (message.content === '!info') {
        message.reply('group max 5');
      }
});

client.on('message', message => {
    if (message.content === '!HL') {
        message.reply('Smilinka onen boss je hlavni');
      }
});

client.on('message', message => {
    if (message.content === 'Ahoj') {
        message.reply('Ahoj.');
        message.reply('Nepis MSG jinak te zaspamuji sorry nejsem opravenej vuci bugu ');
        message.reply('BUG SE opravi někdy '); 
        message.reply('jsem alfa verze bota');
        message.reply('Jak ty mohu pomoc ');
        message.reply('když neco pisu jenom general jinde nemohu ');
      }
});

client.on('message', message => {
    if (message.content === 'ahoj') {
        message.reply('Ahoj.');
      }
});

client.on('message', message => {
    if (message.content === 'jak je?') {
        message.reply('slo by lepe');
      }
});

client.on('message', message => {
    if (message.content === 'nuda') {
        message.reply('nebude najdi si anime');
        message.reply('nolink');
      }
});

client.on('message', message => {
    if (message.content === 'nuda') {
        message.reply('nolink');
      }
});

client.on('message', message => {
    if (message.content === 'ou') {
        message.reply('to je mi lito');
      }
});

client.on('message', message => {
    if (message.content === 'now') {
        message.reply('INFORMACE...');
      }
});

client.on('message', message => {
    if (message.content === 'now') {
        message.reply('@Anime Ahoj Nove Anime nebo tak neco ?');
      }
});

client.on('message', message => {
    if (message.content === 'ako sa maš?') {
        message.reply('mam se super');
      }
});

client.on('message', message => {
    if (message.content === 'jak se máš?') {
        message.reply('mam se super');
      }
});

client.on('message', message => {
    if (message.content === 'čo robiš?') {
        message.reply('nic sem bot');
      }
});

client.on('message', message => {
    if (message.content === 'co děláš?') {
        message.reply('nic sem bot');
      }
});

client.on('message', message => {
    if (message.content === 'super') {
        message.reply('bajecne');
      }
});
client.on('message', message => {
    if (message.content === 'fajn') {
        message.reply('hodne fajn?');
      }
});
client.on('message', message => {
    if (message.content === 'to znie fajn') {
        message.reply('až moc?');
      }
});

client.on('message', message => {
    if (message.content === 'ok') {
        message.reply('rozumim');
      }
});

client.on('message', message => {
    if (message.content === 'nevím') {
        message.reply('nevedet!');
      }
});

client.on('message', message => {
    if (message.content === 'Anime') {
        message.reply('Anime je bozi');
      }
});

client.on('message', message => {
    if (message.content === 'anime') {
        message.reply('Anime je bozi');
      }
});

client.on('message', message => {
    if (message.content === 'Maty') {
        message.reply('Moc mne pouzivas');
      }
});

client.on('message', message => {
    if (message.content === 'nep') {
        message.reply('nep nep neeep');
        message.reply('nep nep neeep');
        message.reply('nep nep neeep');
        message.reply('nep nep neeep');
        message.reply('nep nep neeep');
        message.reply('nep nep neeep');
        message.reply('nep nep neeep');
        message.reply('nep nep neeep');
        message.reply('nep nep neeep');
        message.reply('KONEC prosím nepis znovu nep');
      }
});

client.on('message', message => {
    if (message.content === 'sekce54') {
        message.reply('kde je bot sekce54 https://dashboard.heroku.com/apps https://github.com  ');
      }
});

client.on('message', message => {
    if (message.content === 'prečo si tu 2 krát?? ') {
        message.reply('copak neco vadi 2x sem tu proto ze mam duvot jinak pokut neco napis msg ');
      }
});

client.on('message', message => {
    if (message.content === '!help!') {
        message.reply('command !help !info !atd... ');
      }
});

client.on('message', message => {
    if (message.content === 'niisk') {
        message.reply('kradli prekladi a ohledne toho ze se nedomluvili se rozhodli nekteri prekladatele aby nebylo hodne ze by zdileli praci co nevlastni co zvezejnuji na nii.sk takze se snazili veskere obsah nejak smazat kezby dali kdo prelozil jaky dil a jak anime pod jakou skupinou bylo napsano ale aby byl prehledni web skupini atd... a neodpovidali proto je zrusen to je můj nazor..');
        message.reply('web se vipnul dne 2 3 2018');
        message.reply('jejich pohlaseni Na žiadosť webu amzone cz mažú svoje videa poďakujte im na FB prekladateľskej skupiny Hanabi  skupiny Ange 3mka a zopár ďalších ľudí web končí Ďakujem všetkým 250 000 ľuďom ktorí pri nás za tých 7 rokov stáli Vo webe som nechal svoje srdce a dušu a pre to som zlomený že ho musíme ukončiť Zároveň chcem poprosiť dotyčných že ak šikana hanobenie a vyhrážky neprestanú budem zvažovať právne kroky Nabudúce prosím nezabúdajte že všetci sme len ľudia s pozdravom pein');
      }
    });
	    

// THIS  MUST  BE  THIS  WAY
client.login(token);
