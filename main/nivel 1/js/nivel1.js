//variables/const globales 

//Comprobación de selección
let cpu = false
let gpu = false
let dis = false
let mot = false
let ram = false

//Posibles componentes
let disco = false
let grafica = false
let procesador = false
let placa = false
let memoria = false

//comprobación de secuencia correcta
let textquality = ""
let comprobador = ""
let secuencia = ""
let correcto = false
let vecescorrecto = 0
let comprado = false

let vecesfallado = 0

function nivel1(){
if(vecesfallado == 3){
    location.href = "../game_over.html"
}
vecesfallado++

//declaración de secuencia
const quality = parseInt(Math.random() * 10) + 1
let componente1 = parseInt(Math.random() * 5 + 1)
let componente2 = parseInt(Math.random() * 5 + 1)
let componente3 = parseInt(Math.random() * 5 + 1)

//recalculo para evitar duplicados
while (componente1 == componente2 || componente1 == componente3 || componente2 == componente3) {
    componente1 = parseInt(Math.random() * 5 + 1)
    componente2 = parseInt(Math.random() * 5 + 1)
    componente3 = parseInt(Math.random() * 5 + 1)
    console.log("reecalculo c1 = " + componente1 + "\n" + "reecalculo c2 = " + componente2 + "\n" + "reecalculo c3 = " + componente3)
}

if (componente1 == 1) { disco = true; console.log("disco") }
else if (componente1 == 2) { grafica = true; console.log("grafica") }
else if (componente1 == 3) { procesador = true; console.log("procesador") }
else if (componente1 == 4) { placa = true; console.log("placa") }
else if (componente1 == 5) { memoria = true; console.log("memoria") }

if (componente2 == 1) { disco = true; console.log("disco") }
else if (componente2 == 2) { grafica = true; console.log("grafica") }
else if (componente2 == 3) { procesador = true; console.log("procesador") }
else if (componente2 == 4) { placa = true; console.log("placa") }
else if (componente2 == 5) { memoria = true; console.log("memoria") }

if (componente3 == 1) { disco = true; console.log("disco") }
else if (componente3 == 2) { grafica = true; console.log("grafica") }
else if (componente3 == 3) { procesador = true; console.log("procesador") }
else if (componente3 == 4) { placa = true; console.log("placa") }
else if (componente3 == 5) { memoria = true; console.log("memoria") }

if (quality <= 6) {
    console.log("baja calidad")
    comprobador = "AAA"
    textquality = "Bajos recursos"
}
else if (quality <= 9) {
    console.log("media calidad")
    comprobador = "BBB"
    textquality = "Medios recursos"
}
else if (quality <= 10) {
    console.log("alta calidad")
    comprobador = "CCC"
    textquality = "Altos recursos"
}

$('#listacontenido').text(textquality)
$('#texto_lista').text("Algunos componentes son irreparables, encuentra su reemplazo que sepas que los componentes deben ser de " + textquality)

const componentes = document.getElementById('componentes')
if (procesador == true) {
    componentes.innerHTML += "Procesador <br>"
}
if (disco == true) {
    componentes.innerHTML += "Disco Duro <br>"
}
if (grafica == true) {
    componentes.innerHTML += "Gráfica <br>"
}
if (memoria == true) {
    componentes.innerHTML += "Memoria RAM <br>"
}
if (placa == true) {
    componentes.innerHTML += "Placa Base <br>"
}

}
nivel1()
function cpuclick(id) {
    if (cpu == false) {
        const argid = document.getElementById(id)
        const ctext = document.getElementById("ctext")
        ctext.innerHTML += argid.innerHTML + "<br>"

        if (id == "cpulow") { secuencia = secuencia + "A" }
        if (id == "cpumid") { secuencia = secuencia + "B" }
        if (id == "cpuhig") { secuencia = secuencia + "C" }

        if (procesador == true) {
            correcto = true
            vecescorrecto++
        }
        console.log(secuencia + "\n" + "procesador es " + procesador)
    }
    cpu = true
}

function ramclick(id) {
    if (ram == false) {

        const argid = document.getElementById(id)
        const ctext = document.getElementById("ctext")
        ctext.innerHTML += argid.innerHTML + "<br>"

        if (id == "ramlow") { secuencia = secuencia + "A" }
        if (id == "rammid") { secuencia = secuencia + "B" }
        if (id == "ramhig") { secuencia = secuencia + "C" }
        if (memoria == true) {
            correcto = true
            vecescorrecto++
        }
        console.log(secuencia + "\n" + "ram es " + memoria)
    }
    ram = true
}

function gpuclick(id) {
    if (gpu == false) {
        const argid = document.getElementById(id)
        const ctext = document.getElementById("ctext")
        ctext.innerHTML += argid.innerHTML + "<br>"
        if (id == "gpulow") { secuencia = secuencia + "A" }
        if (id == "gpumid") { secuencia = secuencia + "B" }
        if (id == "gpuhig") { secuencia = secuencia + "C" }
        if (grafica == true) {
            correcto = true
            vecescorrecto++
        }
        console.log(secuencia + "\n" + "gpu es " + grafica)
    }
    gpu = true
}

