const req = new XMLHttpRequest(); 
req.open('GET', 'https://jsonplaceholder.typicode.com/users'); 
req.onload = function () { 
	if (req.status == 200) { 
		document.getElementById('callback').innerHTML = req.response; 
	} else { 
		console.log('ERROR', req.statusText); 
	}
};
req.onerror = function () { 
	console.log('Network Error'); 
}; 
req.send(); 