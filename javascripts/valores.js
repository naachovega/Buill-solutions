window.addEventListener("load", function(){
    $("#mision").click(function(){
        $(this).toggleClass("mostrar")
        $("#vision").removeClass("mostrar");
        $("#valores").removeClass("mostrar"); 
        $("#misionT").toggleClass("mostrar");
        $("#visionT").removeClass("mostrar");
        $("#valoresT").removeClass("mostrar"); 
    });
    $("#vision").click(function(){
        $(this).toggleClass("mostrar")
        $("#mision").removeClass("mostrar");
        $("#valores").removeClass("mostrar");
        $("#visionT").toggleClass("mostrar");
        $("#misionT").removeClass("mostrar");
        $("#valoresT").removeClass("mostrar");
    });
    $("#valores").click(function(){
        $(this).toggleClass("mostrar");
        $("#mision").removeClass("mostrar");
        $("#vision").removeClass("mostrar");
        $("#valoresT").toggleClass("mostrar");
        $("#misionT").removeClass("mostrar");
        $("#visionT").removeClass("mostrar");
    });
});