function median(filterArr) {
  var result = 0;
  var len = filterArr.length;
  filterArr.sort(function(a,b) {
    return a - b;
  });
  if(len % 2 !== 0) {
    return filterArr[parseInt(len / 2)];
  }
  return (filterArr[len / 2] + filterArr[len / 2 - 1]) / 2;
}

function calculate_median(arr) {
  var filterArr = arr.filter(function(val,index) {
    return (index + 1) % 2 === 0;
  });
   return median(filterArr);
}



