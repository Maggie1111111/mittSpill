const container = document.querySelector(".spillbrett")
const startknapp = document.querySelector(".container button")
const containerspillbrett = document.querySelector(".containerspillbrett")

for (x=0; x<225; x++){
    const div = document.createElement("div")
    container.appendChild(div)
}

function slange(){
    const slange = document.createElement("div")
    slange.style.backgroundColor = "pink"
    
    slange.style.position = "absolute"
    slange.style.width = "99.9px"
    slange.style.height = "33.3px"
    slange.style.left = "33.3px"
    containerspillbrett.appendChild(slange)
}
function poeng(){
    const poeng = document.createElement("div")
    poeng.style.backgroundColor = "orange"
    poeng.style.position = "absolute"
    poeng.style.width = "33.3px"
    poeng.style.height = "33.3px"
    poeng.style.right = "33.3px"
    containerspillbrett.appendChild(poeng)
}

function start(){
    slange()
    poeng()
}
startknapp.addEventListener("click", start)
