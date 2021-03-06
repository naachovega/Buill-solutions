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

      const btn = document.getElementById('button');
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const message = document.getElementById('message');
      const plan1 = document.getElementById('plan1');
      const plan2 = document.getElementById('plan2');
      const plan3 = document.getElementById('plan3');
      const plan4 = document.getElementById('plan4');
      const thanks = document.getElementById('thanks');

        /*EmailJS*/
        document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending';

        const serviceID = 'default_service';
        const templateID = 'template_jav4n2e';



        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {

                btn.value = 'Sent';

                if (btn.value = 'Sent') {
                  $("#thanks").removeClass("oculto")
                  $("#thanks").toggleClass("thankYou") 
                }

                setTimeout(() => {
                    name.value = '';
                    email.value = '';
                    phone.value = '';
                    message.value = '';
                    plan1.classList.remove("seleccionado");
                    plan2.classList.remove("seleccionado");
                    plan3.classList.remove("seleccionado");
                    plan4.classList.remove("seleccionado");
                    btn.value = 'Lets get in contact';
                },3000);
            }, (err) => {
            btn.value = 'Lets get in contact';
            alert(JSON.stringify(err)+ " - PORFAVOR CONTACTARSE POR WPP");
            });
        });
})

$(function () {

  var attr = $("#planSeleccionado").attr('required');
  const plan1 = document.getElementById('plan1');
  const plan2 = document.getElementById('plan2');
  const plan3 = document.getElementById('plan3');
  const plan4 = document.getElementById('plan4');

  $("#options").change(function () {
      if ($(this).val() == "website") {
        if (typeof attr !== 'undefined') {
          $("#planSeleccionado").attr('required',true)
        }
          $("#planes").show();
      } else {
          $("#planSeleccionado").removeAttr('required');
          plan1.classList.remove("seleccionado");
          plan2.classList.remove("seleccionado");
          plan3.classList.remove("seleccionado");
          plan4.classList.remove("seleccionado");
          $("#planes").hide();
      }
  });
});
