const removeFromArray = function(array) {
  let outputArray = array;
  for(let i=array.length;i>=0;i--){
    for(let j=1;j<arguments.length;j++){
      if(array[i] === arguments[j]){
        array.splice(i,1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
