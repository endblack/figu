const fetch = require('node-fetch')
const fs = require('fs')
const FormData = require('form-data')
 
 
function uploadimg (image) {
    var form = new FormData()
    form.append('image', image)
     
    const upload = fetch('https://api.imgbb.com/1/upload?expiration=3600&key=9160c6f659aba43c808df28f130d67cc', {
        method: 'POST',
        body: form
    }).then((response) => response.json())
        .then((result) => {
        console.log(result)
        const po = result.json
        console.log(po)
            return result
        })
        .catch(e => {
        console.log(e)
            return e
        })
    return upload
    console.log(upload)
}
exports.uploadimg = uploadimg