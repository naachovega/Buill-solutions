window.addEventListener("load", function(){

	$("#bt-menu-mobile").click(function(){
  
		$(this).toggleClass("close-bt-hamburguer");
		$(".violeta").toggleClass("abierto");
		$(".negro").toggleClass("abierto");
		
	  });

})