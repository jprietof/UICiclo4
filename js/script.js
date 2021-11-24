function limpiarErrores(){
    var error = document.getElementsByTagName('span');
    for(var i=0; i<error.length; i++){
        error[i].innerText="";
    }
}
var correo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var patronNumeros = /[0-9]/;

/*---------------------------------------
            Login
----------------------------------------*/
function validarLogin(form){
    limpiarErrores();
    // validar campios vacios
    if(form.usuario.value.trim().length==0){
        document.getElementById('errorUser').innerText='* Campo obligatorio';
        form.usuario.focus();
        return false;
    }else if(!correo.test(form.usuario.value)){
        document.getElementById('errorUser').innerText="* Email no valido";
        formulario.email.focus;
        return false;
    }
    if(form.contrasena.value.trim().length == 0){
        document.getElementById('errorPass').innerText='* Campo obligatorio';
        formulario.contrasena.focus();
        return false;
    }
}
