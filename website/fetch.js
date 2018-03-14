
// function yousuck(){
	fetch('https://jsonplaceholder.typicode.com/users',{method: 'get'
}).then(function(response){
	const r = response.json();
	return r;
}).then(function(s){
	document.getElementById('fetchpromise').innerHTML = s;
})
// }

// yousuck();


// }).catch(function(err) { 
// 	// Error, handle err 
// });

// Promise.all([ 
// 	asyncFunc1({username}), 
// 	asyncFunc2(), 
// ]) 
// .then(([result1, result2]) => { 
// }) 

// function loadJson(url) {
// 	return fetch(url)
// 	.then(response => response.json());
//   }
  
//   function loadJsonUserName(username) {
// 	return fetch(`https://jsonplaceholder.typicode.com/users${username}`)
// 	  .then(response => response.json());
//   }
  
//   function showAvatar(githubUser) {
// 	return new Promise(function(resolve, reject) {
// 	  let img = document.createElement('img');
// 	  img.src = githubUser.avatar_url;
// 	  img.className = "promise-avatar-example";
// 	  document.body.append(img);
  
// 	  setTimeout(() => {
// 		img.remove();
// 		resolve(githubUser);
// 	  }, 3000);
// 	});
//   }
//   loadJson('dorthe/varnashw4/fetch.js')
//   .then(username => loadJsonUserName(username))
//   .then(showAvatar)
//   .then(githubUser => alert(`Finished showing ${githubUser.username}`));