
jQuery(function () {

    "use strict";


    jQuery( ".hamenu .main-menu >li" ).each(function(index) {
       jQuery(this).find('>.o-hidden .nm').html('0'+(index+1)+'.');
        jQuery(this).find( ">div>ul >li" ).each(function(index1) {
            jQuery(this).find('>.o-hidden .nm').html('0'+index1+'.');
        });

    });



    /* ===============================  Navbar Menu  =============================== */

    var wind = jQuery(window);

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = jQuery(".navbar"),
            logo_dark = jQuery(".navbar .logo> img.logo-dark"),
            logo_light = jQuery(".navbar .logo> img.logo-light");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");
            //logo.attr('src', 'img/logo-dark.png');
            logo_dark.removeClass('hide');
            logo_light.addClass('hide');
        } else {

            navbar.removeClass("nav-scroll");
            //logo.attr('src', 'img/logo-light.png');
            logo_light.removeClass('hide');
            logo_dark.addClass('hide');
        }
    });

    jQuery('.navbar .search .icon').on('click', function () {
        jQuery(".navbar .search .search-form").fadeIn();
    });

    jQuery('.navbar .search .search-form .close').on('click', function () {
        jQuery(".navbar .search .search-form").fadeOut();
    });


    function noScroll() {
        window.scrollTo(0, 0);
    }

   /* wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = jQuery(".topnav");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });*/

    var open = false,
        navDark = jQuery(".topnav.dark"),
        logoChanDark = jQuery(".topnav.dark .logo img.logo-dark"),
        logoChanLight = jQuery(".topnav.dark .logo img.logo-light");

    jQuery('.topnav .menu-icon').on('click', function () {
        open = !open;

        jQuery('.hamenu').toggleClass("open");

        if (open) {

            jQuery('.hamenu').animate({ left: 0 });

            jQuery('.topnav .menu-icon .text').addClass('open');

            navDark.addClass("navlit");
            //logoChan.attr('src', 'img/logo-light.png');
            logoChanLight.removeClass('hide');
            logoChanDark.addClass('hide');

            window.addEventListener('scroll', noScroll);

        } else {

            jQuery('.hamenu').delay(300).animate({ left: "-100%" });

            jQuery('.topnav .menu-icon .text').removeClass('open');

            navDark.removeClass("navlit");
            //logoChan.attr('src', 'img/logo-dark.png');
            logoChanDark.removeClass('hide');
            logoChanLight.addClass('hide');


            window.removeEventListener('scroll', noScroll);
        }
    });

    jQuery('.hamenu .menu-links .main-menu > li').on('mouseenter', function () {
        jQuery(this).css("opacity", "1").siblings().css("opacity", ".5");
    });

    jQuery('.hamenu .menu-links .main-menu > li').on('mouseleave', function () {
        jQuery(".hamenu .menu-links .main-menu > li").css("opacity", "1");
    });


    jQuery('.main-menu > li .dmenu').on('click', function () {
        jQuery(".main-menu").addClass("gosub");
        jQuery(this).parent().parent().find(".sub-menu").addClass("sub-open");
    });

    jQuery('.main-menu .sub-menu li .sub-link.back').on('click', function () {
        jQuery(".main-menu").removeClass("gosub");
        jQuery(".main-menu .sub-menu").removeClass("sub-open");
    });


    /* ===============================  Swiper slider  =============================== */


    var parallaxSlider;
    var parallaxSliderOptions = {
        speed: 1000,
        autoplay: true,
        parallax: true,
        loop: true,

        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    jQuery(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function () {
                this.update();
            }
        },

        pagination: {
            el: '.slider-prlx .parallax-slider .swiper-pagination',
            type: 'fraction',
            clickable: true
        },

        navigation: {
            nextEl: '.slider-prlx .parallax-slider .next-ctrl',
            prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
        }
    };
    parallaxSlider = new Swiper('.slider-prlx .parallax-slider', parallaxSliderOptions);


    var parallaxShowCase;
    var parallaxShowCaseOptions = {
        speed: 1000,
        autoplay: true,
        parallax: true,
        mousewheel: true,
        loop: true,

        on: {
            init: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    jQuery(swiper.slides[i])
                        .find('.bg-img')
                        .attr({
                            'data-swiper-parallax': 0.75 * swiper.width
                        });
                }
            },
            resize: function () {
                this.update();
            }
        },

        pagination: {
            el: '.showcase-full .parallax-slider .swiper-pagination',
            type: 'fraction',
            clickable: true
        },

        navigation: {
            nextEl: '.showcase-full .parallax-slider .next-ctrl',
            prevEl: '.showcase-full .parallax-slider .prev-ctrl'
        }
    };
    parallaxShowCase = new Swiper('.showcase-full .parallax-slider', parallaxShowCaseOptions);


    var swiperWorkMetro = new Swiper('.metro .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        centeredSlides: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 0
            }
        },

        pagination: {
            el: '.metro .swiper-pagination',
            type: 'progressbar',
        },

        navigation: {
            nextEl: '.metro .swiper-button-next',
            prevEl: '.metro .swiper-button-prev'
        },
    });

    var swiperWorkCaroul = new Swiper('.caroul .swiper-container', {
        spaceBetween: 0,
        speed: 1000,
        loop: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0
            }
        },

        pagination: {
            el: '.caroul .swiper-pagination',
            type: 'progressbar',
        },

        navigation: {
            nextEl: '.caroul .swiper-button-next',
            prevEl: '.caroul .swiper-button-prev'
        },
    });


    var swiperBusImg = new Swiper('.slider-bus .swiper-img', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },

        navigation: {
            nextEl: '.slider-bus .next-ctrl',
            prevEl: '.slider-bus .prev-ctrl'
        },
    });

    var swiperBusContent = new Swiper('.slider-bus .swiper-content', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },

        pagination: {
            el: '.slider-bus .swiper-pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.slider-bus .next-ctrl',
            prevEl: '.slider-bus .prev-ctrl'
        },
    });


    /* ===============================  Var Background image  =============================== */

    var pageSection = jQuery(".bg-img, section");
    pageSection.each(function (indx) {

        if (jQuery(this).attr("data-background")) {
            jQuery(this).css("background-image", "url(" + jQuery(this).data("background") + ")");
        }
    });


    /* ===============================  slick Carousel  =============================== */

    jQuery('.testimonials .slic-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.testimonials .prev',
        nextArrow: '.testimonials .next',
        dots: true,
        autoplay: true
    });

    jQuery('.testim-box .slic-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true
    });

    jQuery('.team .team-container').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.team .prev',
        nextArrow: '.team .next',
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    jQuery('.blog-curs .blg-swipe').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.blog-curs .prev',
        nextArrow: '.blog-curs .next',
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    jQuery('.clients-brand .brands-crs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    /* ===============================  YouTubePopUp  =============================== */

    jQuery("a.vid").YouTubePopUp();


    /* ===============================  parallaxie  =============================== */

    jQuery('.parallaxie').parallaxie({
        speed: 0.2,
        size: "cover"
    });


    /* ===============================  justifiedGallery  =============================== */

    jQuery('.justified-gallery').justifiedGallery({
        rowHeight: 400,
        lastRow: 'nojustify',
        margins: 15
    });


    /* ===============================  skills-circle  =============================== */

    var c4 = jQuery('.skills-circle .skill');
    var myVal = jQuery(this).attr('data-value');

    jQuery(".skills-circle .skill").each(function () {

        c4.circleProgress({
            startAngle: -Math.PI / 2 * 1,
            value: myVal,
            thickness: 2,
            size: 110,
            fill: { color: "#75dab4" }
        });

    });

    wind.on('scroll', function () {
        jQuery(".skill-progress .progres").each(function () {
            var bottom_of_object =
                jQuery(this).offset().top + jQuery(this).outerHeight();
            var bottom_of_window =
                jQuery(window).scrollTop() + jQuery(window).height();
            var myVal = jQuery(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                jQuery(this).css({
                    width: myVal
                });
            }
        });
    });


    /* ===============================  countUp  =============================== */

    jQuery('.number-sec .count').countUp({
        delay: 10,
        time: 500
    });


    /* ===============================  tooltip  =============================== */

    jQuery('[data-tooltip-tit]').hover(function () {
        jQuery('<div class="div-tooltip-tit"></div>').text(jQuery(this).attr('data-tooltip-tit')).appendTo('body').fadeIn('slow');
    }, function () {
        jQuery('.div-tooltip-tit').remove();
    }).mousemove(function (e) {
        jQuery('.div-tooltip-tit').css({ top: e.pageY + 10, left: e.pageX + 20 })
    });
    jQuery('[data-tooltip-sub]').hover(function () {
        jQuery('<div class="div-tooltip-sub"></div>').text(jQuery(this).attr('data-tooltip-sub')).appendTo('body').fadeIn('slow');
    }, function () {
        jQuery('.div-tooltip-sub').remove();
    }).mousemove(function (e) {
        jQuery('.div-tooltip-sub').css({ top: e.pageY + 60, left: e.pageX + 20 })
    });

});


    /* ===============================  Wow Animation  =============================== */

    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();


