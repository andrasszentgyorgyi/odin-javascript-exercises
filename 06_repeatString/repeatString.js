const repeatString = function(string, num) {
    if (num<0){
        return "ERROR";
    }
    let textOutput = "";
    for(let i = 0; i<num; i++){
        textOutput+=string;
    }
    return textOutput
};

// Do not edit below this line
module.exports = repeatString;
