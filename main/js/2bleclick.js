//default
document.getElementById("igoogle").style.cssText = "visibility: hidden"
document.getElementById("ifilesexplorer").style.cssText = "visibility: hidden"
document.getElementById("inotepad").style.cssText = "visibility: hidden"
document.getElementById("iadmintareas").style.cssText = "visibility: hidden"
document.getElementById("ifilesexplorer-filesdcr").style.cssText = "visibility: hidden"
document.getElementById("ifilesexplorertrash").style.cssText = "visibility: hidden"
document.getElementById("inp-a").style.cssText = "visibility: hidden"
document.getElementById("inp-b").style.cssText = "visibility: hidden"
document.getElementById("inp-c").style.cssText = "visibility: hidden"
document.getElementById("inp-d").style.cssText = "visibility: hidden"
document.getElementById("inp-e").style.cssText = "visibility: hidden"
document.getElementById("inp-f").style.cssText = "visibility: hidden"
document.getElementById("inp-g").style.cssText = "visibility: hidden"
document.getElementById("inp-h").style.cssText = "visibility: hidden"
document.getElementById("inp-h").style.cssText = "visibility: hidden"
document.getElementById("app-7").style.cssText = "visibility: hidden"
document.getElementById("app-6 files-explorerdcr").style.cssText = "visibility: hidden"
document.getElementById("km").style.cssText = "visibility: hidden"
document.getElementById("app-4 blocked").style.cssText = "visibility: hidden"



let index_value = 100
let desencriptarllamado = false

const af = document.getElementById("archivos-funcionalidad")
af.style.cssText = "visibility: hidden"
    //en html debe ser llamado en el elemento appicon como ondblclick="dblclick" 
    //IMPORTANTE LE DEBES AÑADIR EL ID DENTRO DE LA FUNCIÓN DE LO QUE QUIERES QUE SE MUESETRE AL HACER DOBLE CLICK 
function dblclick(id) {
    const element = document.getElementById(id)
    if (element == document.getElementById("archivos-funcionalidad")) {
        let index_value2 = index_value + 1
        af.style.cssText = "z-index: " + index_value2 + "; visibility: visible;"
        console.log(element + "funciono")
    } else {
        element.style.cssText = "z-index: " + index_value
        console.log(element + "funciono")
    }
    index_value++
}
//este para el borón de cerrar funciona igual pero hace lo contrario
function cerrar(id) {
    const element = document.getElementById(id)
    element.style.cssText = "display: none; z-index: -100"
    console.log(element + "funciono")
}
//en html debe ser llamado en el elemento appicon como onclick="unclick"
function unclick(id) {
    const elemento = document.getElementById(id)
    if (desencriptarllamado == true) {
        elemento.style.cssText = "background-color: rgba(255, 255, 255, 0.199); border: 1px dotted white;"
    } else if (elemento != document.getElementById('app-4 blocked')) {
        elemento.style.cssText = "background-color: rgba(255, 255, 255, 0.199); border: 1px dotted white;"
    } else {
        elemento.style.cssText = "background-color: rgba(255, 0, 0, 0.199); border: 1px dotted red;"
    }
    setTimeout("reset()", 100)
}

function interscript() {
    console.log("Hola")
    desencriptarllamado = true
    document.getElementById('app-4 blocked').classList.remove("blocked")
}

function reset() {
    const body = document
    body.onclick = function() {
        //cuando añadas mas apps al html añadelas aqui tambien
        const app1 = document.getElementById("app-1 trash")
        const app2 = document.getElementById("app-2 chrome")
        const app3 = document.getElementById("app-3 files-explorer")
        const app4 = document.getElementById("app-4 blocked")
        const app5 = document.getElementById("app-5 notepad")
        const app6 = document.getElementById("app-6 files-explorerdcr")

        app1.style.cssText = ""
        app2.style.cssText = ""
        app3.style.cssText = ""
        app4.style.cssText = ""



        //fin del espacio de añadir apps
        body.onclick = ""
    }
}

function showBlock(){
    document.getElementById('app-4 blocked').style.cssText = "visibility: visible";
}