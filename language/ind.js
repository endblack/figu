exports.wait = () => {
	return`*⏰ AGUARDE UM MOMENTO!*📌`
}

exports.succes = () => {
	return`*Sucesso 🖤*`
}

exports.lvlon = () => {
	return`*Os níveis está ativado*`
}

exports.lvloff = () => {
	return`*Os níveis está desativado 😔*`
}

exports.adultoff = () => {
  return `O conteúdo adulto não está ativado`
}

exports.adulton = () => {
  return `Conteúdo adulto ativado!`
}
exports.pornoff = (pushname, prefix) => {
  return `Opa ${pushname} o conteúdo porno não está ativado neste chat, para ativar digite assim ${prefix}porno 1`
}
exports.pttr = () => {
	return`*Use assim !ppt pedra,tesoura,papel\n\nEXEMPLO : ${prefix}ppt pedra*`
}
exports.adultt = () => {
  return `Ja está ativado!!`
}

exports.lvlnul = () => {
	return`_Você ainda não tem um nível!_`
}
exports.porgc = (pushname) => {
  return `Opa ${pushname} esses tipo de Comando não são permitidos no grupo!`
}
exports.lvlnoon = () => {
	return`*Peça a um adm para ativar os níveis neste grupo!*`
}

exports.noregis = (pushname) => {
	return`*「 NÃO REGISTRADO 」*

*🤝 Percebemos que você ainda não está registrado(a) em nosso banco de dados... para está se registrando use os exemplo abaixo\n\n•Exemplo1: !rg (nome)/(idade)

•Exemplo2: !rg ${pushname}/14\n\nObs: não esqueça da "/" entre o nome e a idade 😶`
}

exports.rediregis = () => {
	return`*Você já está registrado em nosso banco de dados 🏦🎲🤝*`
}

exports.stikga = () => {
	return`*Falha, tente novamente mais tarde!*`
}

exports.linkga = () => {
	return`*Link inválido*`
}

exports.groupo = () => {
	return`*Comando só pode ser utilizado em grupos!*`
}

exports.ownerb = () => {
	return`Quem é você? 😕`
}

exports.ownerg = () => {
	return`*🚫*`
} 
exports.vip = () => { 
  return `_Você não possui uma conta vip! 😢_` 
}

exports.admin = () => {
	return`_sai fora membro comum 🤣🤣🤣_`
}
exports.nivel = () => { 
  return`*Para fazer uso deste comando é nescessário ter o nível 3 👳🏿‍♂️*`
} 
exports.badmin = () => {
	return`*Bot não possui adm 😭*`
}

