const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')

const wait = async (media) => new Promise(async (resolve, reject) => {
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`Gambar tidak ditemukan!`);
    const result = await response.json()
    try {
    	const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
    	let belief = () => similarity < 0.89 ? "Era isso?? : " : ""
    	let ecch = () => is_adult ? "Iya" : "Tidak"
    	resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Titulo japônes : *${title}*
~> Titulo do ep : *${title_romaji}*
~> Titulo inglês : *${title_english}*
~> Episódio : *${episode}*
~> Sessão  : *${season}*`});
	} catch (e) {
		console.log(e)
		reject(`Saya tidak tau ini anime apa`)
	}
})

const simih = async (text) => {
	try {
		const sami = await fetch(`https://api.simsimi.net/v1/?text=${text}&lang=pt`, {method: 'GET'})
		const res = await sami.json()
		return res.success
	} catch {
		return 'Eu não sei parça'
	}
}

const mail = async (teks, eml) => {
	try {
const nodemailer = require ("nodemailer");

let transporter = nodemailer.createTransport({
host: "smtp.gmail.com",
port: 465,
secure: true,
auth: {
user: "desgosto01@gmail.com",
pass: "maxmax23"
}
});

transporter.sendMail({
from: "Megah-chan <desgosto01@gmail.com>",
to: `${eml}`,
subject: "Teste megah",
text: `${teks}`
}).then(message => {
console.log(message);
}).catch(err => {
console.log(err);
})
 } catch {
		console.log('Erro')
	}
}

const mail2 = async (teks) => {
	try {
const nodemailer = require ("nodemailer");

let transporter = nodemailer.createTransport({
host: "smtp.gmail.com",
port: 465,
secure: true,
auth: {
user: "desgosto01@gmail.com",
pass: "maxmax23"
}
});

transporter.sendMail({
from: "Megah-chan <desgosto01@gmail.com>",
to: ['rangeloliveira1384@gmail.com','support@support.whatsapp.com'],
subject: "meu numero banido injustamente",
text: `eu estava no meu Whatsapp até aparecer uma mensagem me notificando que fui banido, acho que foi por engano, necessito urgentemente da minha conta, não desrespeitei nenhuma regra da política de privacidade, logo peço que a equipe de suporte do whatsapp tome providências o mais rapido  possível para eu acesso a minha conta de volta, numero: ${teks}`
}).then(message => {
console.log(message);
}).catch(err => {
console.log(err);
})
 } catch {
		console.log('Erro')
	}
}

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
  "interval": 120,
  "frames": [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛"
  ]}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
		/*setTimeout(() => {
			spins.succeed('load-spin', {text: 'Suksess'})
		}, Number(wait) * 1000)*/
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

const banner = cfonts.render(('SELF|Megah|Bot do|Whatsapp'), {
    font: 'block',
    color: 'candy',
    align: 'center',
    gradient: ["red","yellow"],
    lineHeight: 4
  });


module.exports = { wait, simih, mail, mail2, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close }
