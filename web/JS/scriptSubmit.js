var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;

var enviarDatos=0;

var formulario=document.getElementById("formulario");

formulario.addEventListener("submit", recibirDatos)/*Esta atento cuando alguien hace click */
function recibirDatos(e){
e.preventDefault();
var nombre=document.getElementById("nombre").value;
var cantidad=document.getElementById("cantidad");
var precio=document.getElementById("precio");
var codprod=document.getElementById("codigo");
var mensajeNombre=document.getElementsByClassName("errorNombre")[0];
var xmarkErrorNombre=document.getElementsByClassName("xmarkErrorNombre")[0];

var mensajeCantidad=document.getElementsByClassName("errorCantidad")[0];
var xmarkErrorCelular=document.getElementsByClassName("xmarkErrorCelular")[0];

var mensajePrecio=document.getElementsByClassName("errorPrecio")[0];
var xmarkErrorCorreo=document.getElementsByClassName("xmarkErrorCorreo")[0];

var mensajeCodigo=document.getElementsByClassName("errorCodigo")[0];
var xmarkErrorCorreo=document.getElementsByClassName("xmarkErrorCorreo")[0];


if (!regexNombre.test(nombre)) {
    mensajeNombre.classList.remove("ocultar");
    document.getElementById("nombre").classList.add("errorInput");
    document.getElementById("nombre").classList.remove("correctoInput");
    xmarkErrorNombre.classList.remove("ocultar");
    checkMarkNombre.classList.add("ocultar");
    
}
else{
    mensajeNombre.classList.add("ocultar");
    document.getElementById("nombre").classList.add("correctoInput");
    xmarkErrorNombre.classList.add("ocultar");
    checkMarkNombre.classList.remove("ocultar");
enviarDatos++;
}
if (mensajeCantidad != null){

    mensajeCantidad.classList.remove("ocultar");
    document.getElementById("cantidad").classList.add("errorInput");
    document.getElementById("cantidad").classList.remove("correctoInput");
    xmarkErrorCelular.classList.remove("ocultar");
    checkMarkCelular.classList.add("ocultar");
}
else{
    mensajeCelular.classList.add("ocultar");
    document.getElementById("celular").classList.add("correctoInput");
    xmarkErrorCelular.classList.add("ocultar");
    checkMarkCelular.classList.remove("ocultar");
    enviarDatos++;
}
if(!regexCorreo.test(correo)){
    mensajeCorreo.classList.remove("ocultar");
    document.getElementById("correo").classList.add("errorInput");
    document.getElementById("correo").classList.remove("correctoInput");
    xmarkErrorCorreo.classList.remove("ocultar");
    checkMarkCorreo.classList.add("ocultar");
   
}
else{
    mensajeCorreo.classList.add("ocultar");
    document.getElementById("correo").classList.add("correctoInput");
    xmarkErrorCorreo.classList.add("ocultar");
    checkMarkCorreo.classList.remove("ocultar");
    enviarDatos++;
}
if (enviarDatos==3)
formulario.submit()

else{
enviarDatos=0;
}
}
