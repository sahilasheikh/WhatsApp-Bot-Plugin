/* Codded by @sahilasheikh
Instagram: www.instagram.com/sahil.asheikh
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'quote', fromMe: true}, (async (message, match) => {

    var r_text = new Array ();


r_text[0] = "*The intellect is not a serious thing, and never has been. It is an instrument on which one plays, that is all.*";
r_text[1] = "*And still they gazed, and still the wonder grew, that one small head could carry all he knew.*";
r_text[2] = "*Nowadays to be intelligible is to be found out.*";
r_text[3] = "*Only those who know the supremacy of the intellectual life can understand the grief of one who falls from that serene activity into the absorbing soul-wasting struggle with worldly annoyances.*";
r_text[4] = "*We need only travel enough to give our intellects an airing.*";
r_text[5] = "*The fact that man knows right from wrong proves his intellectual superiority to the other creatures; but the fact that he can do wrong proves his moral inferiority to any creatures that cannot.*";
r_text[6] = "*It is the mind that makes the body rich; and as the sun breaks through the darkest clouds, so honor peereth in the meanest habit.*";
r_text[7] = "*An intellectual is someone whose mind watches itself.*";
r_text[8] = "*Action is the real measure of intelligence.*";
r_text[9] = "*An intelligent man is sometimes forced to be drunk to spend time with his fools.*";
r_text[10] = "*For all things difficult to acquire, the intelligent man works with perseverance.*";
r_text[11] = "*He who knows best knows how little he knows.*";
r_text[12] = "*I cannot believe that God plays dice with the cosmos.*";
r_text[13] = "*I choose my friends for their good looks, my acquaintances for their good characters, and my enemies for their intellects. A man cannot be too careful in the choice of his enemies.*";
r_text[14] = "*I don't consider myself an intellectual. And this is not one of my aims. But I admire intellectual people.*";
r_text[15] = "*I must have a prodigious quantity of mind; it takes me as much as a week sometimes to make it up.*";
r_text[16] = "*I would like to take you seriously, but to do so would be an affront to your intelligence.*";
r_text[17] = "*If I can't picture it, I can't understand it.*";
r_text[18] = "*Intelligence is quickness in seeing things as they are*";
r_text[19] = "*Intelligence is the wife, imagination is the mistress, memory is the servant.*";



var i = Math.floor(20*Math.random())

await message.sendMessage(r_text[i]);

}));

Asena.addCommand({pattern: 'infoquote', fromMe: true}, (async (message, match) => {

    await message.sendMessage("*Codded by @sahil.asheikh && @begawo*\n💻Usage: *.quote*\nℹ️Desc: 🇬🇧 Choose randomly best quotes.")

}));