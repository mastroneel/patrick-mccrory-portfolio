// fixes issue with mobile safari
if($(window).width() <= 450){
  $('.header').height(window.innerHeight + 'px');
  $('.harp-circle-background').height(window.innerHeight + 'px');
}


$( document ).ready(function() {

  // scroll animation for mobile
  $('.right-button').click(function(){
    $('.project-list-mobile').animate({scrollLeft:'+=200'}, 500);
  });

  // play sounds
  let sound1 = document.getElementById('sound1');
  let sound2 = document.getElementById('sound2');
  let sound3 = document.getElementById('sound3');
  let sound4 = document.getElementById('sound4');
  let sound5 = document.getElementById('sound5');
  let play1 = document.getElementById('play1');
  let play2 = document.getElementById('play2');
  let play3 = document.getElementById('play3');
  let play4 = document.getElementById('play4');
  let play5 = document.getElementById('play5');

  play1.onclick =
    function() {
    sound1.play();
      return false;
  };

  play2.onclick =
    function() {
    sound2.play();
      return false;
  };

  play3.onclick =
    function() {
    sound3.play();
      return false;
  };

  play4.onclick =
    function() {
    sound4.play();
      return false;
  };

  play5.onclick =
    function() {
    sound5.play();
      return false;
  };


  // reduce opacity of other strings on hover
  $(".string-container-1").hover(function() {
      $(".string-2").toggleClass('dark');
      $(".string-3").toggleClass('dark');
      $(".string-4").toggleClass('dark');
      $(".string-5").toggleClass('dark');
  });

  $(".string-container-2").hover(function() {
      $(".string-1").toggleClass('dark');
      $(".string-3").toggleClass('dark');
      $(".string-4").toggleClass('dark');
      $(".string-5").toggleClass('dark');
  });

  $(".string-container-3").hover(function() {
      $(".string-1").toggleClass('dark');
      $(".string-2").toggleClass('dark');
      $(".string-4").toggleClass('dark');
      $(".string-5").toggleClass('dark');
  });

  $(".string-container-4").hover(function() {
      $(".string-1").toggleClass('dark');
      $(".string-2").toggleClass('dark');
      $(".string-3").toggleClass('dark');
      $(".string-5").toggleClass('dark');
  });

  $(".string-container-5").hover(function() {
      $(".string-1").toggleClass('dark');
      $(".string-2").toggleClass('dark');
      $(".string-3").toggleClass('dark');
      $(".string-4").toggleClass('dark');
  });



  // vibration animation
  $(".string-container-1").click(function(){
    $('.string-1').addClass('vibrate');
    setTimeout(function(){
      $('.string-1').removeClass('vibrate');
    }, 300);
  });

  $(".string-container-2").click(function(){
    $('.string-2').addClass('vibrate');
    setTimeout(function(){
      $('.string-2').removeClass('vibrate');
    }, 300);
  });

  $(".string-container-3").click(function(){
    $('.string-3').addClass('vibrate');
    setTimeout(function(){
      $('.string-3').removeClass('vibrate');
    }, 300);
  });

  $(".string-container-4").click(function(){
    $('.string-4').addClass('vibrate');
    setTimeout(function(){
      $('.string-4').removeClass('vibrate');
    }, 300);
  });

  $(".string-container-5").click(function(){
    $('.string-5').addClass('vibrate');
    setTimeout(function(){
      $('.string-5').removeClass('vibrate');
    }, 300);
  });


  // blank "your chords" array
  var chordArray = [];

  // arrays to match for different projects
  var aboutArray = [3,2,2,5,5];
  var casperArray = [5,1,1,5,4];
  var mirariArray = [5,5,1,2,3];
  var nikeArray = [4,1,1,4,5];
  var solaceArray = [3,1,4,5,5];
  var idlemindArray = [5,1,1,4,4];
  var calwaterArray = [4,4,5,1,1];
  var threeDArray = [3,2,1,5,4];
  var artworkArray = [2,4,3,5,1];
  var sketchesArray = [1,2,4,4,3];

  // don't display any projects initially
  $('.project').hide();


  // store reset timeouts in variables
  var timeout1, timeout2, timeout3, timeout4;

  // click 1 functionality
  $('.click-1').live('click', function(event) {
    $('.string-container').removeClass("click-1");
    $('.string-container').addClass("click-2");
    var target = $( event.target );
    if ( target.is( ".string-container-1" ) || target.is( ".string-1" ) ) {
      $('.chord-1').css('background-color', '#591f49');
      chordArray.push(1);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-2" ) || target.is( ".string-2" ) ) {
      $('.chord-1').css('background-color', '#902745');
      chordArray.push(2);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-3" ) || target.is( ".string-3" ) ) {
      $('.chord-1').css('background-color', '#c63643');
      chordArray.push(3);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-4" ) || target.is( ".string-4" ) ) {
      $('.chord-1').css('background-color', '#eb5a3a');
      chordArray.push(4);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-5" ) || target.is( ".string-5" ) ) {
      $('.chord-1').css('background-color', '#ecb730');
      chordArray.push(5);
      console.log(chordArray);
    }
    timeout1 = setTimeout(function() {
      chordArray = [];
      console.log(chordArray);
      $('.chord').css('background-color', '#242424');
      $('.string-container').addClass("click-1");
      $('.string-container').removeClass("click-2");
      $('.string-container').removeClass("click-3");
      $('.string-container').removeClass("click-4");
      $('.string-container').removeClass("click-5");
    }, 4000);
  });

  // click 2 functionality
  $('.click-2').live('click', function(event) {
    clearTimeout(timeout1);
    $('.string-container').removeClass("click-2");
    $('.string-container').addClass("click-3");
    var target = $( event.target );
    if ( target.is( ".string-container-1" ) || target.is( ".string-1" ) ) {
      $('.chord-2').css('background-color', '#591f49');
      chordArray.push(1);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-2" ) || target.is( ".string-2" ) ) {
      $('.chord-2').css('background-color', '#902745');
      chordArray.push(2);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-3" ) || target.is( ".string-3" ) ) {
      $('.chord-2').css('background-color', '#c63643');
      chordArray.push(3);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-4" ) || target.is( ".string-4" ) ) {
      $('.chord-2').css('background-color', '#eb5a3a');
      chordArray.push(4);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-5" ) || target.is( ".string-5" ) ) {
      $('.chord-2').css('background-color', '#ecb730');
      chordArray.push(5);
      console.log(chordArray);
    }
    timeout2 = setTimeout(function() {
      chordArray = [];
      console.log(chordArray);
      $('.chord').css('background-color', '#242424');
      $('.string-container').addClass("click-1");
      $('.string-container').removeClass("click-2");
      $('.string-container').removeClass("click-3");
      $('.string-container').removeClass("click-4");
      $('.string-container').removeClass("click-5");
    }, 4000);
  });

  // click 3 functionality
  $('.click-3').live('click', function(event) {
    clearTimeout(timeout2);
    $('.string-container').removeClass("click-3");
    $('.string-container').addClass("click-4");
    var target = $( event.target );
    if ( target.is( ".string-container-1" ) || target.is( ".string-1" ) ) {
      $('.chord-3').css('background-color', '#591f49');
      chordArray.push(1);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-2" ) || target.is( ".string-2" ) ) {
      $('.chord-3').css('background-color', '#902745');
      chordArray.push(2);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-3" ) || target.is( ".string-3" ) ) {
      $('.chord-3').css('background-color', '#c63643');
      chordArray.push(3);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-4" ) || target.is( ".string-4" ) ) {
      $('.chord-3').css('background-color', '#eb5a3a');
      chordArray.push(4);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-5" ) || target.is( ".string-5" ) ) {
      $('.chord-3').css('background-color', '#ecb730');
      chordArray.push(5);
      console.log(chordArray);
    }
    timeout3 = setTimeout(function() {
      chordArray = [];
      console.log(chordArray);
      $('.chord').css('background-color', '#242424');
      $('.string-container').addClass("click-1");
      $('.string-container').removeClass("click-2");
      $('.string-container').removeClass("click-3");
      $('.string-container').removeClass("click-4");
      $('.string-container').removeClass("click-5");
    }, 4000);
  });

  // click 4 functionality
  $('.click-4').live('click', function(event) {
    clearTimeout(timeout3);
    $('.string-container').removeClass("click-4");
    $('.string-container').addClass("click-5");
    var target = $( event.target );
    if ( target.is( ".string-container-1" ) || target.is( ".string-1" ) ) {
      $('.chord-4').css('background-color', '#591f49');
      chordArray.push(1);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-2" ) || target.is( ".string-2" ) ) {
      $('.chord-4').css('background-color', '#902745');
      chordArray.push(2);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-3" ) || target.is( ".string-3" ) ) {
      $('.chord-4').css('background-color', '#c63643');
      chordArray.push(3);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-4" ) || target.is( ".string-4" ) ) {
      $('.chord-4').css('background-color', '#eb5a3a');
      chordArray.push(4);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-5" ) || target.is( ".string-5" ) ) {
      $('.chord-4').css('background-color', '#ecb730');
      chordArray.push(5);
      console.log(chordArray);
    }
    timeout4 = setTimeout(function() {
      chordArray = [];
      console.log(chordArray);
      $('.chord').css('background-color', '#242424');
      $('.string-container').addClass("click-1");
      $('.string-container').removeClass("click-2");
      $('.string-container').removeClass("click-3");
      $('.string-container').removeClass("click-4");
      $('.string-container').removeClass("click-5");
    }, 4000);
  });

  // click 5 functionality
  $('.click-5').live('click', function(event) {
    clearTimeout(timeout4);
    $('.string-container').removeClass("click-5");
    $('.string-container').addClass("click-1");
    var target = $( event.target );
    if ( target.is( ".string-container-1" ) || target.is( ".string-1" ) ) {
      $('.chord-5').css('background-color', '#591f49');
      chordArray.push(1);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-2" ) || target.is( ".string-2" ) ) {
      $('.chord-5').css('background-color', '#902745');
      chordArray.push(2);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-3" ) || target.is( ".string-3" ) ) {
      $('.chord-5').css('background-color', '#c63643');
      chordArray.push(3);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-4" ) || target.is( ".string-4" ) ) {
      $('.chord-5').css('background-color', '#eb5a3a');
      chordArray.push(4);
      console.log(chordArray);
    }
    if ( target.is( ".string-container-5" ) || target.is( ".string-5" ) ) {
      $('.chord-5').css('background-color', '#ecb730');
      chordArray.push(5);
      console.log(chordArray);
    }
    if (chordArray.toString() === casperArray.toString()) {
       setTimeout(function(){
         $('.project').fadeOut();
         $('.casper').fadeIn();
         $('.header').addClass('invisible');
       }, 1000);
    }
    else if (chordArray.toString() === aboutArray.toString()) {
       setTimeout(function(){
         $('.project').fadeOut();
         $('.about').fadeIn();
         $('.header').addClass('invisible');
       }, 1000);
    }
    else if (chordArray.toString() === mirariArray.toString()) {
       setTimeout(function(){
         $('.project').fadeOut();
         $('.mirari').fadeIn();
         $('.header').addClass('invisible');
       }, 1000);
    }
    else if (chordArray.toString() === nikeArray.toString()) {
       setTimeout(function(){
         $('.project').fadeOut();
         $('.nike').fadeIn();
         $('.header').addClass('invisible');
       }, 1000);
    }
    else if (chordArray.toString() === solaceArray.toString()) {
       setTimeout(function(){
         $('.project').fadeOut();
         $('.solace').fadeIn();
         $('.header').addClass('invisible');
       }, 1000);
    }
    else if (chordArray.toString() === idlemindArray.toString()) {
       setTimeout(function(){
         $('.project').fadeOut();
         $('.idlemind').fadeIn();
         $('.header').addClass('invisible');
       }, 1000);
    }
    else if (chordArray.toString() === calwaterArray.toString()) {
       setTimeout(function(){
         $('.project').fadeOut();
         $('.calwater').fadeIn();
         $('.header').addClass('invisible');
       }, 1000);
    }
    else if (chordArray.toString() === threeDArray.toString()) {
       setTimeout(function(){
         $('.project').fadeOut();
         $('.3D').fadeIn();
         $('.header').addClass('invisible');
       }, 1000);
    }
    else if (chordArray.toString() === artworkArray.toString()) {
       setTimeout(function(){
         $('.project').fadeOut();
         $('.artwork').fadeIn();
         $('.header').addClass('invisible');
         var $grid = $('.grid').isotope({
           itemSelector: '.grid-item',
           columnWidth: '.grid-sizer',
         });
       }, 1000);
    }
    else if (chordArray.toString() === sketchesArray.toString()) {
       setTimeout(function(){
         $('.project').fadeOut();
         $('.sketches').fadeIn();
         $('.header').addClass('invisible');
       }, 1000);
    }
    else {
      $('.your-chords').addClass('vibrate-2');
      setTimeout(function(){
        $('.your-chords').removeClass('vibrate-2');
      }, 300);
       setTimeout(function(){
         chordArray = [];
         console.log(chordArray);
         $('.chord').css('background-color', '#242424');
       }, 300);
    }
    setTimeout(function(){
      chordArray = [];
      console.log(chordArray);
      $('.chord').css('background-color', '#242424');
    }, 1000);
  });


  // close button functionality
  $('.close-button').live('click', function(event) {
    event.preventDefault();
    $('.project').fadeOut();
    $('.header').removeClass('invisible');
  });

  // logo button functionality
  $('.logo').live('click', function(event) {
    $('.project').fadeOut();
    $('.header').removeClass('invisible');
  });


});
// end document ready
