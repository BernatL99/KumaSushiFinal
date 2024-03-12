function validacion(){
    var name = document.getElementById("NameForm");
    var SecName = document.getElementById("apellidos");
    var num = document.getElementById("NumTelf");
    var mail = document.getElementById("correo");
    
    if(!/^[A-Za-z]+/.test(name)){
        alert("El nombre tiene que tener mínimo 3 carácteres");
        return false;
    }
    if(!/^[A-Za-z ]+/.test(SecName)){
        alert("El campo de apellido tiene que tener mínimo 3 carácteres");
        return false;
    }
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/.test(mail)){
        alert("La dirección de correo eléctronico no és válida");
        return false;
    }
    if(!/^[0-9]{9}/.test(num)){
        alert("El numero de teléfono no es válida")
        return false;
    }
    return true;
    
}