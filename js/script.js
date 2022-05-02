alert( "Hola bienvenido a la calculadora de la construccion!")
//declaro variables globales.
id = 0
let nombre = ""
let materiales= ""
let repetir=true
const rendMuro= 40
const rendCemento= 0.24
const rendArena= 0.07
const rendHormigon= 1
const rendPiedraBola= 0.30
const rendElementoCeramico=9 

SistemaConstructivo();

//Funcion constructora.

function desciption(sistema){
class arregloSistema {
    constructor (id, nombre, materiales){
        this.id = id
        this.nombre = nombre
        this.materiales = materiales
    }
}

const sistema1 = new arregloSistema (1,"Cimientos","Hormigon y piedra bola")
const sistema2 = new arregloSistema (2,"Mamposteria","Ladrillos, arena y cemento")
const sistema3 = new arregloSistema (3,"Entrepisos","Hormigon, Vigueta y elemento ceramico")
const sistema4 = new arregloSistema (4,"Estructura de hormigon armado","Hormigon y hierro")
const sistema5 = new arregloSistema (5,"Revestimientos","Cemento, arena y cal")
const sistema6 = new arregloSistema (6,"Stell framing","Panel de yeso, solera, montante, tornillos y masilla")
const sistema7 = new arregloSistema (7,"Panel EPS","Cemento, arena, polietireno expandido y malla de hierro")

let sistemas = [sistema1,sistema2,sistema3,sistema4,sistema5,sistema6,sistema7]

//Uso de .filter para mostrar por consola el array seleccionado.

const tipo1 = sistemas.filter((tipos) => tipos.id==sistema)
console.table(tipo1)
}

//funcion con condicionales
function SistemaConstructivo(){
    let sistema= parseInt(prompt(' Ingrese opcion de Sistema constructivo a usar \n1- Cimientos \n2- Mamposteria \n3- Entrepiso \n4- Estructura de Hormigon Armado \n5- Revestimientos \n6-Stell Framing \n7-Panel EPS'));
    if (sistema === 1) {
        desciption(sistema);
        cimiento ();
    } else if (sistema === 2){
        desciption(sistema);
        muro();
    } else if (sistema === 3){
        desciption(sistema);
        entrepiso();
    } else if (sistema === 4){
        desciption(sistema);
        estructuraHormigonArmado();
    } else if (sistema === 5){
        desciption(sistema);
        revestimientos();
    } else if (sistema === 6){
        desciption(sistema);
        stellFraming();
    } else if (sistema === 7){
        desciption(sistema);
        PanelEPS();        
    } else {
        alert('opcion ingresada incorrecta, recargue la pagina');
    }       
}
function cimiento (){
    let alto = parseInt (prompt("Insertar alto del cimiento (se considera en metros)"))
    let largo = parseInt(prompt("Insertar largo del cimiento (se considera en metros)"))
    let ancho = parseInt(prompt("Insertar ancho del cimiento (se considera en metros)"))

    let resultado1 = hormigon(alto,largo,ancho, rendHormigon)
    let resultado2 = piedrabola(alto,largo,ancho, rendPiedraBola)

    console.log ("Usted necesitara: " +"\n1) "+resultado1 + " m3 de hormigon elaborado" +"\n2) "+resultado2+" m3 de piedra bola")
}

function hormigon(alto, largo, ancho, rendHormigon){
    return  alto * largo * ancho * rendHormigon
}

function piedrabola (alto, largo, ancho, rendPiedraBola){
    return  alto * largo * ancho * rendPiedraBola
}

function muro (){
    let alto = parseInt (prompt("Insertar alto de la pared (se considera en metros)"))
    let largo = parseInt(prompt("Insertar largo de la pared (se considera en metros)"))

    let resultado1 = ladrillos(alto,largo,rendMuro)
    let resultado2 = cemento(alto,largo,rendCemento)
    let resultado3 = arena(alto,largo,rendArena)

    console.log ("Usted necesitara: " +"\n1) "+resultado1 + " ladrillos" +"\n2) "+resultado2+" Bolsas de cemento"+"\n3) "+resultado3+" m3 de arena")
}

function ladrillos(alto, largo, rendMuro){
    return  alto * largo * rendMuro
}

function cemento (alto, largo, rendCemento){
    return  alto * largo * rendCemento
}

function arena (alto, largo, rendArena){
    return  alto * largo * rendArena
}


function entrepiso (){    
    let largo = parseInt(prompt("Insertar largo del entrepiso (se considera en metros)"))
    let ancho = parseInt(prompt("Insertar ancho del entrepiso (se considera en metros)"))

    let resultado1 = hormigon(largo, ancho, rendHormigon)
    let resultado2 = vigueta(largo)
    let resultado3 = elementoCeramico(largo, ancho, rendElementoCeramico)

    console.log ("Usted necesitara: " +"\n1) "+resultado1 + " m3 de hormigon elaborado" +"\n2) "+resultado2+" viguetas" +"\n3) "+resultado3+" elementos ceramicos")
}
function hormigon(largo, ancho, rendHormigon){
    return   largo * ancho * rendHormigon
}

function vigueta (largo){
    return  (largo * 2) + 0.6 
}

function elementoCeramico (largo, ancho, rendElementoCeramico){
    return  largo * ancho * rendElementoCeramico
}

//funciones en construccion.

function estructuraHormigonArmado (){ 
    console.log("sistema en construccion.")
}
function revestimientos (){
    console.log ("sistema en construccion.")
}
function stellFraming(){
    console.log ("sistema en construccion.")
}
function PanelEPS (){
    console.log("sistema en construccion.")
}