exports.nsfwoff = () => {
	return`*`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Número* : ${pnom}
*Expira* : 30 DIAS\n*Você é premium 😳*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.pp = (pushname) => {
	return`Vish, Vc não é premium 😳`
}

exports.bug = () => {
	return`*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco 🤨*`
}

exports.clears = () => {
	return`Todas as conversas foram apagadas :b`
}

exports.pc = () => {
	return`*`
}

exports.registered = (namaUser, umurUser, date, serialUser, time, sender) => {
	return`Panas🤝, cadastro bem sucedido\n\n_Seus dados_\n\nNome: ${namaUser}\n\nIdade: ${umurUser}\n\ndata: ${date} as ${time}\n\nS/N: ${serialUser}\n\nguarde este codigo, ele é importante!`
}

exports.cmdnf = (prefix, command) => {
	return`Comando *${prefix}${command}* não encontrado, use esse *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*`
}

exports.menu = (pushname, prefix, fdata, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, time, role, premi) => { 
	return `╔══❖〘 𝕀ℕ𝔽𝕆 〙❖═══╗
║
╠ ➣ *Nome*: ${pushname}
╠ ➣ *Número*: wa.me/${sender.split("@")[0]}
╠ ➣ *Premium*: ${premi}
╠ ➣ *Pontos*: Rp${uangku}
╠ ➣ *Xp*: ${getLevelingXp(sender)}/${reqXp}
╠ ➣ *Nível*: ${getLevelingLevel(sender)}
╠ ➣ *Patente*: ${role}
╠ ➣ *Total Registrados*: ${_registered.length}
╠ ══❖〘 𝕄𝔼𝔾𝔸ℍ 〙❖══╝

*!info*
*!dono*
*!ping*\n
Date de hoje: *${fdata}*

╔══❖〘𝕄𝕖𝕟𝕦 𝕔𝕣𝕚𝕒𝕕𝕠𝕣〙❖══╗
╠ ➣ *!sticker*
╠ ➣ *!s*
╠ ➣ *!tts* <cod do idioma> <texto>
╠ ➣ *!cadr* <texto>
╠ ➣ *!encurta* <url>
╠══❖〘 𝔽𝕌ℕ 𝕄𝔼ℕ𝕌 〙❖═══╣
╠ ➣ *!pokemon*
╠ ➣ *!loli*
╠ ➣ *!neko*
╠ ➣ *!ranime*
╠══❖〘𝕄𝔼ℕ𝕌 𝔸𝔻𝕄 〙❖═══╣
╠ ➣ *!promover* <@tagmembro>
╠ ➣ *!demitir* <@tagadmin>
╠ ➣ *!ban* <@tagmembro>
╠ ➣ *!add* <número da pessoa>
╠ ➣ *!setname* <texto>
╠ ➣ *!setdesc* <texto>
╠ ➣ *!setmarc* <texto>
╠ ➣ *!welcome* <1/0>
╠ ➣ *!antilinkegrupo* <1/0>
╠ ➣ *!antilinkyt* <1/0>
╠ ➣ *!farmlevel* <1/0>
╠ ➣ *!gp* <open/close>
╠ ➣ *!id* <@tagmembro>
╠══❖〘 *Variados* 〙❖══╣
╠ ➣ *!caracoroa*
╠ ➣ *!gay*
╠ ➣ *!gay2* <nome do amigo>
╠ ➣ *!gay3* <@tag>
╠ ➣ *!tiktokstalk* <id/usuario>
╠ ➣ *!igstalk* <nome do usuario>
╠ ➣ *!resp* <sua perqunta>
╠ ➣ *!level*
╠ ➣ *!play* <texto>
╠ ➣ *!ytmp3* <url>
╠ ➣ *!clogo* <texto>
╠ ➣ *!text3d* <texto>
╠ ➣ *!attp* <texto>
╠ ➣ *!uban* <número banido do whats>
╠ ➣ *!simi* <texto>
╠ ➣ *!email* <email/sua msg>
╠ ➣ !*del* <marque a msg do bot>
╠══❖〘 *Pesquisas* 〙❖══╣
╠ ➣ *!noticias* <so mandar o cmd>
╠ ➣ *!google* <texto>
╠ ➣ *!wiki* <texto>
╠ ➣ *!pinterest* <texto>
╠ ➣ *!brainly* <texto>
╠ ➣ *!images* <texto>
╠ ➣ *!cep* <seu ceo>
╠ ➣ *!clima* <nome da cidade>
╠ ➣ *!covid* <sua UF, ex: !covid sp>
╠ ➣ *!stickerly* <nome do sticker>
║
║ menu requisitado às: *${time}*
╚═══❖〘𝕄𝔼𝔾𝔸ℍ〙❖═══╝

*!menu2* para aqueles que o cell não pega a fonte!

`
}
exports.menu2 = (pushname, prefix, fdata, getLevelingLevel, getLevelingXp, sender, reqPx, _registered, pont, time, role) => { 
	return `╔══❖〘 *INFO* 〙❖═══╗
║
╠ ➣ *Nome*: ${pushname}
╠ ➣ *Número*: wa.me/${sender.split("@")[0]}
╠ ➣ *Pontos*: Rp${pont}
╠ ➣ *Xp*: ${getLevelingXp(sender)}/${reqPx}
╠ ➣ *Nível*: ${getLevelingLevel(sender)}
╠ ➣ *Patente*: ${role}
╠ ➣ *Total registrado*: ${_registered.length}
╠ ══❖〘 *MEGAH* 〙❖══╝

*!info*
*!dono*
*!ping*\n
Data de hoje: *${fdata}*

╔══❖〘 *MENU CDR* 〙❖══╗
╠ ➣ *!sticker* 
╠ ➣ *!s*
╠ ➣ *!tts* <cod do idioma> <texto>
╠ ➣ *!cadr* <texto>
╠ ➣ *!encurta* <url>
╠══❖〘 *FUN MENU* 〙❖═══╣
╠ ➣ *!pokemon*
╠ ➣ *!loli*
╠ ➣ *!neko*
╠ ➣ *!ranime*
╠══❖〘 *MENU ADM* 〙❖═══╣
╠ ➣ *!promover* <@tagmembro>
╠ ➣ *!demitir* <@tagadmin>
╠ ➣ *!ban* <@tagmembro>
╠ ➣ *!add* <número da pessoa>
╠ ➣ *!setname* <nome nv do grupo>
╠ ➣ *!setdesc* <nova desc do grupo>
╠ ➣ *!setmarc* <nova marcação>
╠ ➣ *!welcome* <1/0>
╠ ➣ *!antilinkgrupo* <1/0>
╠ ➣ *!antilinkyt* <1/0>
╠ ➣ *!atnivel* <on/off>
╠ ➣ *!gp* <open/close>
╠ ➣ *!id* <@tagmembro>
╠══❖〘 *variados* 〙❖══╣
╠ ➣ *!audio* <cod do idioma> <texto>
╠ ➣ *!pinterest* <texto>
╠ ➣ *!caracoroa*
╠ ➣ *!gay* 
╠ ➣ *!gay2* <nome do amigo>
╠ ➣ *!tiktokstalk* <id/nome de usuario>
╠ ➣ *!resp* <sua pergunta>
╠ ➣ *!level* <apenas em grupo>
╠ ➣ *!cep* <seu cep>
╠ ➣ *!covid* <sua UF, ex: !covid sp>
╠ ➣ *!clima* <sua cidade>
╠ ➣ *!clogo* <texto>
╠ ➣ *!attp* <texto>
╠ ➣ *!uban* <seu número banido do whats>
╠ ➣ *!text3d* <texto>
╠ ➣ *!email* <email/msg>
╠ ➣ *!play* <nome da musica>
╠ ➣ *!ytmp3* <url>
╠ ➣ *!convite* <envia o link do grupo>
╠ ➣ *!stickerly* <nome do sticker>
╠ ➣ *!simi* <texto>
╠ ➣ *!del* <marque a msg do bot>
║
║ menu requisitado às *${time}*
╚═══❖〘 *MEGAH* 〙❖═══╝`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role, limitCounts) => {
	return`
╭╼≽ *「 🔥LEVEL UP🔥 」*
│≽ *Nome* : ${pushname}
│≽ *Número* : wa.me/${sender.split("@")[0]}
│≽ *XP* : ${getLevelingXp(sender)}
│≽ *Patente*: ${role}
╰╼≽ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`desculpa *${pushname}* seu limite acabou\nNOTA: limite pode ser obtido por *${prefix}buylimit* ou subindo de nível`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE DA CONTA 」*
Seu limite : ${limitCounts}`
}

exports.lev = (limitCounts) => {
  return `${limitCounts}`
  }

exports.satukos = () => {
	return`digite 1 para ativar e 0 para desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*╭╼≽ 「 PONTOS」─╮*\n│≽ *Nome* : ${pushname}\n│≽ *Número* : ${sender.split("@")[0]}\n│≽ *Pontos* : ${uangkau}\n╰─────────`
}
