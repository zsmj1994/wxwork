const { aesEncrypt, aesDecrypt, verifyURL } = require("../index.js")

const requestURL = "http://49.4.114.56:5010/wxbot?msg_signature=49b56c7b5a27e91ee8b40dad9a285bfa5a284294&timestamp=1604576664&nonce=9i8fu47rsvf&echostr=RiciOYz0%2BSWzLgeGlzrf2SVm9fjve4p5AjZjLFpiWRrHgg0nXhKjY71eHrq%2B01%2FdjuyEQ2Z4enJGHCfgg8m5bw%3D%3D"

const encodingAesKey = "u1x5xXdjsbpTrtOO5EAwSTHbO7vAyIVjW7fa3vll9R5"
const echostr = "RiciOYz0+SWzLgeGlzrf2SVm9fjve4p5AjZjLFpiWRrHgg0nXhKjY71eHrq+01/djuyEQ2Z4enJGHCfgg8m5bw=="

test('aesDecrypt', () => {
    expect(aesDecrypt(echostr, encodingAesKey)).toBe("123");
});

// test('校验url', () => {
//     verifyURL('49b56c7b5a27e91ee8b40dad9a285bfa5a284294', '1604576664', '9i8fu47rsvf')
// })