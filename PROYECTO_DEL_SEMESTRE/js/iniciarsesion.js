

const formulario = document.getElementById("iniciarsesion");

let usuario = document.getElementById("usuario-login");


let contraseña = document.getElementById("password-login");


const validacionExpRegularCorreo =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;  

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(usuario.value==''){
        alert(
            "Campo correo vacio"
        )
        return
    }   

    
    if(!validacionExpRegularCorreo.test(usuario.value)){
        alert(
            "Correo no válido"
        )
        return
    }   


    if(contraseña.value==''){
        alert(
            "Campo contraseña vació"
        )
        return
    }  

    
    if(contraseña.value.length<8){
        alert(
            "Logintud de contraseña no válido"
        )
        return
    }  

    alert("Correcto las credenciales")
    

       
}
)


