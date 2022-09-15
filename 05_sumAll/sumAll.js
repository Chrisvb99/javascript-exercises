const sumAll = function(startNum, endNum) {
  let sum = 0;
  if(startNum > endNum) [startNum, endNum] = [endNum, startNum]
  if(startNum < 0 || endNum < 0) return "ERROR"
  if(typeof startNum !== 'number' || typeof endNum !== 'number') return "ERROR"

  for(let i=startNum;i<=endNum;i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
