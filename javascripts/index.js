window.addEventListener("load", function(){

	$("#bt-menu-mobile").click(function(){
  
		$(this).toggleClass("close-bt-hamburguer");
		$(".violeta").toggleClass("abierto");
		$(".negro").toggleClass("abierto");
		
	});


  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

  $(".links").click(function(){
    $("#bt-menu-mobile").toggleClass("close-bt-hamburguer");
    $(".violeta").toggleClass("abierto");
		$(".negro").toggleClass("abierto");
  });

  $("#plan1").click(function(){
		$(this).toggleClass("seleccionado");
    $("#plan2").removeClass("seleccionado");
    $("#plan3").removeClass("seleccionado");
    $("#plan4").removeClass("seleccionado");
		$("#planSeleccionado").val("onePage");
	});
  $("#plan2").click(function(){
		$(this).toggleClass("seleccionado");
    $("#plan1").removeClass("seleccionado");
    $("#plan3").removeClass("seleccionado");
    $("#plan4").removeClass("seleccionado");
		$("#planSeleccionado").val("fullPage");
	});
  $("#plan3").click(function(){
		$(this).toggleClass("seleccionado");
    $("#plan2").removeClass("seleccionado");
    $("#plan1").removeClass("seleccionado");
    $("#plan4").removeClass("seleccionado");
		$("#planSeleccionado").val("eComnmerce");
	});
  $("#plan4").click(function(){
		$(this).toggleClass("seleccionado");
    $("#plan2").removeClass("seleccionado");
    $("#plan3").removeClass("seleccionado");
    $("#plan1").removeClass("seleccionado");
		$("#planSeleccionado").val("custom");
	});
})