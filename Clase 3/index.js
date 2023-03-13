// // Ejercicio 1

// let param = 1;

// function checkTypo(x){
//     return console.log(typeof(x));
// }

// checkTypo(param);

// //Ejercicio 2

// let num1 = 2;
// let num2 = 4;

// function resta (x, y){
//     if (typeof(x) == typeof(1) && typeof(y) == typeof(1)){
//         return console.log(x-y);
//     } else {
//         return console.log("El valor ingresado no es del tipo numero");
//     }
// }

// resta(num1, num2);

// //Ejercico 3

// let x = 3;
// let y = "arbol";

// function cambiarValor (a, b){
//     let valorDeA = a;
//     let valorDeB = b;

//     if(valorDeA === x){
//         x = valorDeB;
//         y = valorDeA;
//     } else {
//         x = valorDeA;
//         y = valorDeB
//     }

//     return console.log(`El nuevo valor de x es: ${x} y el nuevo valor de y es: ${y}`)
// }

// cambiarValor(y, x);


// // Ejercicio 4

// let ladoDeCuadrado = 10;

// function perimetroYsuperficie(lado){
//     if (typeof(lado) != typeof(1) || lado < 1){
//         return console.log("el valor ingresao es incorrecto, debe ser de tipo numero y mayor a 0");
//     }
//     else{
//         let perimetro = lado * 4;
//         let superficie = lado * lado;
    
//         return console.log(`El valor del perimetro es ${perimetro} y el valor de la superficie es ${superficie}`);
//     }
// }

// perimetroYsuperficie(ladoDeCuadrado);

// //Ejercicio 5

// let fahrenheit = "gato";

// function convertidorACelcius(f){
//     if (typeof(f) != typeof(1)){
//         console.log("el valor ingresao es incorrecto");
//     } else { 
//         let celcius = (f - 32) * 5/9
        
//         return console.log(`El valor ${f} pasado a celcius es de : ${celcius}`);
//     }
// }

// convertidorACelcius(fahrenheit);

//Ejercicio 6

let num = 5;

function factorial (num){
    if (typeof(num) != typeof(1)){
        console.log("el valor ingresao es incorrecto");
    }
    else{

    }
}

//factorial(num);

//// Ejercicio 7

// let frase = "Somos o no somos ";

// function palindromos(x){
//     if(typeof(x) === "string"){
//         let result = x.trim().toLowerCase();
//         let arr = result.split("");
//         arr.forEach(e => {
//             if(e == " "){
//                 let index = arr.indexOf(e);
//                 arr.splice(index, 1);
//             }
//         });
    
//         let revert = arr.slice();
//         revert.reverse();
    
//         for (let i = 0; i < arr.length; i++) {
//             if(arr[i] != revert[i]){
//                 console.log("La frase ingresada No es un palindromo")
//                 break;
//             }else if (i==arr.length-1){
//                 console.log("Es palindromo");
//             }
//         }
//      }
//      else{
//         console.log("El tipo de dato ingresado no es un string");
//      }
// }

// palindromos(frase)

// // Ejercicio 8

// let frase2 = "frase de prueba";

// function toLowerYtoApper (frase){
//     if(typeof(x) === "string"){
//         console.log(frase.toLowerCase());
//         console.log(frase.toUpperCase());
//     }else{
//         console.log("El tipo de dato ingresado no es un string"); 
//     }
// }

// toLowerYtoApper(frase2);

// //Ejercicio 9: "Esta mal el enunciado ya que hay varios numeros que pertenecen a dos grupos de calificaciones"

// let nota = 6;

// function calificacion (x){
//     if(typeof(x) === "number"){
//         if(x>0 && x<3){
//             console.log("Muy deficiente");
//         }else if(x>=3 && x<5){
//             console.log("Insuficiente");
//         }else if(x>=5 && x <6 ){
//             console.log("Suficiente");
//         }else if(x>=6 && x<7){
//             console.log("Bien");
//         }else if(x>=7 && x<9){
//             console.log("Notable");
//         }else if(x>=9){
//             console.log("Sobresaliente");
//         }
//     }else{
//         console.log("El tipo de dato ingresado no es un number");
//     }
// }

// calificacion(nota);


// //Ejercicio 10

// let mes = 12;

// function diasDelMes(x){
//     if(x<=0 || x>12 || typeof(x) != "number"){
//         console.log("el valor ingresado es incorrecto");
//     }else{
//         let meses30= [10,3,8,5]

//         if(meses30.includes(x-1)){
//             console.log("Tiene 30 dias");
//         }else if (x==2){
//             console.log("Tiene 28 dias");
//         }else{
//             console.log("tiene 31 dias");
//         }
//     } 
// }

// diasDelMes(mes);

// //Ejercicio 11

// let numero = -1;

// function piramide(x){

//     if(x>=1 && x<=10 && typeof(x) == "number"){
//         let piramide = "" 
//         for (let i = 1; i <= x+1; i++) {
//             console.log(piramide);
//             piramide+=i
//         }
//     }
//     else{
//         console.log("El valor ingresado debe estar entre 1 y 10 y de tipo numero")
//     }
// }

// piramide(numero);


// // Ejercicio 12

// let stock = 100;
// let cajasVacias = 50;

// function cajasCompletas (cantidad, cajas){
//     if(typeof(cantidad) != "number" || typeof(cajas) != "number" || cantidad<=0 || cajas <=0){
//         console.log("Error");
//     }else if(cajas>cantidad){
//         console.log("Solo se necesita 1 caja")
//     }
//     else{
//         let cajasCompletas = Math.floor(cantidad/cajas);
//         let bultosSueltos = cantidad%cajas;
    
//         console.log(`Se pueden completar ${cajasCompletas} y quedarian ${bultosSueltos} bultos sueltos`);
//     }
// }

// cajasCompletas(stock, cajasVacias);

// // Ejercicio 13


// let codigo = "Amarock";

// function descuentoPorCodigo(codigo){
//     if(typeof(codigo) != "string"){
//         console.log("El codigo ingresado no es valido")
//     }else {
//         if(codigo.toLocaleLowerCase().trim() == "fiesta"){
//             console.log("el descuento es del 5%")
//         } else if(codigo.toLocaleLowerCase().trim() == "focus"){
//             console.log("el descuento es del 10%")
//         } else {
//             console.log(`El código ${codigo} no existe`)
//         }
//     }
// }

// descuentoPorCodigo(codigo);
