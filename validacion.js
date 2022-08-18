//Haz tú validación en javascript acá
var formularioNombre = document.forms["form"].elements["nombre"];
var formularioEmail = document.forms["form"].elements["email"];
var formularioAsunto = document.forms["form"].elements["asunto"];;
var formularioMensaje = document.forms["form"].elements["mensagem"];
const formularioBoton = document.forms["form"].elements["boton"];

document.addEventListener("DOMContentLoaded", function() {
    this.documentElement.querySelector("form").addEventListener('submit', validarFormulario); 
  });
function validarFormulario(){
    estado = "no";
    if (formularioNombre.value.length > 50){
        alert("Ha escrito un nombre muy largo. El máximo permitido es de 50 caracteres.");
        formularioNombre.focus();
        estado = "ok";
    }
    if (formularioAsunto.value.length > 50 ){
        alert("Ha escrito un asunto muy largo. El máximo permitido es de 50 caracteres.");
        formularioAsunto.focus();
        estado = "ok";
    }
    if (formularioMensaje.value.length > 300 ){
        alert("Ha escrito un mensaje muy largo. El máximo permitido es de 300 caracteres.");
        formularioAsunto.focus();
        estado = "ok";
    }

}
