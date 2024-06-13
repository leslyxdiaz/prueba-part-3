
$(document).ready(function() {
    $('#startAnimation').click(function() {
        startAnimations();
    });
    function startAnimations() {
        $('#ojo1').css('animation', 'move 2s infinite alternate');
        $('#ojo2').css('animation', 'move 2s infinite alternate');
        $('#brazo1').css('animation', 'shake 1s infinite');
        $('#brazo2').css('animation', 'shake 1s infinite');
        $('#cuerpo').css('animation', 'bounce 2s infinite');
        $('#boca').css('animation', 'bounce 2s infinite');
        $('#cola').css('animation', 'shake 1s infinite');
    }
});


//  STARANIAMTION: codigo para iniciar animaciones, 
//  se llama cuando se have click en el boton
// dentro de esta funcion se utiliza selecciones de jqquery $('#ojo2') para seleccionar diferentes elementos de la pagina por su ID
// poor ejemplo $('#brazo2').css('animation', 'shake 1s infinite'); tiene una animacion que se repite infinitamente 
