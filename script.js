const brett = document.querySelector(".spillbrett")
const startknapp = document.querySelector(".container button")
const containerspillbrett = document.querySelector(".containerspillbrett")
const logo = document.getElementById("logo")

let slangeArray = [{x : 10, y : 10}]

function tegnSlange(){
    slangeArray.forEach((segment) => {
        const slangeElement = document.createElement("div")
        slangeElement.style.backgroundColor = "pink"
    
        slangeElement.style.position = "absolute"
        slangeElement.style.width = "33.3px"
        slangeElement.style.height = "33.3px"
        slangeElement.style.left = "33.3px"
        containerspillbrett.appendChild(slangeElement)
    });
}

function poeng(){
    const poeng = document.createElement("img")
    poeng.src = "bilder/pixel_appelsin.png"
    poeng.style.position = "absolute"
    poeng.style.width = "33.3px"
    poeng.style.height = "33.3px"
    poeng.style.right = "33.3px"
    containerspillbrett.appendChild(poeng)
}

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
