//METODO DE ARRAY 

// push() (agregar elemento)
//ARRAY NUMERICO
/*let arr = [1, 2, 3, 4];

console.log(arr);
arr.push(5);
console.log(arr);

//ARRAY DE STRINGS
let vocales = ['a', 'e', 'i', 'o'];

console.log(vocales);
vocales.push('u');
console.log(vocales);

//ARRAY CON DIFERENTES TIPOS DE DATOS
let mezcla = ['erc', 123, 23.63, true, 'a', 'HOLA'];

console.log(mezcla);
mezcla.push(false, 2, 12.45);
console.log(mezcla);
*/

// pop()

/*let arr = [1, 2, 3, 4, 5];

console.log(arr);
let eliminado = arr.pop();
console.log(arr);

console.log(`Elemento eliminado -> ${eliminado}`);
*/

// unshift()

/*let arr = ['HOLA', 1, 2, 3, 4, 5];

console.log(arr);
arr.unshift();
console.log(arr);

let vocales = [12.54, 'a', 'e', 'i', 'o', 'u'];

console.log(vocales);
vocales.shift();
console.log(vocales);
*/

// slice

/*let nums = [1, 2, 3, 4, 5];

console.log(nums);
let numsPartido = nums.slice(0, 3);
console.log(nums);
console.log(numsPartido)
*/

// splice
//ELIMINAR
/*let nums = [1, 2, 3, 4, 5];

console.log(nums);
nums.splice(1, 3);
console.log(nums);*/

// AGREGAR 
/*let nums = [1, 5];

console.log(nums);
nums.splice(1, 0, 2, 3, 4);
console.log(nums);
*/

//ELIMINAR Y AGREGAR 
/*let nums = [1, 'HOLA', false, 5];

console.log(nums);
nums.splice(1, 2);
console.log(nums)*/;

//COMPLETAR EL ARRAY DE VOCALES

/*let vocales = ['a', 'e', true, 12.45, 'u']

console.log(vocales);
vocales.splice(2, 2, 'i', 'o');
console.log(vocales);*/

// concat()

/*let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

console.log(`Array 1 -> ${arr1}`);
console.log(`Array 2 -> ${arr2}`);

let arr3 = arr1.concat(arr2);

console.log(`Concatenacion de los arrays -> ${arr3}`);*/









// Array para los nombres de los 
/*let cars = ["bmw", "saab", "ford", "fiat", "audi"];
const btn_push = 

//obtenemos los elementos html

//funcion para cargaar las paginas
function cargarLogos() {
    let text = "";

    for (let car of cars) {
        text += `<img src="assets/img/${car}.png" alt=${car} logo" width"100"` 
    }
    document.getElementById("demo").innerHTML = text;
}

//FUNCIONES PARA LOS BOTONES 
function funcionPush(e) {
    cars 
}

cargarLogos();*/


//METODO DE ARRAYS PT. 2

//indexOf()
/*let nums = [23, 56, 98, 23, 34, 76];

console.log(nums);
console.log(nums.indexOf(23,2));*/

//lastIndexOf()

/*let nums = [23, 56, 98, 23, 34, 76];

console.log(nums);
console.log(nums.lastIndexOf(23, 2));
*/

// includes()
/*let nums = [23, 56, 98, 23, 34, 76];

console.log(nums.includes(56, 2))*/

// .find()
/*let nums = [23, 56, 98, 23, 34, 76];

console.log(nums.findIndex(num => num > 70))*/


//filter()
/*let nums = [23, 56, 98, 23, 34, 76];

console.log(nums.filter(num => num > 40))*/


//UN NUEVO ARRAY CON STRINGS LAS PALABRAS DE MAS DE 4 CARACTERES
/*let palabras = ["Hola", "Buen día", "A", "Sol", "Comida", "Fruta"];

console.log(palabras);
console.log(palabras.filter(p => p.length > 4));*/

/*let num = [33, 46, 13, 56, 45, 78, 95, 2, 3, 8];

console.log(num.filter(num => num % 2 != 0))*/






//METODO DE ARRAYS

