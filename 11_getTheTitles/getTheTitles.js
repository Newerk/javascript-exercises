const getTheTitles = function(array) {

    // let arr = [];

    // for (const iterator of array) {
    //     arr.push(iterator.title);
        
    // }

    // return arr;

    return array.map((books) => books.title);
};

// Do not edit below this line
module.exports = getTheTitles;
