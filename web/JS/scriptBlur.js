var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var enviarDatos=0;


    
var nombre=document.getElementById("nombre");
var cantidad=document.getElementById("cantidad");
var precio=document.getElementById("precio");
var codprod=document.getElementById("codigo");
document.getElementById("Enviar").disabled=true;

var mensajeNombre=document.getElementsByClassName("errorNombre")[0];
var xmarkErrorNombre=document.getElementsByClassName("xmarkErrorNombre")[0];

var mensajeCantidad=document.getElementsByClassName("errorCantidad")[0];
var xmarkErrorCelular=document.getElementsByClassName("xmarkErrorCelular")[0];

var mensajePrecio=document.getElementsByClassName("errorPrecio")[0];
var xmarkErrorCorreo=document.getElementsByClassName("xmarkErrorCorreo")[0];

var mensajeCodigo=document.getElementsByClassName("errorCodigo")[0];
var xmarkErrorCorreo=document.getElementsByClassName("xmarkErrorCorreo")[0];

var checkMarkNombre=document.getElementsByClassName("checkMarkNombre")[0];
var checkMarkCelular=document.getElementsByClassName("checkMarkCelular")[0];
var checkMarkCorreo=document.getElementsByClassName("checkMarkCorreo")[0];
nombre.addEventListener("blur",()=>{

    if(!regexNombre.test(nombre.value)){
        mensajeNombre.classList.remove("ocultar");
        document.getElementById("nombre").classList.add("errorInput");
        document.getElementById("nombre").classList.remove("correctoInput");
        xmarkErrorNombre.classList.remove("ocultar");
        checkMarkNombre.classList.add("ocultar");
        if(enviarDatos>0){
            enviarDatos--;
        }
       
    Enviar();
    }
    else{
        mensajeNombre.classList.add("ocultar");
    document.getElementById("nombre").classList.add("correctoInput");
    xmarkErrorNombre.classList.add("ocultar");
    checkMarkNombre.classList.remove("ocultar");
enviarDatos++;
Enviar();
    }
   
})

cantidad.addEventListener("blur",()=>{
    

        mensajeCantidad.classList.remove("ocultar");
        document.getElementById("cantidad").classList.add("errorInput");
        document.getElementById("cantidad").classList.remove("correctoInput");
        xmarkErrorCelular.classList.remove("ocultar");
        checkMarkCelular.classList.add("ocultar");
    if(enviarDatos>0){
        
    
    

    
    }else{
        mensajeCantidad.classList.add("ocultar");
        document.getElementById("cantidad").classList.add("correctoInput");
        xmarkErrorCelular.classList.add("ocultar");
        checkMarkCelular.classList.remove("ocultar");
        enviarDatos++;
        Enviar();
    }

})

precio.addEventListener("blur",()=>{

   
        mensajePrecio.classList.remove("ocultar");
        document.getElementById("precio").classList.add("errorInput");
        document.getElementById("precio").classList.remove("correctoInput");
        xmarkErrorCorreo.classList.remove("ocultar");
        checkMarkCorreo.classList.add("ocultar");
        if(enviarDatos>0){
           
    }
    else{
        mensajePrecio.classList.add("ocultar");
        document.getElementById("precio").classList.add("correctoInput");
        xmarkErrorCorreo.classList.add("ocultar");
        checkMarkCorreo.classList.remove("ocultar");
        enviarDatos++;
        Enviar();
    }
    
})

codprod.addEventListener("blur",()=>{

   
    mensajeCodigo.classList.remove("ocultar");
    document.getElementById("codigo").classList.add("errorInput");
    document.getElementById("codigo").classList.remove("correctoInput");
    xmarkErrorCorreo.classList.remove("ocultar");
    checkMarkCorreo.classList.add("ocultar");
    if(enviarDatos>0){
        
}
else{
    mensajeCodigo.classList.add("ocultar");
    document.getElementById("codigo").classList.add("correctoInput");
    xmarkErrorCorreo.classList.add("ocultar");
    checkMarkCorreo.classList.remove("ocultar");
    enviarDatos++;
    Enviar();
}

})
function Enviar(){
    if (enviarDatos>0){
        document.getElementById("Enviar").disabled=false;
    return true;
    }else{
        document.getElementById("Enviar").disabled=true;
        return false;
    }
}


   
   






