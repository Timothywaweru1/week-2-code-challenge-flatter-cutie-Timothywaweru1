// Your code
let baseUrl = "http://localhost:3000/characters";
fetch (baseUrl)
.then (res => res)
.then (data => console.log (data))
.catch (error => error)