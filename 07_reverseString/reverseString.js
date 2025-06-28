const reverseString = function(string) {
    const stringArray = string.split("");
    let reverseArray = stringArray.reverse();
    let textOutput = reverseArray.join("");
    return textOutput;
};

// Do not edit below this line
module.exports = reverseString;
