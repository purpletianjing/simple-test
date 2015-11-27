
function single_element(arr) {
	var filterResult = arr.filter(function(val,index){
		return index % 2 !== 0;
	});
	var count = 0;
	var result = [];
	filterResult.forEach(function(val) {
		count = 0;
		for(var i = 0;i < filterResult.length;i++) {
			if(val === filterResult[i]) {
				count++;
			}
		}
		if(count === 1) {
			result.push(val);
		}
	});
	return result;
}