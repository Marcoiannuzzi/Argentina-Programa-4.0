// // Ejercicio 1

// let colores = ["verde", "rojo", "azul", "blanco", "negro"];

// //Ejercicio 2

// let tercero = colores[2];

// // Ejercicio 3

// console.log(colores[0][0]);

// // Ejercicio 4

// let num = Math.round((Math.random())*100);

// //Ejercicio 5
// let arr1 = []

// for (let i = 0; i < 10; i++) {
//     arr1[i]=i+1 
// }

// console.log(arr1)

// // Ejercicio 6

// let arr2 = []

// for (let i = 0; i < 10; i++) {
//     arr2.push(Math.round((Math.random())*10));
// }

// console.log(arr2);

// // Ejercicio 7

// let copiaArr2 = arr2.slice();

// // Ejercicio 8

// let palabra = prompt("Ingresa una palabra")
// let resultado = document.getElementById("resultado");
// let arrayPalabras = [];
// while(palabra != "cancelar"){
//     resultado.innerHTML += palabra+"-";
//     arrayPalabras.push(palabra);
//     palabra = prompt("Vuelve a ingresar la palabra")
// }
// let resultadoArray = document.getElementById("resultadoArray")
// arrayPalabras.forEach(e => {
//     resultadoArray.innerHTML += e+" ";
// });

//  //Ejercicio 9 y 10
 
//  function convertirDolares() {
//     let dolar = document.getElementById("dolar").value;
//     document.getElementById("peso").value = dolar * 300;

//   }
  
//   function convertirPesos() {
//     let peso = document.getElementById("peso").value;
//     document.getElementById("dolar").value = peso / 300;

//   }

// //Ejercicio 11

//  function convertirFarenheit() {
//     let centigrados = document.getElementById("centigrados").value;
//     document.getElementById("farenheit").value = (centigrados * 9/5) + 32;

//   }
  
//   function convertirCentigrados() {
//     let farenheit = document.getElementById("farenheit").value;
//     document.getElementById("centigrados").value = (farenheit - 32) * 5/9;

//   }

// //Ejercicio 12
// const formularioCaja = () => {
//   let nombre = document.getElementById("nombre").value;
//   let material = document.getElementById("material").value;

//   const radioGroup = document.getElementsByName("dimension");
//   let dimensionSeleccionada;
//   radioGroup.forEach(radio => {
//     if (radio.checked) {
//       dimensionSeleccionada = radio.value;
//     }
//   });

//   let comentario = document.getElementById("comentario").value;

//   document.getElementById("resumen").innerHTML = `Caja para ${nombre} de ${material} tamaño ${dimensionSeleccionada} y ${comentario}`;
// }

//Ejercicio 13

let secreto;
let adivinarNum;
let cont = 3;

const numeroSecreto = () => {
  secreto = document.getElementById("secreto").value;
  if(secreto >5 && secreto <= 0){
    alert("el numero debe estar entre 0 y 5, vuelve a intentarlo")
    secreto = 0;
  }
  document.getElementById("secreto").value = 0;
}

const adivinar = () => {
  adivinarNum = document.getElementById("adivinarNum").value;
  if(cont <= 0){
    alert("perdiste!!")
  }
  if (secreto!=adivinarNum){
    cont--
    alert(`te quedan ${cont} intentos`);
  }
  else if(secreto == adivinarNum){
    alert(`Ganaste!!`)
  }
}

//Ejercicio 14

const agregar = () => {
  let persona = document.getElementById("persona").value;
  let lista = document.getElementById("lista");

  let nuevoElemento = document.createElement("li"); 
  nuevoElemento.innerText = persona; 
  lista.appendChild(nuevoElemento); 
  persona.value = "";
}


