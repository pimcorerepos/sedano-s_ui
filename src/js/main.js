
'use strict';



$(function () {


    // ------------------------------------------------------- //
    //   no background scroll, open mobile menu
    // ------------------------------------------------------ //
    function noscroll() {
        if ($('body').hasClass('noscroll')) {
            $('body').removeClass('noscroll');
        } else {
            $('body').addClass('noscroll');
        }
    }
    $(document).ready(function () {
        $('#responsive-menu-button').click(function () {
            noscroll();
        });
    });



    // ------------------------------------------------------- //
    //   header scroll effect
    // ------------------------------------------------------ //

    $(window).scroll(function () {
        /* affix after scrolling 100px */
        if ($(document).scrollTop() > 80) {
            $('.header-bar').addClass('affix');
        } else {
            $('.header-bar').removeClass('affix');
        }
    });



    $(document).ready(function(){ 
        $(window).scroll(function(){ 
            if ($(this).scrollTop() > 100) { 
                $('#scroll').fadeIn(); 
            } else { 
                $('#scroll').fadeOut(); 
            } 
        }); 
        $('#scroll').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 600); 
            return false; 
        }); 
    });
    
    

    // ------------------------------------------------------- //
    //   header search toggle
    // ------------------------------------------------------ //


    $(document).ready(function () {
        $(".searchicon").click(function () {
            $(this).toggleClass('activesearch');
            $(".togglesearch").toggle();
            $(".closeicon").show();

        });
        $(".closeicon").click(function () {
            $(".togglesearch").hide();
            $(".searchicon").show();
            $(".closeicon").hide();
        });
    });





    // ------------------------------------------------------- //
    //   main slider 
    // ------------------------------------------------------ //
    $(document).ready(function () {
        $('#home-slider .owl-carousel',).owlCarousel({
            loop: true,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right" ></i>'],
            autoplay: true,
            dots: false,
            autoplayHoverPause: true,
            items: 1,
            responsive: {
                0: {
                    nav: true
                },
                600: {
                    nav: true
                },
                1000: {
                    nav: true,
                    mouseDrag: false,
                },
            }
        });

        $('#privileges-slider .owl-carousel').owlCarousel({
            dots: false,
            animateOut: 'fadeOut',
            loop: true,
            navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
            autoplay: true,
            autoplayHoverPause: true,
            items: 1,
            smartSpeed: 450,
            responsive: {
                0: {
                    nav: true
                },
                600: {
                    nav: true
                },
                1000: {
                    nav: true,
                    mouseDrag: false,
                },
            }

        });

        $('#home-slider .owl-carousel', '#privileges-slider .owl-carousel').owlCarousel({ autoWidth: true }).trigger('refresh.owl.carousel');
    });




    // ------------------------------------------------------- //
    //   brandlogo slider 
    // ------------------------------------------------------ //

    $(function () {

        $('#partnerbrandslogo .owl-carousel').owlCarousel({
            loop: true,
            navText: ['<i class="fas fa-chevron-left" ></i>', '<i class="fas fa-chevron-right" ></i>'],
            autoplay: true,
            dots: false,
            autoplayHoverPause: true,
            slideTransition: 'linear',
                autoplayTimeout: 1000,
                autoplaySpeed: 1000,
                smartSpeed: 1000,
                        responsive: {
                0: {
                    nav: true,
                    items: 2
                },
                600: {
                    nav: true,
                    items: 1
                },
                1000: {
                    nav: true,
                    mouseDrag: false,
                    items: 7
                },
            }
        });


        $('#brandslogo .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            nav: false,
            dots: false,
            slideTransition: 'linear',
            autoplayTimeout: 1000,
            autoplaySpeed: 1000,
            smartSpeed: 500,
            autoplayHoverPause: true,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $('#brandslogoright .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            nav: false,
            dots: false,
            autoWidth:true,
            autoplayHoverPause: true,
            rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });


        // ------------------------------------------------------- //
        //   recent news slider 
        // ------------------------------------------------------ //        
         $('#recent-news .owl-carousel').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
             items: 2,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 2,
                    loop: false,
                    mouseDrag: false,
                }
            }
           
        });

     

        $('#recent-news-arbic .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            nav: false,
            dots: false,
            rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                    loop: false,
                    mouseDrag: false,
                }
            }
        });


    });


    
    


    

    // ------------------------------------------------------- //
    //   sidebar scrollbar  
    // ------------------------------------------------------ //      
    $(document).ready(function () {
    $("#content-2 ").mCustomScrollbar({
        scrollButtons: {
            enable: true
        },
        advanced: {
            updateOnContentResize: true,
            updateOnBrowserResize: true

        },
        theme: "light-2",
           });
        });
          

        //    $(".list-group-item").click(function(){
        //        var height = $('.mCSB_container').height();
        //     //    alert(height);
        //     console.log(height);

        //         if($('#content-2').height() != height){
        //                     $("#content-2").css('border-bottom', '0px solid red');
        //                     console.log('abcd');
        //                 }
        //                 else {
        //                     $("#content-2").css('border-bottom', '2px solid red');
        //                     console.log('xyz');

        //                 }
        //         });

      
   

        // var height = $('#content-2').height()
         
        //     if(height > '336px'){
        //         $(".list-brands").addClass("scrollBorder");
        //     }
        //     // else{
        //     //     $("#content-2").removeClass("scrollBorder");
        //     // }
        //   });

   


    // ------------------------------------------------------- //
    //  mobile multiple  dropdow nmenu 
    // ------------------------------------------------------ //        

    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
        if (!$(this).next().hasClass("show")) {
            $(this)
                .parents(".dropdown-menu")
                .first()
                .find(".show")
                .removeClass("show")
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass("show");
         //Remove the icon class
         if ($(this).find('em').hasClass('caret caret-up')) {
            //then change back to the original one
            $(this).find('em').removeClass('caret-up').addClass($(this));
          } else {
            //Remove the cross from all other icons
            $('.dropdown-toggle').each(function(){
                if($(this).find('em').hasClass('caret caret-up')) {
                  $(this).find('em').removeClass('caret-up').addClass($(this));
              }
            });
            $(this).find('em').addClass('caret-up').removeClass($(this));
        }
        $(this)
            .parents(".dropdown.show")
            .on("hidden.bs.dropdown", function (e) {
                $(".dropdown-menu > .dropdown .show").removeClass("show");
            });
        return false;
    });

       


