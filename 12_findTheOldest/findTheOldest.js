const findTheOldest = function(people) {//returns the oldest person by name
    for (const iterator of people) {

        if((iterator.yearOfDeath-iterator.yearOfBirth) === oldestAgeNumber(people)){
            return iterator;
    }

}
};

const oldestAgeNumber = (array) => {
    let result = [];
    let max;
    let currentYear = 2020;
  
      for (const iterator of array) {
        result.push(iterator.yearOfDeath - iterator.yearOfBirth);
        max = Math.max(...result);

      }
        return max;//returns the largest age out of the list of objects
  };

// Do not edit below this line
module.exports = findTheOldest;

