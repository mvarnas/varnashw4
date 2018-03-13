
fetch('https://jsonplaceholder.typicode.com/users'{username});
	method: 'get' 
}).then(function(response) { 
	console.log(username)
}).catch(function(err) { 
	// Error, handle err 
});

Promise.all([ 
	asyncFunc1(), 
	asyncFunc2(), 
]) 
.then(([result1, result2]) => { 
	··· 
}) 
