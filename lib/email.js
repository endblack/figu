const mail = async (text) => {
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
to: ["maxbiel070@gmail.com", "rangeloliveira1384@gmail.com"],
subject: "Teste megah",
text: `${text}`
}).then(message => {
console.log(message);
return 'enviado'
}).catch(err => {
console.log(err);
})
 } catch {
		return 'Eu não sei parça'
	}
}
module.exports = { mail, }
