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
req.send(); // Add request to task queue


// const req= document.getElementById('expJSON');
// const jsonFunc=new XMLHttpRequest(),
// method="GET",
// url = 'https://jsonplaceholder.typicode.com/users';
// result=0;
// jsonFunc.open(method,url);
// // jsonFunc.onload=function(){
// // 	if(this.readyState===4 && this.status===200){
// // 		let jsonList=jsonFunc.responseText
// // 		let result=JSON.parse(jsonList)
// // 		let list=0
// // 		for(const key of result){
// // 			list=result.email	
// // 		}
// // 		console.log(result);
// // 	}
// // 	else {
// // 		alert('Error, invalid entry')
// // 	}
// // };
// // jsonFunc.send();
// // function callbackJSON(jsonFunc) {
// 	for(let i=0, max=jsonFunc.length; i<jsonFunc.length; i++){
// 		jsonFunc.push(i);
// 	}
// 	return callbackJSON
// }
// output.innerHTML=jsonFunc(result)