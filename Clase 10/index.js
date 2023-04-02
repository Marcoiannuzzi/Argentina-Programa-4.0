// //Ejercicio 1

// let arrEj1 = [5,8,1,6,9,4,15];

// arrEj1.sort((a,b) => a-b);

// let listaEj1 = document.getElementById("listaEj1");

// arrEj1.forEach(e => {
//     let li = document.createElement("li");
//     li.textContent = e
//     listaEj1.appendChild(li)
// });

// //Ejercicio 2
// // A
// let arrEj2 = [1,2,3,4,5,6];
// let cont=1;

// while(cont <= arrEj2.length){
//     console.log(arrEj2[cont-1]);
//     cont++
// }
// //B

// for (let i = 0; i < arrEj2.length; i++) {
//     console.log(arrEj2[i]);   
// }

// // C

// arrEj2.forEach(e =>console.log(e));

// // D
// arrEj2.forEach(e =>console.log(e + 1));

// // E 

// let copiaArray = [];

// arrEj2.forEach(e => copiaArray.push(e+1));

// // F

// let promedio = 0;
// let total = 0;

// arrEj2.forEach(e => total +=e);
// promedio = total / arrEj2.length;

// // Ejercicio 3. Dado un array de números, mostrar cómo quedaría si cada uno de los números es elevado al cuadrado.

// let arrEj3 = [2,4,5,6,8,7];

// arrEj3.forEach(e => console.log(Math.pow(e,2)));

// // Ejercicio 4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos

// let arrEj4 = [1,-4,12,0,-3,29,-150]
// let positivos = 0;

// arrEj4.forEach(e => {
//     if (e>0) positivos += e;
// });

// // Ejercicio 5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
// // a. Obtener aquellos nombres con al menos 6 letras.
// // b. Obtener los nombres que comienzan con "M".
// // c. Ordenar alfabéticamente y mostrar por consola.
// // d. Generar un array que contenga solo las iniciales
// // e. Ejemplo: ["F", "L", "E", "M",... ].
// // f. Generar un array que contenga todos los nombres en mayúscula.
// // g. Queremos saber si alguno de estos nombres comienza con "J”

// let nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

// let nombreMas6letras = []
// nombres.forEach( e =>{
//     if(e.length >= 6) nombreMas6letras.push(e) });

// let comienzanConM = [];
// comienzanConM = nombres.filter(e => e.startsWith("M"));

// nombres.sort();
// console.log(nombres);

// let soloIniciales = [];
// soloIniciales = nombres.map(e => e[0])

// let EnMayuscula = [];
// EnMayuscula = nombres.map(e => e.toUpperCase())

// let comienzaConJ = nombres.some(e => e.startsWith("J"));

// // Ejercicio 6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

// let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
// let colorUsuario = prompt("Ingrese un color");

// let existe = colores.find(e => e == colorUsuario);

// if (existe){
//     alert("El color esta en la lista");
// } else {
//     alert("El color NO esta en la lista");
// }

// // Ejercicio 7. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares

// let arrEj7 = [1,2,3,4,5,6,7,8,9];

// let pares = [];
// pares = arrEj7.filter(e => e%2 == 0);

// // Ejercicio 8. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga sólo las palabras que empiezan con una vocal.

// let arrEj8 = ["azul", "amarillo", "rojo", "verde", "café", "rosa", "indigo"]

// let comienzaConVocal = (arr) => {
//         let comienzaConVocal = [];
//         comienzaConVocal = arr.filter(e => e.startsWith("a") || e.startsWith("e") || e.startsWith("i") || e.startsWith("o") || e.startsWith("u"));
//         return comienzaConVocal;
// };


// // Ejercicio 9. Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices.

// function intercambiarElementos(arr, indice1, indice2) {
//     let i = arr[indice1];
//     arr[indice1] = arr[indice2];
//     arr[indice2] = i;
//   };
  
// Ejercicio 10. Crear dos párrafos en el body de una página. Capturar el evento click solo del primero utilizando la librería jQuery.
$(function(){

})

$(".p1").on("click", hola = () => $(".p1").text("Se capturó el evento del Parrafo 1"));

//Ejercicio 11. 

$(".f1").on("click", cambiaColor = () => {
    $(".f1").css("background-color","red")
});

// Ejercicio 12. Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona. Para
// ocultar un elemento jQuery tiene un método llamado hide().

$(".li1").on("click", desaparecer = () =>{
    $(".li1").hide();
});

$(".li2").on("click", desaparecer = () =>{
    $(".li2").hide();
});

$(".li3").on("click", desaparecer = () =>{
    $(".li3").hide();
});

$(".li4").on("click", desaparecer = () =>{
    $(".li4").hide();
});

// Ejercicio 13. Confeccionar una página que muestre dos tablas con tres filas cada una. Cambiar el color
// de fondo de cada fila de la primera tabla cuando sea presionada con el mouse

$(".r1").on("click", cambiarColor = () => {
    $(".r1").css("background-color","yellow")
});

$(".r2").on("click", cambiarColor = () => {
    $(".r2").css("background-color","yellow")
});

$(".r3").on("click", cambiarColor = () => {
    $(".r3").css("background-color","yellow")
});

// Ejercicio  14. Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en un div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de fuente.

$(".b1").on("click", cambiarTamanio = () => {
    $(".n1 p").css("font-size","30px");
})

$(".b2").on("click", cambiarTamanio = () => {
    $(".n2 p").css("font-size","30px");
})

$(".b3").on("click", cambiarTamanio = () => {
    $(".n3 p").css("font-size","30px");
})


// Ejercicio 15. Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto en cada casillero. Luego al presionar un botón cambiar por la cadena "-" solo el contenido de la primera tabla, dejando intacto el de la segunda.

$(".ej15").on("click", cambiarTexto = () => {
    $(".tabla1 tr td").text("-");
})

// Ejercicio 16. Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres botones que permitan fijar distintos hipervínculos para la propiedad href. Además
// actualizar el texto del hipervínculo.

$(".bt1").on("click", cambiarAtributo = () => {
    $(".linkA").attr("href","https://www.google.com/");
});

$(".bt2").on("click", cambiarAtributo = () => {
    $(".linkA").attr("href","https://www.instagram.com/");
});

$(".bt3").on("click", cambiarAtributo = () => {
    $(".linkA").attr("href","https://www.facebook.com/");
});

// Ejercicio 17. Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego
// cuando sean presionadas ocultarlas.

$(".ocultar1").on("click", ocultar = () => {
    $(".ocultar1").hide();
});

$(".ocultar2").on("click", ocultar = () => {
    $(".ocultar2").hide();
});

$(".ocultar3").on("click", ocultar = () => {
    $(".ocultar3").hide();
});



