let baseUrl = "http://localhost:3000/characters"
fetch (baseUrl)
.then (response => response.json ())
.then (data => displayName(data) )

function showName () {
    let show = document.querySelector ("#name")
    show.innerHTML = `<p id="name">Mr.Cute</p> `

}
function displayName () {
    let top = document.querySelector ("#text1")
    top.addEventListener ("click",showName) 

}
function displayImage () {
    let img = document.querySelector ("img")
    img.src = "https://media.giphy.com/media/w20wYXctkVIZO/giphy.gif?cid=790b7611l9grx1ronrashb99f92408y95f8sn5m55iaiq7vy&ep=v1_gifs_search&rid=giphy.gif&ct=g"
}
displayImage()

// function showNameOfMonkey () {
//     const show = document.querySelector ("#name")
//     show.innerHTML = `<p id="name">Mx.Monkey</p>`
// }


// function displayName () {
//     let show = document.querySelector ("#text2")
//     show.addEventListener ("click",showName)
// }
// function showMonkey (name) {
// let show = document.querySelector ("#text2")
// show.addEventListener ("click",showNameOfMonkey)

// }


function showVotes () {
    const votes = document.querySelector ("#vote-count")
}
    


