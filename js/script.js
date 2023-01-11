// cousor animation
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

  // click to change web color
  $(".color-changer .yellow").click(function(){
    $(".web-color").attr("href","css/style-two.css");
  });
  $(".color-changer .tomato").click(function(){
    $(".web-color").attr("href","css/style-three.css");
  });
  $(".color-changer .light").click(function(){
    $(".web-color").attr("href","css/style-four.css");
  });
  $(".color-changer .blue").click(function(){
    $(".web-color").attr("href","css/style-five.css");
  });

// Preloader
setTimeout(function(){
  $(".preloder").fadeOut()
},1000)


// Color change hover
$( document ).ready(function() {
  $( ".color-changer" ).click(function() {
    $( ".selector-color" ).fadeToggle();
  });
});


// Mixitup
var mixer = mixitup('.main');

// Type Text
var type = new Typed('#typed-string', {
  stringsElement: '#typed',
  typeSpeed: 300,
  loop: true,
  loopCount: 50,
  backspeed: 1000,

});

// Back to Top
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".backtotop").fadeIn()
  }else{
    $(".backtotop").fadeOut()
  }
})
$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop: 0,
  }, 1000)
})


// Smooth scroll
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  

// Particales
var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

// Deactive Inspect option
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