/*let nums = [43, 76, 24, 98, 78, 18]

let numsFiltrado = nums.filter(n => n > 50);

console.log(nums);
console.log(numsFiltrado);*/

//map()
/*let nums = [1, 2, 3, 4];

let numsPorDos = nums.map(n => n*2);
let numsPorDiez = nums.map(n => n*10);

console.log(nums);
console.log(numsPorDos);
console.log(numsPorDiez);

// NO SOLO FUNCIONA CON NUMEROS 

let palabras = ['hola', 'hambre', 'queso', 'fresa'];

let mayus = palabras.map(p => p.toUpperCase());

console.log(palabras);
console.log(mayus);

// OTRA APLICACION
function obtenerVocales(str) {
    for (let c of str) {
        switch (c) {
            case 'a': case 'e': case 'i': case 'o': case 'u': nuevaPalabra += c;
            break;
        }
    }
    return nuevaPalabra;

}

let soloVocales = palabras.map(p => obtenerVocales(p));

console.log(soloVocales);*/

// reduce()
/*let numbers = [1, 2, 3, 4, 5];

// let numbersReduce = numbers.reduce(function(a, b) {return=> a + b});
let numbersReduce = numbers.reduce((a, b) => a + b);

console.log(numbersReduce);*/

// sort()
/*let nums = [1, 20, 100, 10, 2, 200, 20];

console.log(nums);
nums.sort();
console.log(nums);

let numeros = [82, 6234, 9, 765, 50980];

console.log(numeros);
// ORDENAMIENTO POR UNICODE
numeros.sort();
console.log('ORDENAMIENTO POR UNICODE');
console.log(numeros);

//ORDENAMIENTO NUMERICO ESTRICTO
numeros.sort((a, b) => a - b);
console.log('ORDENAMIENTO NUMERICO ESTRICTO');
console.log(numeros);*/

// reverse()
/*let words = ['a', 'e', 'i', 'o', 'u']

console.log(words);
console.log(words.reverse());*/ 

// split
/*let palabra = "hola";
let arr = palabra.split("");
console.log(arr);

palabra = "hola como estas";
arr = palabra.split("");
console.log(arr);

palabra = "hola como estas";
arr = palabra.split(" ");
console.log(arr);

palabra = "hola,como,estas";
arr = palabra.split(",");
console.log(arr);*/

// join()
/*let arr = ['h', 'o', 'l', 'a'];
let palabra = arr.join();
console.log(palabra);

arr = ['h', 'o', 'l', 'a'];
palabra = arr.join(',');
console.log(palabra);

arr = ['h', 'o', 'l', 'a'];
palabra = arr.join(' ');
console.log(palabra);

arr = ['h', 'o', 'l', 'a'];       
palabra = arr.join('');
console.log(palabra);

arr = ['h', 'o', 'l', 'a'];
palabra = arr.join('*');
console.log(palabra);*/





// SEASON 49 



/*
document.getElementById('btn-esconder').addEventListener('click', function () ) {
    document.getElementById(txt-esconder). hidden = true;
}*/

//Usando JQuery

/*$(document).ready(function) {
}*/

// Usando JQuery 
//$(selector).accion()
/*$(document).ready(function() {
    //hacemos la funcion que queramos 
    $('#btn-esconder').click(function() {
        $('#txt-esconder').hide();
    });
})*/

// MOSTRAR Y OCULTAR (Show)
/*$(document).ready(function() {
    $('#btn-esconder').click(function() {
        $('#txt-esconder').hide();
    $('#btn-esconder').click(function() {
        $('#txt-esconder').show();
    })
    
    });
})*/




// url: https://picsum.photos

/*function generateUr1() {
    // GENERAMOS URL ALEATORIO 
    let id = Math.round(Math.random() * 500);
    return `https://picsum.photos/id/${id}/info`
}

function renderPic(data) {
    let div = $(<div></div>);
    div.addClass('card');
    
    let img = $(<img></img>);
    img.attr('src', data.download_url);
    img.addClass('card-img');
    div.append(img)

    let author = $('<h3></h3>');
}*/