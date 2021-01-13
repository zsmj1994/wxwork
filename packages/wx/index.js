const crypto = require("crypto-js")
const algorithm = 'aes-256-cbc'

function aesEncrypt(data, key) {
    return crypto.AES.encrypt(data, key, {
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7,
        vi: key.slice(0, 16)
    })
}

function aesDecrypt(encrypted, encodingAESKey) {

    const aesKey = crypto.enc.Base64.parse(encodingAESKey + '=')

    const iv = crypto.lib.WordArray.create(aesKey.words, 16)


    const aesMsg = crypto.enc.Base64.parse(encrypted)

    const decipher = crypto.AES.decrypt(encrypted, aesKey, {
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7,
        iv: iv
    })

    const randMsg = Buffer.from(decipher + "", "hex")

    const msgLength = randMsg.readInt32BE(16)

    const content = randMsg.toString("utf-8", 20, 20 + msgLength)


    return content
}


function verifyURL(sMsgSignature, sTimeStamp, sNonce, sEchoStr, sReplyEchoStr) {

}

function _sort(parameters) {
    let keys = Object.keys(parameters)
    keys = keys.sort()

}

module.exports = {
    aesEncrypt,
    aesDecrypt,
    verifyURL
}
