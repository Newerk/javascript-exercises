const leapYears = function (year) {

    return (year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)) ? false : true;

};

console.log(leapYears(1900));

// Do not edit below this line
module.exports = leapYears;
