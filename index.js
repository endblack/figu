const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require("fs")
const { exec } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const moment = require("moment-timezone")
const { webp2gifFile } = require("./lib/gif.js")
const { fetchJson } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const speed = require('performance-now')
const { wait, simih, getBuffer, h2k, generateMessageID, mail2, getGroupAdmins, mail, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { ind } = require('./language')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

app.get('/', (request, response) => {
  console.log("bot online");
  response.sendStatus(200);
});

app.get('/info', (req, res) => {
  res.json({
    status: 'rodando normalmente'
  })
})

app.listen(PORT, () => {
console.log('okok '+PORT)
})

apiz = `vrMSPgXFfqY87hnTJ87arA9N2LN`
const packID = 'com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2'
const playstore = 'https://play.google.com/store/apps/details?id=com.dts.freefireth'
const itunes = 'https://itunes.apple.com/app/sticker-maker-studio/id1443326857'

const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:My dono🥰\n' 
            + 'ORG: ❲████▒▒❳ 90% MaxWorld;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=559184035474:+55 91 8403-5474\n' 
            + 'END:VCARD' 
prefix = '!'
namo = 'Otakinhos_sticker'
ator = 'megah_gostosa'
/******* max gostoso**********/
const ownerNumber = ["559184035474@s.whatsapp.net","559192136241@s.whatsapp.net","5511988985726@s.whatsapp.net","5514996541467@s.whatsap.net"] 

function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');
	let name = `${packname}_${author}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		    'sticker-pack-id': packID,
            'sticker-pack-name': packname,
            'sticker-pack-publisher': author,
            'android-app-store-link': playstore,
            'ios-app-store-link': itunes
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}

async function connectToWhatsApp() {
	const client = new WAConnection()
	client.version = [2, 2119, 6];
	client.autoReconnect = ReconnectMode.onConnectionLost
	client.logger.level = 'warn'
	client.connectOptions.maxRetries = 10
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'),color('∆','red'),color(']','white'),color('Leia o qr code','white'),color('AGORA','red'),color('E um recado:','white'),color('Max é foda','yellow'))
	})
	client.on('connecting', () => {
		console.log(color('Conectando...','cyan'))
	}) 
	
	
	client.on('open', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(color('Você está conectado!','yellow'))
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();
console.log(color('Sessão web aberta','yellow'))
     
     client.on('close', () => {
     rc = 'A conexão caiu...'
     console.log(color(rc,'red'))
     })


client.on('chat-update', async (mek) => {
		try {
		    if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
            if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
                        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase() 
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			client.updatePresence(from, Presence.availabe)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			stt = await client.getStatus(sender)
			const rece = `${stt.status}`
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const totalchat = await client.chats.all()
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
						
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const costumimg = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		    
		    colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTADO\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECEBIDO\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTADO\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECEBIDO\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
							
			switch(command) {
				case 'mutual6':
				  case 'me':	    
                reply('Okok')
                  break
                  case 'converter':
				case 'toimg':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'aqui estar '})
						fs.unlinkSync(ran)
					})
					} else if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply(ind.wait())
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: 'Aqui está ✅'})
fs.unlinkSync(mediaaa)
} else {
reply('Marque um sticker!')
}
break
                  case 'tts':
				case 'fl':  
				if (args.length < 1) return client.sendMessage(from, '', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Falta colocar o código do idioma!', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 80
					? reply('Para reduzir spam o máximo de letras permitidas são 80!')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefixo alterado para:* ${prefix}`)
					break 
				case 'link':
				    if (!isGroup) return reply(ind.groupo()) 
				    	if (!isGroupAdmins) return reply(ind.admin())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode(from)
				    yeh = `_Bora dilvulgar o grupo? 🍻😏_\n*Link:* https://chat.whatsapp.com/${linkgc}`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender) 
			        break
			        case 'rv':
				    if (!isGroup) return reply(ind.groupo()) 
				    if (!isGroupAdmins) return reply(ind.admin())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.revokeInvite(from)
				    mg = 'Link atualizado'
				    client.sendMessage(from, mg, text, {quoted: mek})
			        break	
              case 'delete':
					    case 'del':
					    case 'apagar':
					    case 'apaga':
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                  case 'ploay':   
	          if (args.length < 1) return reply('Digite o nome da música')
	            try{
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=${apiz}&q=${play}`)
                if (anu.message) return reply('Não encontrei nada :(')
                console.log(anu)
                reply(ind.wait)
                buffer = await getBuffer(anu.result.thumb)
                infomp3 = `Título: ${anu.result.title}\nDuração: ${anu.result.duration}\nTamanho: ${anu.result.size}\nFonte: ${anu.result.source}`
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                reply('To fazendo o download da música, aguarde...')
                lagu = await getBuffer(anu.result.link)
                reply('terminei, to enviando a música✔')
                await client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: 'megahchan.mp3', quoted: mek})
                } catch (e) {
                console.log(e)
                return reply('Deu erro :(')
                }
                break
                case 'stickergif': 
				case 'sticker':
				case 's':
				
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ falha ao converte ${tipe} em sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`envie uma foto ou video/gif não muito pesado com legenda ${prefix}sticker ou marque a imagem/gif`)
					}
					break
                case 'criador':
            case 'dono':
                 client.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 client.sendMessage(from, 'Não recebe vcard? Sem problemas, aqui está o link:\nWa.me/559184035474',MessageType.text, { quoted: mek} )
					break    
					case 'loc':
					client.sendMessage(from, {degreesLatitude: -23.53, degreesLongitude: -46.62}, MessageType.liveLocation, { quoted: mek, caption: '...'})
					break
					case 'nightcore':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
case 'lento':
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await client.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
case 'grave':
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
case 'rapido':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=50 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
                case 'ping':
					  const chatsIds = await client.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Carregando Messagens...\`\`\`
                
\`\`\` - [ Chats aberto ]  ${totalchat.length}\`\`\`
\`\`\` - [ smartphone ] ${client.user.phone.device_manufacturer} ${client.user.phone.device_model}\`\`\`
\`\`\` - [ WA versão ] ${client.user.phone.wa_version}\`\`\`
\`\`\` - [ Servidor ] ${client.browserDescription[0]}\`\`\`
\`\`\` - [ Navegador ] ${client.browserDescription[1]}\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 2095 ] RAM\`\`\`

\`\`\`Velocidade: ${latensi.toFixed(4)} Segundos\`\`\``
                client.sendMessage(from, p0, text, { quoted: mek})
                    break

		    default:
		    
		    }
} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

}connectToWhatsApp ()
.catch (err => console.log("unexpected error: " + err) )