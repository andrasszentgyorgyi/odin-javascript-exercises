const palindromes = function (input) {
    let unspaced = input.toLowerCase().split(" ").join("").split(".").join("").split(",").join("").split("'").join("").split("!").join("");
    let unspacedReverse = input.toLowerCase().split("").reverse().join(" ").split(" ").join("").split(".").join("").split(",").join("").split("'").join("").split("!").join("");
    console.log(unspaced);
    console.log(unspacedReverse);
    if (unspaced == unspacedReverse){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