// === window When Loading === //

jQuery(window).on("load", function () {


    /* ===============================  SPLITTING TEXT  =============================== */

    Splitting();


    /* ===============================  thumparallax  =============================== */

    var imageUp = document.getElementsByClassName('thumparallax');
    new simpleParallax(imageUp, {
        delay: 1,
        scale: 1.1
    });

    var imageDown = document.getElementsByClassName('thumparallax-down');
    new simpleParallax(imageDown, {
        orientation: 'down',
        delay: 1,
        scale: 1.1
    });


    /* ===============================  isotope Masonery  =============================== */

    jQuery('.gallery').isotope({
        itemSelector: '.items'
    });

    var jQuerygallery = jQuery('.gallery').isotope();

    jQuery('.filtering').on('click', 'span', function () {
        var filterValue = jQuery(this).attr('data-filter');
        jQuerygallery.isotope({ filter: filterValue });
    });

    jQuery('.filtering').on('click', 'span', function () {
        jQuery(this).addClass('active').siblings().removeClass('active');
    });


    /* ===============================  contact validator  =============================== */

    jQuery('#contact-form').validator();

    jQuery('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            jQuery.ajax({
                type: "POST",
                url: url,
                data: jQuery(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        jQuery('#contact-form').find('.messages').html(alertBox);
                        jQuery('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});



/* ===============================  Hide / show navbar  =============================== */

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('#navi').outerHeight();
jQuery(window).on("scroll", function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = jQuery(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        jQuery('#navi').css('top', '-100px');

    } else {

        if (st + jQuery(window).height() < jQuery(document).height()) {
            jQuery('#navi').css('top', '0');
        }
    }

    lastScrollTop = st;
}



/* ===============================  Preloader page  =============================== */

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function () {
    jQuery('#preloader').addClass("isdone");
    jQuery('.loading-text').addClass("isdone");
});


/* ===============================  Scroll back to top  =============================== */

jQuery(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = jQuery(window).scrollTop();
        var height = jQuery(document).height() - jQuery(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    jQuery(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })


});





/* ===============================  Mouse effect  =============================== */

function mousecursor() {
    if (jQuery("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, jQuery("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), jQuery("body").on("mouseleave", "a, .cursor-pointer", function () {
            jQuery(this).is("a") && jQuery(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
};

jQuery(function () {
    mousecursor();
});

 /* ===============================  fixed-slider  =============================== */

jQuery(function () {

    "use strict";

    var slidHeight = jQuery(".fixed-slider").outerHeight();

    jQuery(".main-content").css({
        marginTop: slidHeight
    });

});

jQuery(window).scroll(function () {

    /* ===============================  fade slideshow  =============================== */

    var scrolled = jQuery(this).scrollTop();
    jQuery('.fixed-slider .caption , .fixed-slider .capt .parlx').css({
        'transform': 'translate3d(0, ' + -(scrolled * 0.20) + 'px, 0)',
        'opacity': 1 - scrolled / 600
    });

});



/* ===============================  Swiper showcases with data  =============================== */


jQuery('[data-carousel="swiper"]').each(function () {

    var containe = jQuery(this).find('[data-swiper="container"]').attr('id');
    var pagination = jQuery(this).find('[data-swiper="pagination"]').attr('id');
    var prev = jQuery(this).find('[data-swiper="prev"]').attr('id');
    var next = jQuery(this).find('[data-swiper="next"]').attr('id');
    var items = jQuery(this).data('items');
    var autoplay = jQuery(this).data('autoplay');
    var iSlide = jQuery(this).data('initial');
    var loop = jQuery(this).data('loop');
    var parallax = jQuery(this).data('parallax');
    var space = jQuery(this).data('space');
    var speed = jQuery(this).data('speed');
    var center = jQuery(this).data('center');
    var effect = jQuery(this).data('effect');
    var direction = jQuery(this).data('direction');
    var mousewheel = jQuery(this).data('mousewheel');

    // Configuration
    var conf = {

    };

    // Responsive
    if (jQuery(this).hasClass('showcase-grid')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            }
        };
    };

    if (jQuery(this).hasClass('showcase-carus')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 200,
                },
            }
        };
    };

    if (jQuery(this).hasClass('showstyle')) {
        var conf = {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    };

    if (items) {
        conf.slidesPerView = items
    };
    if (autoplay) {
        conf.autoplay = autoplay
    };
    if (iSlide) {
        conf.initialSlide = iSlide
    };
    if (center) {
        conf.centeredSlides = center
    };
    if (loop) {
        conf.loop = loop
    };
    if (parallax) {
        conf.parallax = parallax
    };
    if (space) {
        conf.spaceBetween = space
    };
    if (speed) {
        conf.speed = speed
    };
    if (mousewheel) {
        conf.mousewheel = mousewheel
    };
    if (effect) {
        conf.effect = effect
    };
    if (direction) {
        conf.direction = direction
    };
    if (prev) {
        conf.prevButton = '#' + prev
    };
    if (next) {
        conf.nextButton = '#' + next
    };
    if (pagination) {
        conf.pagination = '#' + pagination,
            conf.paginationClickable = true
    };

    // Initialization
    if (containe) {
        var initID = '#' + containe;
        var init = new Swiper(initID, conf);
    };
});
