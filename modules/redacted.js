function redactedParser(message) {
    let newWords = {
        selfie: "self-portrait",
        yummers: "delicious",
        outchea: "are out here",
        bruh: "wow",
        dodge: "pug",
        cilantro: "soap",
        bae: "loved one",
        swag: "style",
        yolo: "carpe diem"
    };
    let newString = message.replace(/selfie|yummers|outchea|bruh|dodge|cilantro|bae|swag|yolo/gi, (matched) => {
        return newWords[matched];
    });
    return newString;
}

module.exports = redactedParser;