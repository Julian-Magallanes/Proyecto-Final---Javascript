//eventos de menu hamburguesa
document.querySelector(".header__menuHamburguesa").addEventListener("click", animacionMenu)
let line1 = document.querySelector(".header__menuHamburguesa-line1");
let line2 = document.querySelector(".header__menuHamburguesa-line2");
let line3 = document.querySelector(".header__menuHamburguesa-line3");
let menuItems = document.querySelector(".header__menuItems");
let menuRegistration = document.querySelector(".header__menuRegistration");
let menu = document.querySelector(".header__menu");

function animacionMenu (){
    line1.classList.toggle("activeheader__menuHamburguesa-line1");
    line2.classList.toggle("activeheader__menuHamburguesa-line2");
    line3.classList.toggle("activeheader__menuHamburguesa-line3");

    menuItems.classList.toggle("activeheader__menuItems");
    menuRegistration.classList.toggle("activeheader__menuRegistration");
    menu.classList.toggle("activeheader__menu");
}

//eventos de despliege de rendimientos
document.querySelector(".header__menuItems span").addEventListener("click", rendimientos)
let flecha = document.querySelector(".header__menuItemsFlecha");
function rendimientos (){
    flecha.classList.toggle("activeheader__menuItemsFlecha");
}

//defino las variables
const rendCemento= 3
const rendArena= 0.9
const rendRipio= 0.9
const rendHormigon= 1
const rendPiedraBola= 0.30
const resume__text = document.querySelector(".resume__text");
const resume__text2 = document.querySelector(".resume__text2");
const resume__text3 = document.querySelector(".resume__text3");

//defino funciones constructoras

class MaterialesBases {
    constructor(cemento, arena, ripio){
        this.cemento = cemento;
        this.arena = arena;
        this.ripio = ripio;
    }
}
class MaterialesCimiento {
    constructor(hormigon, piedraBola){
        this.hormigon = hormigon;
        this.piedraBola = piedraBola;
    }
}

//defino arrays vacios
let materialesB= []
let materialesC= []

//condicionales para consultar el localStore
if(localStorage.getItem('MaterialesB')){
    materiales = JSON.parse(localStorage.getItem('MaterialesB'))
}else {
    localStorage.setItem('MaterialesB', JSON.stringify(materialesB))
}

if(localStorage.getItem('MaterialesC')){
    materialesC = JSON.parse(localStorage.getItem('MaterialesC'))
}else {
    localStorage.setItem('MaterialesC', JSON.stringify(materialesC))
}

//defino la variable en el id del formulario html
let formulario = document.getElementById("idForm")

//Creo el evento de escucha para el formulario
formulario.addEventListener('submit',(event) => {
    event.preventDefault()

    sistemaElegido()
    formulario.reset()
})

//Creo las funciones dentro del formulario => donde se elige el sistema y a partir de ese dato con las dimensiones calcula la cant de materiales necesarios.
const sistemaElegido = () => {
    if(document.getElementById('btn-bases').checked){
        console.log("usted eligio bases asiladas")
        bases()
    }
    else if(document.getElementById('btn-ciclopeo').checked){
        console.log("usted eligio cimiento ciclopeo")
        ciclopeo()
    }
}

const bases = () =>{
    //uso operador AND.
    let alto = document.getElementById('alto').value ;
    alto.length === 0 && alert("Usted no incluyo el alto")
    let ancho = document.getElementById('ancho').value;
    ancho.length === 0 && alert("Usted no incluyo el ancho")
    let largo = document.getElementById('largo').value;
    largo.length === 0 && alert("Usted no incluyo el largo")

    let resultado1 = cemento(alto, largo, ancho, rendCemento)
    let resultado2 = arena(alto, largo, ancho, rendArena)
    let resultado3 = ripio (alto, largo, ancho, rendRipio)
    
    resume__text.innerHTML = `<h2>Bases Aisladas:</h2> <br> <p>Usted necesitara: <br>${ resultado1 } bolsas de cemento <br>${ resultado2 } m3 de arena <br>${ resultado3 } m3 de ripio</p>`

//Creo un array y lo guardo en el localStorage
    const valor = new MaterialesBases(resultado1,resultado2,resultado3)
    materialesB.push(valor)
    console.log(materialesB)
    localStorage.setItem('MaterialesB', JSON.stringify(materialesB))
}

