const brett = document.querySelector(".spillbrett")
const startknapp = document.querySelector(".container button")
const containerspillbrett = document.querySelector(".containerspillbrett")
const logo = document.getElementById("logo")

let slangeArray = [{x : 7, y : 2}]

function tegnSlange(){
    slangeArray.forEach((segment) => {
        const slangeHode = document.createElement("div")
        slangeHode.style.backgroundColor = "pink"
    
        slangeHode.style.position = "absolute"
        slangeHode.style.width = "33.3px"
        slangeHode.style.height = "33.3px"
        slangeHode.style.left = "33.3px"
        containerspillbrett.appendChild(slangeHode)
    });
}

function poeng(){
    const poeng = document.createElement("img")
    poeng.src = "bilder/pixel_appelsin.png"
    poeng.style.position = "absolute"
    poeng.style.width = "33.3px"
    poeng.style.height = "33.3px"
    poeng.style.right = "33.3px"
    poeng.style.pointerEvents = "none"
    containerspillbrett.appendChild(poeng)
}

document.addEventListener("keydown", function(event){
    const taster = {PilOpp:"up", PilNed:"down", PilVenstre:"left", PilHøyre:"right"}
    if (taster[event.key])
})

function start(){
    logo.style.display = "none"

    if (brett.children.length === 225) {
        return
    }

    for (x=0; x<225; x++){
        const div = document.createElement("div")
        brett.appendChild(div)
    }
    tegnSlange()
    poeng()

}
startknapp.addEventListener("click", start)
