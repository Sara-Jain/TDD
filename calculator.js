const { string } = require("yargs");

function add(number1, number2 = 0) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        throw new Error("You must enter a number");
    }
    if((number1 || number2) > Number.MAX_SAFE_INTEGER ){
        throw new Error("Input value out of range");
    }
    return number1 + number2;
}

module.exports = add;