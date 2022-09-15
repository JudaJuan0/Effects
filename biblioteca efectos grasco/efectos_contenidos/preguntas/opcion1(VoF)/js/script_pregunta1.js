$(document).ready(function() {
    $("#correcto").click(function() {
        $(".retroalimentacion_principal").slideDown("slow")
        $(".retroalimentacion_incorrecto").hide();
        $(".retroalimentacion_correcto").show();
    });
    $("#incorrecto").click(function() {
        $(".retroalimentacion_principal").slideDown("slow")
        $(".retroalimentacion_correcto").hide();
        $(".retroalimentacion_incorrecto").show();
    });
    $(".boton_retroalimentacion").click(function() {
        $(".retroalimentacion_principal").slideUp("slow")
    });
});