function encodeBase64(plainText){
    let b = new Buffer(plainText);
    return b.toString('base64');
}

function decodeBase64(cipherText){
    let b = new Buffer(cipherText, 'base64');
    return b.toString();
}

export default {
    encodeBase64,
    decodeBase64
}