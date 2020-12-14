
  gsap.registerPlugin(ScrollTrigger);

  

  
  gsap.from(".masthead-avatar", {
    scrollTrigger: {
      trigger: ".portfolio1",
      toggleActions: "play none none restart"
    },
    duration: 1, 
    opacity:0, 
    y:-100, 
    
  });

  gsap.from('.masthead-heading' , {
      scrollTrigger: {
      trigger: ".portfolio1 masthead-heading",
      toggleActions: "play none none restart"
    },
    duration:2,
    y: -100,
    ease: 'slow'
  })

  gsap.from(".icons-row1", {
    scrollTrigger: {
      trigger: ".icons-row1",
      toggleActions: "play none restart none"
    },
    duration:1, opacity:0, y: "random(-400, 400)"
  })

  gsap.from(".icons-row2", {
    scrollTrigger: {
      trigger: ".icons-row2",
      toggleActions: "play none restart none"
    },
    duration:1, opacity:0, x: "random(-400, 400)"
  })

  gsap.from(".icons-row3", {
    scrollTrigger: {
      trigger: ".icons-row3",
      toggleActions: "play none restart none"
    },
    duration:1, opacity:0, y: "random(-400, 400)"
  })

  gsap.from(".portfolio1", {
    scrollTrigger: {
      trigger: ".portfolio1",
      toggleActions: "restart none none none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease: "circ"
  })

  gsap.from(".portfolio2", {
    scrollTrigger: {
      trigger: ".portfolio1",
      toggleActions: "restart none none none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease:"circ"
  })

  gsap.from(".portfolio3", {
    scrollTrigger: {
      trigger: ".portfolio1",
      toggleActions: "restart none none none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease: "circ"
  })

  gsap.from(".portfolio4", {
    scrollTrigger: {
      trigger: ".portfolio1",
      toggleActions: "restart none none none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease: "circ"
  })

  gsap.from(".portfolio5", {
    scrollTrigger: {
      trigger: ".portfolio1",
      toggleActions: "restart none none none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease: "circ"
  })

  gsap.from(".portfolio6", {
    scrollTrigger: {
      trigger: ".portfolio1",
      toggleActions: "restart none none none"
    },
    duration: 2,
    x: -200,
    opacity:0,
    ease: "circ"
  })


    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  