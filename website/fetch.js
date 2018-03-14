fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(s) {
        fetchSort(s);
    });
function fetchSort(p){
    let userNameArray = [];
    for (let i=0; i<p.length; i++){
        userNameArray.push(p[i].username)
    }
    userNameArray.sort(function(short, long){
    return short.length - long.length;
    });
    document.getElementById('fetchpromise').innerHTML = userNameArray;
}