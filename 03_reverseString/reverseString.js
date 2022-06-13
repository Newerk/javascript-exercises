const reverseString = function(string) {
    let strArry = '';

    for (let i = string.length; i >= 0; i--) {
        strArry+= string.charAt(i);
    }
    return strArry;

};

// Do not edit below this line
module.exports = reverseString;
