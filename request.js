const req = new XMLHttpRequest(); 
req.open('GET', 'https://jsonplaceholder.typicode.com/users'); 
req.onload = function () { 
	if (req.status == 200) { 
		console.log (req.response); 
	} else { 
		console.log('ERROR', req.statusText); 
	} 
};
req.onerror = function () { 
	console.log('Network Error'); 
}; 
req.send(); // Add request to task queue