//     $('.dropdown-toggle').click(function(){
//         var notCollapsed = $(this).find('em').hasClass('caret');		     	
    
//     //Remiove crosses from all buttons
//         $('.dropdown-toggle').find('em').removeClass('caret');		    
    
//     //Reset the default icon for each button 
//         $('.dropdown-toggle').find('em').addClass('caret-up');
    
//     //Bring the cross if needed
//           if(!notCollapsed) $(this).find('em').attr("class",'caret');
// });


    // $(document).ready(function () {

    //     $(".dropdown-toggle").click(function (e) {
    //         e.preventDefault();
    //         $("em").toggleClass("active");
    //         $(this).toggleClass("animate");
    //         $(".closeicon").show();
    //         $(".advfiltersearch").hide();
    //     });
        
    //     $(".closeicon").click(function () {
    //         $(".advfilterbox").removeClass("active");
    //         $(".advfiltersearch").show();
    //         $(".closeicon").hide();
    //     }); 

    // });

   

    // jQuery(function ($) {
    //     $('.dropdown-toggle').on('click', function () {
    //         var $el = $(this),
    //         textNode = this.lastChild;
    //         // $el.find('em').toggleClass('caret caret-up');
    //         $el.toggleClass('showFire');
    //     });
    // });
    

    

    // ------------------------------------------------------- //
    //   side menu  
    // ------------------------------------------------------ //        


    $('.dropdown-menu a').on('click', function () {
        var getValue = $(this).text();
        $('.dropdown-select').text(getValue);

    });


    // ------------------------------------------------------- //
    //   Filter  
    // ------------------------------------------------------ //  


    $('.filters ul li').click(function () {
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
            columnWidth: ".all"
        }
    })



    
   

});




