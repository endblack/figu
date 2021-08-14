const fs = require('fs')
const crypto = require('crypto')

const gg = JSON.parse(fs.readFileSync('./data/diario.json'))

const gettime = (sender) => {
            let position = false
            Object.keys(gg).forEach((i) => {
                if (gg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return gg[position].time
            }
        }
        
module.exports = {
	gettime
	}