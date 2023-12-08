(function($) {
    "use strict";
    $('.dropdown').click(function() {
        if ($(this).hasClass('current')) {
            $(this).removeClass('current');
        } else {
            $('.dropdown.current').removeClass('current');
            $(this).addClass('current');
        }
    });

    $(".dropdown .dropdown-menu .dropdown").on('click', function(e) {
        var data = $(this).find(":nth-child(2)").toggleClass('current');
    });
    $(window).scroll(function() {
            $(this).scrollTop() >= 100 ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200)
        }),
        $("#return-to-top").click(function() {
            $("body,html").animate({
                scrollTop: 0
            }, 500)
        }),
        $(window).on('load', function() {
            $('.testimonial-start').owlCarousel({
                margin: 15,
                loop: true,
                nav: false,
                items: 3,
                autoplay: true,
                autoplayTimeout: 8500,
                dots: true,
                smartSpeed: 600,
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    }
                }

            });


            $(".home-page-banner .owl-carousel").owlCarousel({
                mouseDrag: !1,
                margin: 0,
                loop: !0,
                nav: 0,
                autoplay: !0,
                dots: !0,
                autoplayTimeout: 15e3,
                smartSpeed: 1e3,
                responsive: {
                  0: {
                    items: 1,
                  },
                },
              });

    $(".owl-dot").attr("aria-label", "Dots");
    $(".pre-owl").attr("width", "25");
    $(".pre-owl").attr("height", "25");
    $(".next-owl").attr("width", "25");
    $(".next-owl").attr("height", "25");
    $(".fa-plus").attr("aria-label", "Plus Icon");
    $(".fa-minus").attr("aria-label", "Minus Icon");

    $(".lb-prev").attr("href", "/");
    $(".lb-next").attr("href", "/");
    $(".lb-cancel").attr("href", "/");
    $(".lb-close").attr("href", "/");

    $("#youtube img").attr("alt", "youtube");
    $("#facebook img").attr("alt", "facebook");

    $(".linkIcons  img").attr("width", "100");
    $(".linkIcons  img").attr("height", "100");



        });

    $(".navigation ul li span").mouseup(function() {
        if (
            $(this).attr("aria-expanded") == "undefined" ||
            $(this).attr("aria-expanded") == "true"
        ) {
            $(this).removeClass("fa-minus");
            $(this).addClass("fa-plus");
        } else {
            $(this).removeClass("fa-plus");
            $(this).addClass("fa-minus");
        }
    });
    $('.menu-icon-in').click(function() {
        $(this).toggleClass('open');
    });

    $(".hamburger").on("click", function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay"></div>';
        $(mask)
            .hide()
            .appendTo("body")
            .fadeIn("fast");
        if ($(".dvLeft").hasClass('open')) {
            $(".mask-overlay").remove();
            $(".menu-icon-in").removeClass("open");
        }
        $(".dvLeft").toggleClass("open");
        $(".dvside-out,.mask-overlay").on("click", function() {
            $(".dvLeft").removeClass("open");
            $(".mask-overlay").remove();
            $(".menu-icon-in").removeClass("open");
        });
    });
    var nav_scroll = function() {
        setTimeout(function() {
            let divHeight = $("#menubar").height();
            let menuHeight = $("#ulmenu").height();
            if (menuHeight > divHeight) {
                $("#menubar").css("overflow-y", "scroll");
            } else {
                $("#menubar").css("overflow-y", "hidden");
            }
        }, 500);
    };
    nav_scroll();
    $(window).on("resize", function() {
        nav_scroll();
    });

    $(".navigation ul li span.sub").click(function() {
        nav_scroll();
        var box_id = $(this).data("target_");
        if ($(box_id).is(":visible")) {
            $(box_id).removeClass("show");
            $(this).removeClass("fa-minus");
            $(this).addClass("fa-plus");
        } else if (!$(box_id).is(":visible")) {
            $(box_id).addClass("show");
            $(this).removeClass("fa-plus");
            $(this).addClass("fa-minus");
        }
    });
    
    const header = document.querySelector(".header-area");
    const headerUpper = document.querySelector(".header-top");
    const fixedCTA = document.querySelector(".fixed-contact");
    const hamburger = document.querySelector(".hamburger");
    const dvLeft = document.querySelector(".dvLeft");

    window.addEventListener("scroll", () => {
        const windowWidth = window.innerWidth;

        windowWidth >= 1200 && window.scrollY > 300 ?
            (header.style.top = `${-1 * headerUpper.offsetHeight}px`) :
            (header.style.top = 0);

        window.scrollY > 5 ?
            header.classList.add("header-bg-on-scroll") :
            header.classList.remove("header-bg-on-scroll");

        window.scrollY > 300 ?
            fixedCTA.classList.add("header-fixed") :
            fixedCTA.classList.remove("header-fixed");
    });


    hamburger.addEventListener("click", () => {
        const maskOverlay = document.querySelector(".mask-overlay");
        header.classList.toggle("header-bg-on-click");
        if (document.querySelector("body").contains(maskOverlay)) {
            maskOverlay.addEventListener("click", () => {
                header.classList.remove("header-bg-on-click");
            });
        }
    });
    const dvLeftPaddingTop = () => {
        dvLeft.style.paddingTop = 10 + header.offsetHeight + "px";
    };
    dvLeftPaddingTop();
    window.addEventListener("resize", () => {
        dvLeftPaddingTop();
    });

    $("img.svg").each(function() {
        var $img = $(this),
            imgID = $img.attr("id"),
            imgClass = $img.attr("class"),
            imgURL = $img.attr("src");
        $.get(
            imgURL,
            function(data) {
                var $svg = $(data).find("svg");
                if (typeof imgID !== "undefined") {
                    $svg = $svg.attr("id", imgID);
                }
                if (typeof imgClass !== "undefined") {
                    $svg = $svg.attr("class", imgClass);
                }
                $svg = $svg.removeAttr("xmlns:a");
                $img.replaceWith($svg);
            }, "xml");
    });


})(jQuery);