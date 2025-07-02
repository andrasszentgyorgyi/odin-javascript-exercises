const findTheOldest = function(arr) {
    let sortedArr = arr.sort((current,prev)=>{
        if(prev.yearOfDeath === undefined){
            return ((new Date().getFullYear() - prev.yearOfBirth) - (current.yearOfDeath - current.yearOfBirth));
        } else if(current.yearOfDeath === undefined){
            return ((prev.yearOfDeath - prev.yearOfBirth) - (new Date().getFullYear() - current.yearOfBirth));
        } else {
            return ((prev.yearOfDeath - prev.yearOfBirth) - (current.yearOfDeath - current.yearOfBirth));
        }
    });
    return sortedArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
