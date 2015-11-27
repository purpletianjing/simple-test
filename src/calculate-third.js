
function getAvg(newArr) {
  var classifyResultByBit = {};
  var avgResult = [];
  newArr.forEach(function(val) {
    classifyResultByBit[val.toString().length] = classifyResultByBit[val.toString().length] || [];
    classifyResultByBit[val.toString().length].push(val);
  });
  for(var everyResult in classifyResultByBit) {
    var avg = classifyResultByBit[everyResult].reduce(function(val,after){
      return val + after;
    }) / classifyResultByBit[everyResult].length;
    avgResult.push(avg);
  }
  return avgResult;
}

function even_group_calculate_average(arr) {
  var filterArr = arr.filter(function(val,index) {
    return ((index + 1) % 2 === 0)&&(val % 2 === 0);
  });
  var result = getAvg(filterArr);
  return result.length ? result : [0];
}



