const req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/users');
req.onload = function () {
	if (req.status == 200) {
		let p = JSON.parse(req.response);
		let emailArray = [];
		let o = '';
		for (let i = 0; i < p.length; i++) {
			o = p[i].email;
			emailArray.push(o);
		}
		s=emailArray.sort()
		document.getElementById('callback').innerHTML = s;
		
	} else {
		console.log('ERROR', req.statusText);
	}
};
req.onerror = function () {
	console.log('Network Error');
};
req.send();