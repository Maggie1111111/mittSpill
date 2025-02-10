const brett = document.querySelector(".spillbrett")
const startknapp = document.querySelector(".container button")
const containerspillbrett = document.querySelector(".containerspillbrett")
const logo = document.getElementById("logo")
const instruksjon1 = document.getElementById("instruksjon1")
const cover = document.getElementById("cover")
let retning = ""
let spillInterval
const poengPosisjon = {
    x: Math.floor(Math.random() * 15),
    y: Math.floor(Math.random() * 15)
}



let slangeArray = [{x : 7, y : 7}]

function tegnSlange(){
    document.querySelectorAll(".slange").forEach(e => e.remove())

    slangeArray.forEach((segment) => {
        const slangeHode = document.createElement("div")
        slangeHode.style.backgroundColor = "pink"
        slangeHode.classList.add("slange")
    
        slangeHode.style.position = "absolute"
        slangeHode.style.width = "33.3px"
        slangeHode.style.height = "33.3px";

        slangeHode.style.left = `${segment.x * 33.3}px`;
        slangeHode.style.top = `${segment.y * 33.3}px`
        containerspillbrett.appendChild(slangeHode)
    })
}

function poeng(){
    const poeng = document.createElement("img")

    poeng.src = "bilder/pixel_appelsin.png"
    poeng.style.position = "absolute"
    poeng.style.width = "33.3px"
    poeng.style.height = "33.3px"
    poeng.style.right = `${poengPosisjon.x * 33.3}px`
    poeng.style.top = `${poengPosisjon.x * 33.3}px`
    poeng.style.pointerEvents = "none"
    containerspillbrett.appendChild(poeng)
}

function flyttSlange() {
    let hode = { ...slangeArray[0] }
    
    if (retning === "up") hode.y -= 1
    if (retning === "down") hode.y += 1
    if (retning === "left") hode.x -= 1
    if (retning === "right") hode.x += 1
    
    if (hode.x === poengPosisjon.x && hode.y === poengPosisjon.y) {
        poengSum += 1

    } else {
        slangeArray.pop()
    }

    slangeArray.unshift(hode)
 

    tegnSlange()
}
document.addEventListener("keydown", function(event){
    const taster = {ArrowUp:"up", ArrowDown:"down", ArrowLeft:"left", ArrowRight:"right"}
    if (taster[event.key]){
        retning = taster[event.key]
        instruksjon1.style.display = "none"
        cover.style.display = "none"
    }
    console.log(retning)
    
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
    instruksjon1.style.display = "flex"
    cover.style.display = "flex"
    tegnSlange()
    poeng()

    clearInterval(spillInterval)
    spillInterval = setInterval(flyttSlange, 200)

}
startknapp.addEventListener("click", start)