const ciclopeo =() =>{
    //uso operador AND.
    let alto = document.getElementById('alto').value;
    alto.length === 0 && alert("Usted no incluyo el alto")
    let ancho = document.getElementById('ancho').value;
    ancho.length === 0 && alert("Usted no incluyo el ancho")
    let largo = document.getElementById('largo').value;
    largo.length === 0 && alert("Usted no incluyo el largo")

    let resultado3 = hormigon(alto,largo,ancho, rendHormigon)
    let resultado4 = piedrabola(alto,largo,ancho, rendPiedraBola)

    resume__text.innerHTML = `<h2>Cimiento Ciclopeo:</h2> <br> <p>Usted necesitara: <br>${ resultado3 } m3 de hormigon elaborado <br>${ resultado4 } m3 de piedra bola </p>`

//Creo un array y lo guardo en el localStorage
    const valor = new MaterialesCimiento(resultado3,resultado4)
    materialesC.push(valor)
    console.log(materialesC)
    localStorage.setItem('MaterialesC', JSON.stringify(materialesC))
}

const hormigon = (alto, largo, ancho, rendHormigon) => alto * largo * ancho * rendHormigon;

const piedrabola = (alto, largo, ancho, rendPiedraBola) => alto * largo * ancho * rendPiedraBola;

const cemento = (alto, largo, ancho, rendCemento) => alto * largo * ancho * rendCemento;

const arena = (alto, largo, ancho, rendArena) => alto * largo * ancho * rendArena;

const ripio = (alto, largo, ancho, rendRipio) => alto * largo * ancho * rendRipio;

//Creo el evento a partir del boton de historial => donde lee el localStorage y lo inserta al html
document.getElementById("btn-calcular2").addEventListener("click", resumenTotal)

let botonResumen = document.getElementById("btn-calcular2")

function resumenTotal () {
    let historial=JSON.parse( localStorage.getItem("MaterialesB"))

    historial.forEach (materiales => {
        resume__text2.innerHTML += `
        <p>BASE AISLADA
        <br>${materiales.cemento} bolas de cemento
        <br>${materiales.arena} m3 de arena
        <br>${materiales.ripio} m3 de ripio</p>
        `
    });
    let historial2=JSON.parse( localStorage.getItem("MaterialesC")) 
    historial2.forEach(materialesC => {
        resume__text3.innerHTML += `
        <p>CIMIENTO CICLOPEO
        <br>${materialesC.hormigon} m3 de hormigon
        <br>${materialesC.piedraBola} m3 de piedraBola</p>
        `
    });
    /*
    let historial1=JSON.parse( localStorage.getItem("MaterialesB"))
    let historial2=JSON.parse( localStorage.getItem("MaterialesC"))

    const historial = [...historial1,...historial2]
    historial.forEach(materiales => {
        resume__text3.innerHTML += `
        <p>Usted necesita
        <br>${materiales.hormigon} m3 de hormigon
        <br>${materiales.piedraBola} m3 de piedraBola</p>
        <br>${materiales.cemento} bolsas de cemento
        <br>${materiales.arena} m3 de arena
        <br>${materiales.ripio} m3 de ripio</p>
    `
    });
    */
}

//Creo el evento a partir del boton de borrar historial => donde remueve los datos del localStorage y elimina el html creado anteriormente
document.getElementById("btn-calcular3").addEventListener("click", borrarHistorial)
let botonBorrar = document.getElementById("btn-calcular3")

function borrarHistorial () {
    localStorage.removeItem ("MaterialesB")
    localStorage.removeItem ("MaterialesC")

    document.querySelector(".resume__text2").innerHTML = ""
    document.querySelector(".resume__text3").innerHTML = ""
}