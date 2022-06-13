const palindromes = function (string) {
    let reverse = '';
    let input = string.replace(/\W+/g, '').toLowerCase();

    for (let i = input.length-1; i >= 0; i--) {
        reverse += input.charAt(i);

    }

    return (input === reverse) ? true : false;

};

// Do not edit below this line
module.exports = palindromes;
