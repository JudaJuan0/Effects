$(document).ready(function() {
    setInterval('contador_boton1()', 1000);
    $("#contador_boton1").each(function() {
        this.style.pointerEvents = 'none';
    });
    $("#boton_siguiente").css({
        'background-color': '#f3e7e7',
        'color': '#de0000',
        'pointer-events': 'none',
    });
    $(".correcto").click(function() {
        $("#boton_siguiente").css({
            'background-color': '#de0000',
            'color': '#f3e7e7',
            'pointer-events': 'auto',
        });
    });
    $(".incorrecto").click(function() {
        $("#boton_siguiente").css({
            'background-color': '#f3e7e7',
            'color': '#de0000',
            'pointer-events': 'none',
        });
    });
});

function contador_boton1() {
    if (count == 0) {
        $("#contador_boton1").text("Siguiente >>");
        $("#contador_boton1").each(function() {
            this.style.pointerEvents = 'auto';
        });
    } else {
        $("#contador_boton1").text(count--);
    }
}