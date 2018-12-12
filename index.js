// Code your solution in this file.
const drivers = [];

function lowerCaseDrivers() {
	const newArr = drivers.slice(0);
	
//	function lowerCaseItems(item) {
//		return item.toLowerCase();
//	}

//	newArr.map(lowerCaseItems);

	newArr.map(function (val) { return val.toLowerCase()});
	return newArr;
}
