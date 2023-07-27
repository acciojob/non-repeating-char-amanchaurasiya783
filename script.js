//your JS code here. If required.
function nonRepeat(str) {
	let a = 0;
	for(let i=a; i<str.length; i++){
		if (arr[a] == arr[i+1]){
			a++;
		}
	}
	return a;
}