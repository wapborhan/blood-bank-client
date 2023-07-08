	
//=== Switcher panal slide function	=====================//

	jQuery(window).load(function(){
		jQuery('.styleswitcher').animate({
					'left': '-170px'
				});
		jQuery('.switch-btn').addClass('closed');
	});
	
	jQuery(document).ready(function () {		
		jQuery('.switch-btn').on('click', function () {	
			if (jQuery(this).hasClass('open')) {
				jQuery(this).addClass('closed');
				jQuery(this).removeClass('open');
				jQuery('.styleswitcher').animate({
					'left': '-170px'
				});
			} else {
				if (jQuery(this).hasClass('closed')) {
				jQuery(this).addClass('open');
				jQuery(this).removeClass('closed');
				jQuery('.styleswitcher').animate({
					'left': '0'
				});
				}
			}	
		});
	});
	
//=== Switcher panal slide function END	=====================//


//=== Color css change function	=====================//

jQuery( document ).ready(function() {

	// Block Active	
	jQuery('.color-skins li a').click(function() {
		jQuery(".color-skins li a").removeClass("active");
		jQuery(this).addClass("active");
	});
	
    // Color changer
    jQuery(".skin-1").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-1.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-1-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-1-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-1-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-1.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-1.png");			
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-1.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-1.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-1.png");
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-1.png");			
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-1.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-1.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-1.png");				
        return false;
    });
    
    jQuery(".skin-2").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-2.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-2-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-2-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-2-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-2.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-2.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-2.png");	
		
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-2.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-2.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-2.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-2.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-2.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-2.png");		
								
        return false;
    });
    
    jQuery(".skin-3").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-3.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-3-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-3-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-3-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-3.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-3.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-3.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-3.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-3.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-3.png");	
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-3.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-3.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-3.png");								
        return false;
    });
	
    jQuery(".skin-4").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-4.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-4-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-4-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-4-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-4.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-4.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-4.png");						
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-4.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-4.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-4.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-4.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-4.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-4.png");								
        return false;
    });
	
    jQuery(".skin-5").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-5.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-5-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-5-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-5-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-5.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-5.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-5.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-5.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-5.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-5.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-5.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-5.png");	
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-5.png");							
        return false;
    });	
	
    jQuery(".skin-6").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-6.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-6-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-6-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-6-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-6.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-6.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-6.png");							
		

		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-6.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-6.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-6.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-6.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-6.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-6.png");								
        return false;
    });
	
	
    jQuery(".skin-7").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-7.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-7-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-7-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-7-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-7.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-7.png");		
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-7.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-7.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-7.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-7.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-7.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-7.png");	
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-7.png");								
        return false;
    });
    
    jQuery(".skin-8").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-8.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-8-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-8-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-8-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-8.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-8.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-8.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-8.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-8.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-8.png");
		
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-8.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-8.png");	
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-8.png");								
        return false;
    });
    
    jQuery(".skin-9").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-9.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-9-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-9-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-9-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-9.png");	
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-9.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-9.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-9.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-9.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-9.png");
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-9.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-9.png");	
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-9.png");								
        return false;
    });
	
    jQuery(".skin-10").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-10.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-10-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-10-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-10-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-10.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-10.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-10.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-10.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-10.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-10.png");	
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-10.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-10.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-10.png");									
        return false;
    });
	
    jQuery(".skin-11").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-11.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-11-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-11-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-11-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-11.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-11.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-11.png");					

		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-11.png");		
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-11.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-11.png");	
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-11.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-11.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-11.png");									
        return false;
    });	
	
    jQuery(".skin-12").on('click', function(){
        jQuery(".skin").attr("href", "css/skin/skin-12.css");
		jQuery(".logo-header img").attr("src", "images/logo-white.png");
		jQuery(".footer-style2 .logo-footer img").attr("src", "images/logo-12-light.png");
		jQuery(".footer-style1 .logo-footer img").attr("src", "images/logo-12-light.png");
		jQuery(".header-style-4.dark-menu .logo-header img").attr("src", "images/logo-12-dark.png");
		jQuery(".about-drone-one-media img").attr("src", "images/about-drone/d-1-12.png");
		jQuery(".how-it-drone-media2 img").attr("src", "images/how-it-work/d-1-12.png");	
		
		jQuery(".animated-right-drone-media img").attr("src", "images/d2-testimonial-12.png");					
		
		jQuery(".change-img-slide1 img").attr("src", "images/main-slider/slider3/d-1-12.png");
		jQuery(".change-img-slide2 img").attr("src", "images/main-slider/slider3/d-2-12.png");
		jQuery(".change-img-slide3 img").attr("src", "images/main-slider/slider3/d-3-12.png");	
		
		jQuery(".home-1-change-img-slide1 img").attr("src", "images/main-slider/slider1/drone/d-1-12.png");
		jQuery(".home-3-change-img-slide1 img").attr("src", "images/main-slider/slider2/d-1-12.png");
		jQuery(".home-3-change-img-slide2 img").attr("src", "images/main-slider/slider2/d-3-12.png");									
        return false;
    });				
		
		
});


