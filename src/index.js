let baseUrl = "http://localhost:3000/characters/1"
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
    img.src = "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif"
    
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

    


