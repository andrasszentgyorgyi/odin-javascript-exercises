const removeFromArray = function() {
    const args = Array.from(arguments);
    const mainArray = args.shift();
    const output = mainArray.filter((element)=>!args.includes(element));
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
