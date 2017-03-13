// $(window).load(function() {
// 		var loader = document.getElementById("loader-01");
// 		var loadTl = new TimelineMax();
// 		loadTl
// 			.to(loader, .5, {autoAlpha: 1, ease: Power3.easeOut})
// 			.from(loader, 1, {autoAlpha: 1})
// 			.to(loader, .5, {autoAlpha: 0,ease: Power3.easeIn});

// 		loader.css(display, "none");

// 		return loadTl;
// });


(function(){

	function getAnimation(){
		//particle animation
		var particles = document.querySelectorAll('.particle'),
				twoPi = Math.PI * 2,
				radius = getRandomInt(0, 90);

		function startAnimation(){

			// var animationTl = new TimelineMax({repeat: -1, yoyo: true});

			for(var i=0;i<particles.length;i++){

				// TweenMax.set(particles[i], {x: getRandomInt(-twoPi, twoPi), y: getRandomInt(-twoPi, twoPi), autoAlpha: 1});
				TweenMax.to(particles[i], 1, {autoAlpha: 1, ease: Power4.easeOut});
				TweenMax.to(particles[i], getRandomInt(5, 15), {
			    x: "+=" + twoPi,
			    y: "+=" + twoPi,
			    repeat: -1,
			    modifiers: {
				      x: function(x) {
				        return Math.cos(x) * radius;
			      	},
			      	y: function(y) {
			      		return Math.cos(y) * radius;
			      	}
			      },
			    ease: Power4.easeInOut
			  });

			}

		}

		startAnimation();

	}

	function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

	}

	// function sloganAnimation(){

	// 	var mainSlogan = document.querySelector(".main-slogan h2"),
	// 			spanSlogan = mainSlogan.querySelector("span");

	// 			console.log(spanSlogan);

	// }

	function captionText(){

		var context = document.querySelectorAll("figure.col__2.figimg"),
				element = document.querySelectorAll("figcaption.ptfigcap p");



		for(var i=0; i<context.length; i++){

			context[i].addEventListener("mouseenter", function(e){

				TweenMax.to(e.target.querySelector("figcaption.ptfigcap p"), 0.3, {autoAlpha: 1, ease: Linear.easeNone});

			});

			context[i].addEventListener("mouseleave", function(e) {
				TweenMax.to(e.target.querySelector("figcaption.ptfigcap p"), 0.2, {autoAlpha: 0, ease: Linear.easeNone});
			});

		}

	}

	window.onload = function() {

	  getAnimation();
	  // sloganAnimation();
		captionText();

	};

})()

// menu trigger

$(function(){

	var $openMenu = $('#menu-button'),
			$menuSection = $('div.section-menu.section-menu-slidedown'),
			$closeMenu = $('.menu-close'),
  		$body = $("body");

			console.log($menuSection);

	function toggleMenu(){

		if($menuSection.hasClass('open')){
			$menuSection.removeClass('open') && $menuSection.addClass('close') && $body.removeClass("flowhidden");
		} else {
			$menuSection.addClass('open') && $menuSection.removeClass('close') && $body.addClass("flowhidden");
		}

	}

	$openMenu.on("touchstart click", toggleMenu);
	$closeMenu.on("touchstart click", toggleMenu);

})

$(function(){  

  var $scrollBtn = $("#scrollToIndicator");

	$scrollBtn.on("click", "a", function(){
	    var $this = $(this),
	        href = $this.attr("href"),
	        topY = $(href).offset().top;

	    //reset stage

	    // var $desktopLayers = $(".desktop-layers");

	    // var TweenMax.set();

	    var scrollTl = new TimelineMax();
	   
	    scrollTl.to($(window), 1, {
	        scrollTo:{
	            y: topY, 
	            autoKill: true
	        }, 
	        ease:Power3.easeOut 
	     });
	  
	  return false;
	});  

});

