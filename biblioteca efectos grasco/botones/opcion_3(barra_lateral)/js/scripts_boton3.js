$(document).ready(function() {
    setInterval('contador_boton3()', 1000);
    $("#contador_boton3").each(function() {
        this.style.pointerEvents = 'none';
    });
    $("#boton_siguiente").css({
        'background-color': '#80808047',
        'pointer-events': 'none'
    });
    $(".correcto").click(function() {
        $("#boton_siguiente").css({
            'background-color': 'gray',
            'pointer-events': 'auto'
        });
    });
    $(".incorrecto").click(function() {
        $("#boton_siguiente").css({
            'background-color': '#80808047',
            'pointer-events': 'none'
        });
    });
});

function contador_boton3() {
    if (count == 0) {
        $("#contador_boton3").html('<img class="imagenes_botones3" onclick="parent.cargarSIG()" src="media/imagenes/proximo.png">');
        $("#contador_boton3").each(function() {
            this.style.pointerEvents = 'auto';
        });
    } else {
        $("#contador_boton3").html("<b class='contador_boton3'>" + count-- + "</b>");
    }
}