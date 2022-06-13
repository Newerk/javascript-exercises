const removeFromArray = function() {
    let arg = Array.from(arguments);
    let arrOne = arg[0];
    let arrTwo = arg.splice(1);
    let newArr = [];
    
    for(const iterator of arrOne){
      newArr.push(iterator);
      for(const iteratorTwo of arrTwo){
        if (iteratorTwo === iterator){
          newArr.pop(iteratorTwo);
        }
      }
    }
    return newArr;
  
  };

// Do not edit below this line
module.exports = removeFromArray;

