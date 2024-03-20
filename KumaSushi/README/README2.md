# KumaSushi con JS y Formularios

## Trabajo Repartido
    * Bernat Lopez: Se ha encargado de la página de Reservas, se ha añadido un formulario, ocultar y mostrar partes de tecxto y una sección de comentarios, rodo ello se explica en el apartado de reservas.

    * Ana Maria Saavedra: Se ha encargado de la modificación  del CSS, creación del la galería interactiva de la pagina de  INICIO, modificación del header para que sea interactivo y reestructuración de la página de MENU 

## Cambios generales:
    1. Se ha cambiado el CSS y se ha dividido en en diferentes páginas de CSS para cada una de las páginas.

## Página reservas:

    1. Se ha añadido un formulario con diferentes validaciones para poner los datos y simular que se realizan reservas. Este formulario está soporteado por un JS que realiza las validaciones en los campos.

    2. Se ha modificado el apartado de Horarios, Contacto y Dirección para que se puedan esconder los elementos, así el que le moleste está información podrá cerrar el las cajas para que no le moleste. Hay un JS para cada div para poder ocultar los elementos.

    3. Se ha añadido un alert para que cuando inicies la página ya te pida poner un comentario, este comentario se puede cerrar al salir, también hay un botón para que se pueda reabrir si se ha cerrado anteriormente la pestaña. Al poner los comentarios, se irán añadiendo en la parte inferior del Body, justo debajo del botón de comentarios y por encima del footer.

    4. Se han creado varias funciones en JS para la interactividad de la página, aquí las explico todas:
        1.  Creamos la función validacion() para validar el formulario del JS, recogemos los valores introducidos por el usuario y los comparamos usando REGEX, si al final todo es true se enviría la petición, si es false, salta un ALERT con diferente mensaje si ha fallado en alguno de los campos.

        2.  Se han creado una serie de funciones: ocultarHorarios(), ocultarCorreo(), ocultarDireccion() para poder ocultar o abrir los elementos descriptivos de la página.

        3.  Por último, hemos creado un script para que cuando abras la página o le cliques al boton, puedas poner una reseña o comentario, es un script que se llama al clickar el button genera un evento para que se salga una página emergente para poder poner el comentario, al poner el comentario se añade justo encima del footer el comentario. Este último hemos usado vídeos de Youtube y foros para poder llegar a crearlo.

##