module.exports = function checkRepeatingWords(sentence,delimiter = ' ') {
    if(sentence === undefined || delimiter === undefined){
        throw new Error('Enter both string and a delimiter');
    }
    if(sentence.length === 0){
        return 'Empty String not accepted'
    }
    if(typeof sentence !== 'string'){
        throw new Error("You must enter a string");
    }
    if(sentence.length > 100){
        throw new Error('String length has to be less than or equal to 100');
    }
    sentence=sentence.toLowerCase();
    const words = sentence.split(delimiter);
    let flag = 0;
    const wordMap = new Map();
    for (let index = 0; index < words.length; index++) {
        if (wordMap.has(words[index])) 
        {
            flag = 1;
        } 
        else 
        {
            wordMap.set(words[index], 1);
        }
    }
    if (flag === 1) {
        return "String contains repeating words";
    } else {
        return "Strings does not contain repeating words";
    }
}