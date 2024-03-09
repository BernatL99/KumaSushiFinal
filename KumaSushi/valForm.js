function validacion(){
    var num = document.getElementById(NumTelf);
    var mail = document.getElementById(correo);
    if(mail != /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/){
        alert("¡¡¡El correo no es correcto!!!");
    }
    
}