function numberOfDigit(number) {
    let digitCount = 0;
    if (number === undefined) {
        throw new Error("Enter a integer value");
    }
    if (typeof (number) !== "number" || number % 1 != 0) {
        throw new Error("You must enter a integer value");
    }
    while (number != 0) {
        digitCount++;
        number = parseInt(number / 10, 10);
    }
    return digitCount;
}

function isArmstrongNumber(number) {
    if (typeof (number) !== "number" || number % 1 != 0) {
        throw new Error("You must enter a integer value");
    }
    // if (number < 0)
    //     return "Negative value not allowed";
    // if (number > 32767 || number < -32768 || number > 32767 || number < -32768) {
    //     return "Inputs are out of range"
    // }
    const digitCount = numberOfDigit(number);
    let temp = number, sum = 0;
    while (temp != 0) {
        let lastDigit = temp % 10;
        sum += Math.pow(lastDigit, digitCount);
        temp = parseInt(temp / 10, 10);
    }
    return sum === number;
}

function ArmstrongGenerator(range) {
    // array to store the armstrong number in the given range
    let armstrongNumbers = [];
    for (let index = 0; index <= range; index++) {
        if (isArmstrongNumber(index)) {
            armstrongNumbers.push(index);
        }
    }
    return armstrongNumbers;
}

module.exports = {
    numberOfDigit: numberOfDigit,
    isArmstrongNumber: isArmstrongNumber,
    ArmstrongGenerator: ArmstrongGenerator
}