const findTheOldest = function(people) {
    addDeathYear(people);

    for (const iterator of people) {
        if((iterator.yearOfDeath-iterator.yearOfBirth) === getOldestAge(people)){
            return iterator;
    }

}
};

//returns the oldest age out of the list of objects
const getOldestAge = (array) => {
    let result = [];
    let max;
  
      for (const iterator of array) {
        result.push(iterator.yearOfDeath - iterator.yearOfBirth);
        max = Math.max(...result);

      }
        return max;
  };

  const addDeathYear = (array) => {
      const currentYear = new Date();// year doesnt need to be manually updated as time passes

      for (let i = 0; i < array.length; i++) {
          if (Object.keys(array[i]).length < 3) { //when length of element is less than 3, add a year of death key: value
              array[i].yearOfDeath = currentYear.getFullYear();
              
          }

          
      }

      return array;


  };

// Do not edit below this line
module.exports = findTheOldest;

const test = [
    {
      name: "Carly",
      yearOfBirth: 2018,
      yearOfDeath: 2022

    },
    {
      name: "Ray", 
      yearOfBirth: 1962//,
    //   yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

// console.log(findTheOldest(test));
// console.log(getOldestAge(test));
// console.log(addDeathYear(test));


