//Seccion 2 Comentarios, Variables y tipos de datos

// En los siguientes ejercicios se espera aprender

/**
 * en los ejercicios se espera aprender y afianzar
 * temas basicos de la programacion en JS
*/

let miNumero = 10;
console.log(miNumero);

let miBooleano = true;
console.log(typeof miBooleano);

let miCadena = "Hola mi nombre es Andres";
console.log(miCadena.length);

let miArray = ["Hola",50,[70,80,90]];
console.log(miArray);

let miObjeto = {Nombre:"Andres",Edad:25,Residencia:"Gratamira"};
console.log(miObjeto);

//Seccion 3 Interaccion con el usuario

let nombreUsuario = prompt("Ingrese su nombre de usuario");
alert("Hola "+nombreUsuario);

let respuesta = confirm("¿A usted le gusta JS?")
if(respuesta){
    console.log("Estas en el lugar correcto");
} else {
console.log("Estas en el lugar equivocado");
}

//Seccion 4

console.warn("Esto es solo una practica")

console.error("Lo sentimos esa operacion no se puede realizar")

let numbers = [1, 2, 3, 4, 5];

console.table(numbers);
