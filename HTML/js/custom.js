  // bottom to top button js 
	
 $(document).ready(function() {
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD

  /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
  var h1 = $("#h1").position();
  var h2 = $("#h2").position();
  var h3 = $("#h3").position();

  $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;

  }); // left menu link3 click() scroll END

}); // ready() END


 
 // page loader js here
    
	$(window).load(function() {
		$(".loader").fadeOut("slow");
	});
 
 // collapse panel our service js here	   

$('.collapse').on('shown.bs.collapse', function(){
	$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
		}).on('hidden.bs.collapse', function(){
	$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
});
	
 
 // scroll remove class js 

    $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $('.head_second').addClass('navbar-fixed-top');
          } else {
        $('.head_second').removeClass('navbar-fixed-top');
          }
    });

 // responsive tab js here

	$(document).ready(function () {
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion           
		width: 'auto', //auto or any width like 600px
		fit: true,   // 100% fit in a container
		closed: 'accordion', // Start closed if in accordion view
		activate: function(event) { // Callback function if tab is switched
		var $tab = $(this);
		var $info = $('#tabInfo');
		var $name = $('span', $info);
		$name.text($tab.text());
		$info.show();
		}
	});
		$('#verticalTab').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true
	});
	});


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

 
 
 // owl slider js here

	$(document).ready(function() {
	 
	  $(".our_patners_slider").owlCarousel({
	 
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  navigation : true, // Show next and prev buttons
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [991,2],
          itemsTablet: [540,1],
          itemsMobile : false
	 
	  });
	 
	}); 
 
 // owl slider js here

	$(document).ready(function() {
	 
	  $(".owl_multiple_img").owlCarousel({
	 
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  
		  items : 3,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [991,2],
          itemsTablet: [540,1],
          itemsMobile : false
	 
	  });
	 
	}); 

// owl slider js here

	$(document).ready(function() {
	 
	  $(".our_services_blog").owlCarousel({
	 
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  navigation : true, // Show next and prev buttons
		  items : 3,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [991,2],
          itemsTablet: [540,1],
          itemsMobile : false
	 
	  });
	 
	});
	
//our serv owl slider js here
	
	$(document).ready(function() {
	 
	  $(".owl_serv_prov_slid_new").owlCarousel({
		  navigation : true, // Show next and prev buttons
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3],
		  itemsTablet: [767,2],
          itemsMobile : [540,1]
	 
	  });
	 
	});
	
 // testimonial slider js here
	
// vars
	'use strict'
	var	testim = document.getElementById("testim"),
			testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
		testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
		testimLeftArrow = document.getElementById("left-arrow"),
		testimRightArrow = document.getElementById("right-arrow"),
		testimSpeed = 4500,
		currentSlide = 0,
		currentActive = 0,
		testimTimer,
			touchStartPos,
			touchEndPos,
			touchPosDiff,
			ignoreTouch = 30;
	;

	window.onload = function() {

	
// Testim Script

    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

	
// keyboard shortcuts

    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}



 // collapse plus minus icon change js here

	function myFunction(x) {
		x.classList.toggle("fa-minus");
	}

	$(window).scroll(function(){
		if($(this).scrollTop()>1000){
		$(".car_an").addClass('car_annimation1');
		}
		else{
			$(".car_an").removeClass('car_annimation1');
		}
	})


 // car annimation js here


	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){  
		 event.preventDefault();
		 $('html,body').animate({scrollTop:$(this.hash).offset().top -150},1000);
		});
	   });

	   
 