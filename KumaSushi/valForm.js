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
}

function ocultarCorreo(){
    var ocuHor = document.getElementById("mails");
    if(ocuHor.style.display == "none"){
        ocuHor.style.display = "flex";
    }
    else{
        ocuHor.style.display = "none";
        
    }
}

function ocultarDireccion(){
    var ocuHor = document.getElementById("direccion");
    if(ocuHor.style.display == "none"){
        ocuHor.style.display = "flex";
    }
    else{
        ocuHor.style.display = "none";
        
    }
}

//Poner reseña

document.getElementById('openCommentBox').addEventListener('click', function() {
    document.getElementById('commentBox').style.display = 'block';
});

document.getElementById('closeCommentBox').addEventListener('click', function() {
    document.getElementById('commentBox').style.display = 'none';
});

document.getElementById('submitComment').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;
    var rating = document.querySelector('.star.active').getAttribute('data-value');

    var commentElement = document.createElement('div');
    commentElement.innerHTML = '<strong>' + name + '</strong>: ' + comment + ' - ' + rating + ' estrellas';
    document.getElementById('comments').appendChild(commentElement);

    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    document.querySelectorAll('.star').forEach(function(star) {
        star.classList.remove('active');
    });

    document.getElementById('commentBox').style.display = 'none';
});

document.querySelectorAll('.star').forEach(function(star) {
    star.addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        document.querySelectorAll('.star').forEach(function(s) {
            s.classList.remove('active');
        });
        for (var i = 1; i <= value; i++) {
            document.querySelector('.star[data-value="' + i + '"]').classList.add('active');
        }
    });
});
