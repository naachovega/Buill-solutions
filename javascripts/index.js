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
                },2500);
            }, (err) => {
            btn.value = 'Lets get in contact';
            alert(JSON.stringify(err)+ " - PORFAVOR CONTACTARSE POR WPP");
            });
        });
})


$(document).ready(function() {



  // efecto typing inicio
  // get the element
  const text = document.querySelector('#typingBienvenida');
  
  
  
  // make a words array
  
  const words = [
  
    "Sketching xyz",
  
    "Designing zyx",

    "Coding Solutions",
  ];
  
  // start typing effect
  
  setTyper(text, words);
  
  function setTyper(element, words) {
  
    const LETTER_TYPE_DELAY = 85;
  
    const WORD_STAY_DELAY = 1800;
  
    const DIRECTION_FORWARDS = 0;
  
    const DIRECTION_BACKWARDS = 1;
  
    var direction = DIRECTION_FORWARDS;
  
    var wordIndex = 0;
  
    var letterIndex = 0;
  
    var wordTypeInterval;
  
    startTyping();
  
    function startTyping() {
  
      wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  
    }
  
    function typeLetter() {
  
      const word = words[wordIndex];
  
      if (direction == DIRECTION_FORWARDS) {
  
        letterIndex++;
  
        if (letterIndex == word.length) {
  
          direction = DIRECTION_BACKWARDS;
  
          clearInterval(wordTypeInterval);
  
          setTimeout(startTyping, WORD_STAY_DELAY);
  
        }
  
      } else if (direction == DIRECTION_BACKWARDS) {
  
        letterIndex--;
  
  
  
        if (letterIndex == 0) {
  
          nextWord();
  
        }
  
      }
  
      const textToType = word.substring(0, letterIndex);
  
      element.textContent = textToType;
  
    }
  
    function nextWord() {
  
      letterIndex = 0;
  
      direction = DIRECTION_FORWARDS;
  
      wordIndex++;

      if (wordIndex == words.length) {
  
        wordIndex = 0;
  
      }
    }
  }
}
)



$(document).ready(function() {



  // efecto typing inicio
  // get the element
  const text = document.querySelector('#typingInicio');
  
  
  
  // make a words array
  
  const words = [
  
    "Choose your language",
  
    "Elija su idioma",
  ];
  
  // start typing effect
  
  setTyper(text, words);
  
  function setTyper(element, words) {
  
    const LETTER_TYPE_DELAY = 85;
  
    const WORD_STAY_DELAY = 1800;
  
    const DIRECTION_FORWARDS = 0;
  
    const DIRECTION_BACKWARDS = 1;
  
    var direction = DIRECTION_FORWARDS;
  
    var wordIndex = 0;
  
    var letterIndex = 0;
  
    var wordTypeInterval;
  
    startTyping();
  
    function startTyping() {
  
      wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  
    }
  
    function typeLetter() {
  
      const word = words[wordIndex];
  
      if (direction == DIRECTION_FORWARDS) {
  
        letterIndex++;
  
        if (letterIndex == word.length) {
  
          direction = DIRECTION_BACKWARDS;
  
          clearInterval(wordTypeInterval);
  
          setTimeout(startTyping, WORD_STAY_DELAY);
  
        }
  
      } else if (direction == DIRECTION_BACKWARDS) {
  
        letterIndex--;
  
  
  
        if (letterIndex == 0) {
  
          nextWord();
  
        }
  
      }
  
      const textToType = word.substring(0, letterIndex);
  
      element.textContent = textToType;
  
    }
  
    function nextWord() {
  
      letterIndex = 0;
  
      direction = DIRECTION_FORWARDS;
  
      wordIndex++;

      if (wordIndex == words.length) {
  
        wordIndex = 0;
  
      }
    }
  }
}
)


$(document).ready(function() {



  // efecto typing inicio
  // get the element
  const text = document.querySelector('#typingHi');
  
  
  
  // make a words array
  
  const words = [
  
    "Welcome!",
  
    "Hola!",
  ];
  
  // start typing effect
  
  setTyper(text, words);
  
  function setTyper(element, words) {
  
    const LETTER_TYPE_DELAY = 80;
  
    const WORD_STAY_DELAY = 3950;
  
    const DIRECTION_FORWARDS = 0;
  
    const DIRECTION_BACKWARDS = 1;
  
    var direction = DIRECTION_FORWARDS;
  
    var wordIndex = 0;
  
    var letterIndex = 0;
  
    var wordTypeInterval;
  
    startTyping();
  
    function startTyping() {
  
      wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  
    }
  
    function typeLetter() {
  
      const word = words[wordIndex];
  
      if (direction == DIRECTION_FORWARDS) {
  
        letterIndex++;
  
        if (letterIndex == word.length) {
  
          direction = DIRECTION_BACKWARDS;
  
          clearInterval(wordTypeInterval);
  
          setTimeout(startTyping, WORD_STAY_DELAY);
  
        }
  
      } else if (direction == DIRECTION_BACKWARDS) {
  
        letterIndex--;
  
  
  
        if (letterIndex == 0) {
  
          nextWord();
  
        }
  
      }
  
      const textToType = word.substring(0, letterIndex);
  
      element.textContent = textToType;
  
    }
  
    function nextWord() {
  
      letterIndex = 0;
  
      direction = DIRECTION_FORWARDS;
  
      wordIndex++;

      if (wordIndex == words.length) {
  
        wordIndex = 0;
  
      }
    }
  }
}
)
