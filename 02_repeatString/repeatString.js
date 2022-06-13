const repeatString = function(string, number) {
    let num = number;
    let word = '';
    let i = 1;

    if (num < 0) {
        return 'ERROR';
        
    }

    while (i <= num) {
        i++;
        word+=string;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
