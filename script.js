function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s1.toLowerCase().includes(s2.toLowerCase())){
		return s1.toLowerCase().indexOf(s2.toLowerCase())
	}
	else{
		return -1;
	}
	
	
	

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
