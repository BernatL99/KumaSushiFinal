function validacion(){
    var name = document.getElementById("NameForm").value;
    var SecName = document.getElementById("apellidos").value;
    var num = document.getElementById("NumTelf").value;
    var mail = document.getElementById("correo").value;
    
    if(!/\w{3,10}/.test(name)){
        alert("El nombre tiene que tener mínimo 3 carácteres");
        return false;
    }
    if(!/\w{6,20}/.test(SecName)){
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

function ocultarHorarios(){
    var ocuHor = document.getElementById("horario");
    if(ocuHor.style.display == "none"){
        ocuHor.style.display = "flex";
    }
    else{
        ocuHor.style.display = "none";
        
    }
    alert("prueba");
}