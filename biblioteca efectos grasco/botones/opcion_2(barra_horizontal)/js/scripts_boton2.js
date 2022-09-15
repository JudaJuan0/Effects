$(document).ready(function() {
    setInterval('contador_boton2()', 1000);
    $("#contador_boton2").each(function() {
        this.style.pointerEvents = 'none';
    });
    $("#boton_siguiente").css({
        'opacity': '0.5',
        'pointer-events': 'none'
    });
    $(".correcto").click(function() {
        $("#boton_siguiente").css({
            'opacity': '1',
            'pointer-events': 'auto'
        });
    });
    $(".incorrecto").click(function() {
        $("#boton_siguiente").css({
            'opacity': '0.5',
            'pointer-events': 'none'
        });
    });
});

function contador_boton2() {
    if (count == 0) {
        $("#contador_boton2").html('<img onclick="parent.cargarSIG()" src="media/imagenes/proximo.png" width="26px"/>');
        $("#contador_boton2").each(function() {
            this.style.pointerEvents = 'auto';
        });
    } else {
        $("#contador_boton2").html("<b class='contador_boton2'>" + count-- + "</b>");
    }
}