function disclick(id) {
    if (dis == false) {
        const argid = document.getElementById(id)
        const ctext = document.getElementById("ctext")
        ctext.innerHTML += argid.innerHTML + "<br>"
        if (id == "dislow") { secuencia = secuencia + "A" }
        if (id == "dismid") { secuencia = secuencia + "B" }
        if (id == "dishig") { secuencia = secuencia + "C" }
        if (disco == true) {
            correcto = true
            vecescorrecto++
        }
        console.log(secuencia + "\n" + "disco es " + disco)
    }
    dis = true
}

function motclick(id) {
    if (mot == false) {
        const argid = document.getElementById(id)
        const ctext = document.getElementById("ctext")
        ctext.innerHTML += argid.innerHTML + "<br>"
        if (id == "motlow") { secuencia = secuencia + "A" }
        if (id == "motmid") { secuencia = secuencia + "B" }
        if (id == "mothig") { secuencia = secuencia + "C" }
        if (placa == true) {
            correcto = true
            vecescorrecto++
        }
        console.log(secuencia + "\n" + "placa es " + placa)
    }
    mot = true
}
function compra() {
    comprado = true
    vaciarcarritoparcial()
}
function comprobación() {
    if (secuencia == "" || comprado == false) {
        $('.warning').css('display', 'flex')
        setTimeout("$('.warning').css('display','none')", 2500)
    }
    else if (comprobador == secuencia && vecescorrecto == 3 && correcto == true && comprado == true) {
        switch(secuencia){
            case "AAA":
                create_short_cookie("disk","WD 500GB")
                create_short_cookie("tam","500 TB")
                    console.log("---------------"+"\n"+getCookie("disk")+"\n"+"---------------")
                    console.log("---------------"+"\n"+getCookie("tam")+"\n"+"---------------")

                    create_short_cookie("gpu","GT 710")
                    console.log("---------------"+"\n"+getCookie("gpu")+"\n"+"---------------")

                    create_short_cookie("cpu","I3")
                    console.log("---------------"+"\n"+getCookie("cpu")+"\n"+"---------------")

                    create_short_cookie("ram","4 GB")
                    console.log("---------------"+"\n"+getCookie("ram")+"\n"+"---------------")

                    create_short_cookie("placa","Pro Z690-A")
                    console.log("---------------"+"\n"+getCookie("placa")+"\n"+"---------------")
                    break;
            case "BBB":
                create_short_cookie("disk","WD 1TB")
                create_short_cookie("tam","1TB")
                    console.log("---------------"+"\n"+getCookie("disk")+"\n"+"---------------")
                    console.log("---------------"+"\n"+getCookie("tam")+"\n"+"---------------")

                    create_short_cookie("gpu","RX 550")
                    console.log("---------------"+"\n"+getCookie("gpu")+"\n"+"---------------")

                    create_short_cookie("cpu","I3")
                    console.log("---------------"+"\n"+getCookie("cpu")+"\n"+"---------------")

                    create_short_cookie("ram","4 GB")
                    console.log("---------------"+"\n"+getCookie("ram")+"\n"+"---------------")

                    create_short_cookie("placa","B550M -A PRO")
                    console.log("---------------"+"\n"+getCookie("placa")+"\n"+"---------------")
                    break;
            case "CCC":
                create_short_cookie("disk","Samsung SSD 1TB")
                create_short_cookie("tam","1TB")
                console.log("---------------"+"\n"+getCookie("disk")+"\n"+"---------------")
                console.log("---------------"+"\n"+getCookie("tam")+"\n"+"---------------")

                create_short_cookie("gpu","Nvidia RTX 3060 ti")
                console.log("---------------"+"\n"+getCookie("gpu")+"\n"+"---------------")

                create_short_cookie("cpu","Ryzen 9")
                console.log("---------------"+"\n"+getCookie("cpu")+"\n"+"---------------")

                create_short_cookie("ram","16 GB")
                console.log("---------------"+"\n"+getCookie("ram")+"\n"+"---------------")

                create_short_cookie("placa","B150 PLUS II")
                console.log("---------------"+"\n"+getCookie("placa")+"\n"+"---------------")
                break;
        }
        location.href = "./animacion1/animacion.html"
    }
    else {
    alert('incorrecto intentalo de nuevo')
    reseteo()
    nivel1()
    console.log(correcto)
    console.log(vecescorrecto)
    console.log(comprado)
    console.log(comprobador)} 
    //si falla 3 veces restart desde intro
}

function vaciarcarritoparcial(){
    const ctext = document.getElementById("ctext")
    ctext.innerHTML = ""
}
function vaciarcarritototal(){
    const ctext = document.getElementById("ctext")
    ctext.innerHTML = ""
    mot = false
    dis = false
    gpu = false
    ram = false
    cpu = false

    secuencia = ""
    correcto = false
    vecescorrecto = 0

    console.log('variables playerside seteadas a default')
}
function reseteo(){
    const ctext = document.getElementById("ctext")
    ctext.innerHTML = ""

    mot = false
    dis = false
    gpu = false
    ram = false
    cpu = false

    disco = false
    grafica = false
    procesador = false
    placa = false
    memoria = false

    secuencia = ""
    correcto = false
    vecescorrecto = 0
    comprado = false

    console.log('variables playerside seteadas a default')
}