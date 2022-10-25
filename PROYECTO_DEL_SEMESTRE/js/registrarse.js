

const formularioregistro = document.getElementById("registrarse")

let nombres= document.getElementById("nombres-reg")
let correo= document.getElementById("correo-reg")
let celular= document.getElementById("celular-reg")
let password = document.getElementById("password-reg")

const validacionExpRegularCorreo =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;  

const mostrar = document.getElementById("mostrar")

formularioregistro.addEventListener('submit', (e)=>{

    e.preventDefault();

    
    if(nombres.value==''){
        alert(
            "Campo Nombres Completos vacio"
        )
        return;
    }   

    if(nombres.value.length<10){
        alert(
            "Logintud de Nombres Completos  no válido"
        )
        return;
    }  


    if(correo.value==''){
        alert(
            "Campo correo vacio"
        )
        return;
    }   

     
    if(!validacionExpRegularCorreo.test(correo.value)){
        alert(
            "Correo no válido"
        )
        return;
    }   

    if(celular.value==''){
        alert(
            "Campo celular  vacio"
        )
        return;
    }   

   

    if(celular.value.length<9){
        alert(
            "Logintud de celular no válido"
        )
        return;
    }  


    if(password.value==''){
        alert(
            "Campo password vacio"
        )
        return;
    }   

    if(password.value.length<8){
        alert(
            "Logintud de contraseña no válido"
        )
        return;
    }  


    alert("Te has suscrito correctamente, Bienvenido a nuestro equipo");

    nombres.value=""; 
    correo.value="";
    celular.value="";
    password.value="";
})