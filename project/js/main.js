$(function(){

  //- For Remove OverLay Spinner From Page When it's ready
  $('.overLayPage').fadeOut(2000, function(){
    $(this).remove();
  });

  //- For Carouesl Trigger
  $('.carousel').carousel()


  //- For Using Jquery.animateNumber PlugIn

  var separator = $.animateNumber.numberStepFactories.separator(',')
  // #1
  $('#animtNumber1').animateNumber(
    {
      number: 48000,
      numberStep: separator,
    },
    {
      easing: 'swing',
      duration: 15000
    }
  );
  $('#animtNumber2').animateNumber(
    {
      number: 54900,
      numberStep: separator
    },
    {
      easing: 'swing',
      duration: 15000
    }
  );

  // #2
  $('#animtNumber2')
    .prop('number', 10)
    .animateNumber(
      {
        number: 0,
        numberStep: function(now, tween) {
          var target = $(tween.elem),
              rounded_now = Math.round(now);

          target.text(now === tween.end ? 'Launch!' : rounded_now);
        }
      },
      10000,
      'linear'
    );

  // For Using jquery.easing PlugIn
  $('.navbar-toggler').on('mouseenter', function(){
    $('.navbar-collapse').slideToggle({
      duration: 1000, 
      easing: 'easeInOutQuart'}); // ==> https://easings.net/ 
  });


  // - For Using magnificPopup
  $('.img-section').magnificPopup({
    type: 'image',
    gallery:{enabled:true},
    removalDelay: 160,
    mainClass: 'mfp-fade'
  });

  //#2
  //magnific popup
	// $('.img-section').magnificPopup({
  //   type: 'image',
  //   closeOnContentClick: true,
  //   closeBtnInside: false,
  //   fixedContentPos: true,
  //   mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  //   },
  //   image: {
  //     verticalFit: true
  //   },
  //   zoom: {
  //     enabled: true,
  //     duration: 300 // don't foget to change the duration also in CSS
  //   }
  // });

  // scrollax
    $.Scrollax();


});


// JavaScript

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: 20.010991, lng: 42.619209 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}