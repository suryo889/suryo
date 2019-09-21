
function serialNumber(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generateSN() {
    var Numb = `${serialNumber(4)}-${serialNumber(4)}-${serialNumber(4)}-${serialNumber(4)}`
    return Numb;
}

function repeat() {
    // var i;
    for (var i=1; i<251 ; i++); {
    console.log(generateSN())
    }

}

// console.log(serialNumber(4));
console.log(generateSN(250));
console.log(repeat());
