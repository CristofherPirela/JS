
function validarEdad() {
    while (true) {
        let edadUsuario = parseInt(prompt("Ingrese su edad"));

        if (edadUsuario === 18) {
            alert("Bienvenido, puede pasar.");
            break;
        } else if (edadUsuario < 18) {
            alert("Lo sentimos, debes ser mayor de edad.");
        } else {
            alert("Lo sentimos, solo permitimos el ingreso a mayores de 18 años.");
        }
    }
}


const mensajeBienvenida = "Bienvenido, por favor rellene los siguientes campos para poder registrarse.";
const mensajeAgradecimiento = "Muchas Gracias";


alert(mensajeBienvenida);

let nombre = prompt("Ingrese su nombre");
alert(mensajeAgradecimiento);

let apellido = prompt("Ingrese su apellido");
alert(mensajeAgradecimiento);

validarEdad(); 
