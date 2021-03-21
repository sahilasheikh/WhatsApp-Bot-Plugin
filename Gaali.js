/* Codded by @sahilasheikh
Instagram: www.instagram.com/sahil.asheikh
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'gaali', fromMe: true}, (async (message, match) => {

    var r_text = new Array ();


r_text[0] = "";
r_text[1] = "";
r_text[2] = "";
r_text[3] = "";
r_text[4] = "";
r_text[5] = "";
r_text[6] = "";
r_text[7] = "";
r_text[8] = "";
r_text[9] = "";
r_text[10] = "";
r_text[11] = "";
r_text[12] = "";
r_text[13] = "";
r_text[14] = "";
r_text[15] = "";
r_text[16] = "";
r_text[17] = "";
r_text[18] = "";
r_text[19] = "";
r_text[20] = "";



var i = Math.floor(21*Math.random())

await message.sendMessage(r_text[i]);

}));

Asena.addCommand({pattern: 'infoquote', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by @sahil.asheikh && @begawo*\n💻Usage: *.quote*\nℹ️Desc: 🇬🇧 Choose randomly best quotes.")

}));