(function ($) {
    var windowOn = $(window);

    // Client Logo Slider
    var swiper = new Swiper(".client-logo-slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 8000,
        },
        loop: true,
    });

    $(".particulares-slider").slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // main slider
    var swiper = new Swiper(".sc-main-slider", {
        speed: 800,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 8000,
        },
    });
    // Slider Two
    var swiper = new Swiper(".sc-slider-2", {
        speed: 800,
        effect: "fade",
        autoplay: {
            delay: 8000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
    });

    // Blog Slider
    var swiper = new Swiper(".galeria-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 8000,
        },
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // catering Slider
    var swiper = new Swiper(".catering-slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 8000,
        },
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
        },
    });

    // catering Slider
    var swiper = new Swiper(".catering-slider-1", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 8000,
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
    // Blog Slider
    var swiper = new Swiper(".video-slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 8000,
        },
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
        },
    });
    // tabs-slider
    if ($(".tabs-slider").length) {
        $(".tabs-slider").slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            loop: true,
            prevArrow:
                '<a class="slide-arrow prev-arrow" href="#"><img src="assets/images/icon/prev.png" alt="image"></a>',
            nextArrow:
                '<a class="slide-arrow  next-arrow" href="#"><img src="assets/images/icon/next.png" alt="image"></a>',
            autoplaySpeed: 8500,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 1599,
                    settings: {
                        slidesToShow: 3,
                    },
                },
            ],
        });
        $('.nav-pills button[data-bs-toggle="pill"]').on("shown.bs.tab", function (e) {
            e.target;
            e.relatedTarget;
            $(".tabs-slider").slick("setPosition");
        });
    }
    if ($(".categories-tab .nav-link").length) {
        $(".categories-tab .nav-link").click(function () {
            $("#overlay").fadeIn().delay(100).fadeOut();
        });
    }
    // tabs-slider
    if ($(".tabs-slider-one").length) {
        $(".tabs-slider-one").slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            loop: true,
            autoplaySpeed: 7500,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 1599,
                    settings: {
                        slidesToShow: 5,
                    },
                },
            ],
        });
        $('.nav-pills button[data-bs-toggle="pill"]').on("shown.bs.tab", function (e) {
            e.target;
            e.relatedTarget;
            $(".tabs-slider-one").slick("setPosition");
        });
    }
    if ($(".categories-tab .nav-link").length) {
        $(".categories-tab .nav-link").click(function () {
            $("#overlay").fadeIn().delay(100).fadeOut();
        });
    }
    // parallax Js
    $(".parallax-window").parallax({ imageSrc: "assets/images/bg/corporativo.jpg" });
    // parallax Js
    $(".parallax-window-1").parallax({ imageSrc: "assets/images/bg/cta-2.jpg" });
    // parallax Js
    $(".parallax-window-2").parallax({ imageSrc: "assets/images/bg/confia-bg.jpg" });
    // parallax Js
    $(".parallax-window-3").parallax({ imageSrc: "assets/images/bg/nuestro-bg.jpg" });
    // parallax Js
    $(".parallax-window-4").parallax({ imageSrc: "assets/images/bg/bodas-1.jpg" });
    // parallax Js
    $(".parallax-window-5").parallax({ imageSrc: "assets/images/bg/galeria.jpg" });
    // parallax Js
    $(".parallax-window-6").parallax({ imageSrc: "assets/images/bg/cta-bg.jpg" });
    // parallax Js
    $(".parallax-window-7").parallax({ imageSrc: "assets/images/bg/bg-2.png" });
    // parallax Js
    $(".parallax-window-8").parallax({ imageSrc: "assets/images/bg/cta-4.jpg" });
    // parallax Js
    $(".parallax-window-9").parallax({ imageSrc: "assets/images/bg/corporativo-1.jpg" });
    // parallax Js
    $(".parallax-window-10").parallax({ imageSrc: "assets/images/bg/bg-3.png" });
    // parallax Js
    $(".parallax-window-11").parallax({ imageSrc: "assets/images/bg/cta-6.jpg" });
    // parallax Js
    $(".parallax-window-12").parallax({ imageSrc: "assets/images/bg/cta-5.jpg" });
    // parallax Js
    $(".parallax-window-13").parallax({ imageSrc: "assets/images/bg/bodas-6.jpg" });
    // parallax Js
    $(".parallax-window-14").parallax({ imageSrc: "assets/images/bg/lugares-6.jpg" });
    // parallax Js
    $(".parallax-window-15").parallax({ imageSrc: "assets/images/bg/confia-bg.jpg" });
    // parallax Js
    $(".parallax-window-16").parallax({ imageSrc: "assets/images/bg/bodas-5.jpg" });
    // parallax Js
    $(".parallax-window-17").parallax({ imageSrc: "assets/images/bg/bodas-2.jpg" });
    // parallax Js
    $(".parallax-window-18").parallax({ imageSrc: "assets/images/bg/bodas-3.jpg" });
    // parallax Js
    $(".parallax-window-19").parallax({ imageSrc: "assets/images/bg/bodas-4.jpg" });
    // parallax Js
    $(".parallax-window-20").parallax({ imageSrc: "assets/images/bg/particulares-bg.jpg" });
    // parallax Js
    $(".parallax-window-21").parallax({ imageSrc: "assets/images/bg/bg-1.png" });
    // parallax Js
    $(".parallax-window-22").parallax({ imageSrc: "assets/images/bg/cta-3.jpg" });

    /*-- alacena scroll top scripts start --*/
    var alacenaScrollTop = document.querySelector(".alacena-scroll-top");
    if (alacenaScrollTop != null) {
        var scrollProgressPatch = document.querySelector(".alacena-scroll-top path");
        var pathLength = scrollProgressPatch.getTotalLength();
        var offset = 50;
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition = "none";
        scrollProgressPatch.style.strokeDasharray = pathLength + " " + pathLength;
        scrollProgressPatch.style.strokeDashoffset = pathLength;
        scrollProgressPatch.getBoundingClientRect();
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        window.addEventListener("scroll", function (event) {
            var scroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var progress = pathLength - (scroll * pathLength) / height;
            scrollProgressPatch.style.strokeDashoffset = progress;
            var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollElementPos >= offset) {
                alacenaScrollTop.classList.add("progress-done");
            } else {
                alacenaScrollTop.classList.remove("progress-done");
            }
        });
        alacenaScrollTop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        });
    }
    /*-- alacena scroll top scripts end --*/

    // canvas area
    jQuery(document).ready(function ($) {
        let autoPlayDelay = 1500;
        let options = {
            init: true,
            // Optional parameters
            loop: false,

            autoplay: {
                delay: autoPlayDelay,
            },
            slidesPerView: 4,
            spaceBetween: 30,

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        };
        let mySwiper = new Swiper(".swiper-container", options);
        let slidersCount = mySwiper.params.loop ? mySwiper.slides.length - 2 : mySwiper.slides.length;
        let widthParts = 100 / slidersCount;
        $(".swiper-counter .total").html(slidersCount);
        for (let i = 0; i < slidersCount; i++) {
            $(".swiper-progress-bar .progress-sections").append("<span></span>");
        }
        function initProgressBar() {
            let calcProgress = (slidersCount - 1) * (autoPlayDelay + mySwiper.params.speed);
            calcProgress += autoPlayDelay;
            $(".swiper-progress-bar .progress").animate(
                {
                    width: "100%",
                },
                calcProgress,
                "linear"
            );
        }
        initProgressBar();
        mySwiper.on("slideChange", function () {
            let progress = $(".swiper-progress-bar .progress");

            $(".swiper-counter .current").html(this.activeIndex + 1);

            if (
                (this.progress == -0 || (this.progress == 1 && this.params.loop)) &&
                !progress.parent().is(".stopped")
            ) {
                progress.css("width", "0");
                if (this.activeIndex == 0) {
                    initProgressBar();
                }
            }
            if (progress.parent().is(".stopped")) {
                progress.animate(
                    {
                        width: Math.round(widthParts * (this.activeIndex + 1)) + "%",
                    },
                    this.params.speed,
                    "linear"
                );
            }
        });
        mySwiper.on("touchMove", function () {
            $(".swiper-progress-bar .progress").stop().parent().addClass("stopped");
        });
    });

    var popupvideos = $(".popup-videos-button");
    if (popupvideos.length) {
        $(".popup-videos-button").magnificPopup({
            disableOn: 10,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
    }
    /*-- canvas menu scripts start --*/
    var navexpander = $("#canva_expander");
    if (navexpander.length) {
        $("#canva_expander, #canva_close, #alacena-overlay").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("canvas_expanded");
        });
    }

    $(".mobile-navbar-menu a").each(function () {
        var href = $(this).attr("href");
        if ((href = "#")) {
            $(this).addClass("hash");
        } else {
            $(this).removeClass("hash");
        }
    });
    $.fn.menumaker = function (options) {
        var mobile_menu = $(this),
            settings = $.extend(
                {
                    format: "dropdown",
                    sticky: false,
                },
                options
            );
        return this.each(function () {
            mobile_menu.find("li ul").parent().addClass("has-sub");
            var multiTg = function () {
                mobile_menu.find(".has-sub").prepend('<span class="submenu-button"><em></em></span>');
                mobile_menu.find(".hash").parent().addClass("hash-has-sub");
                mobile_menu.find(".submenu-button").on("click", function () {
                    if ($(this).parent().siblings("li").hasClass("active")) {
                        $(this).parent().siblings("li").removeClass("active");
                        $(this).parent().siblings("li").find(".submenu-button").removeClass("submenu-opened");
                        $(this).parent().addClass("active");
                        $(this).addClass("submenu-opened");
                        if (
                            $(this).parent().siblings("li").find(".submenu-button").siblings("ul").hasClass("open-sub")
                        ) {
                            $(this)
                                .parent()
                                .siblings("li")
                                .find(".submenu-button")
                                .siblings("ul")
                                .removeClass("open-sub")
                                .hide("fadeIn");
                            $(this).parent().siblings("li").find(".submenu-button").siblings("ul").hide("fadeIn");
                        } else {
                            $(this)
                                .parent()
                                .siblings("li")
                                .find(".submenu-button")
                                .siblings("ul")
                                .addClass("open-sub")
                                .hide("fadeIn");
                            $(this)
                                .parent()
                                .siblings("li")
                                .find(".submenu-button")
                                .siblings("ul")
                                .slideToggle()
                                .show("fadeIn");
                        }

                        if ($(this).siblings("ul").hasClass("open-sub")) {
                            $(this).siblings("ul").removeClass("open-sub").hide("fadeIn");
                            $(this).siblings("ul").hide("fadeIn");
                            $(this).parent().removeClass("active");
                            $(this).removeClass("submenu-opened");
                        } else {
                            $(this).siblings("ul").addClass("open-sub").hide("fadeIn");
                            $(this).siblings("ul").slideToggle().show("fadeIn");
                        }
                    } else {
                        $(this).parent().addClass("active");
                        $(this).addClass("submenu-opened");
                        if ($(this).siblings("ul").hasClass("open-sub")) {
                            $(this).siblings("ul").removeClass("open-sub").hide("fadeIn");
                            $(this).siblings("ul").hide("fadeIn");
                            $(this).parent().removeClass("active");
                            $(this).removeClass("submenu-opened");
                        } else {
                            $(this).siblings("ul").addClass("open-sub").hide("fadeIn");
                            $(this).siblings("ul").slideToggle().show("fadeIn");
                        }
                    }
                });
            };
            if (settings.format === "multitoggle") multiTg();
            else mobile_menu.addClass("dropdown");
            if (settings.sticky === true) mobile_menu.css("position", "fixed");
            var resizeFix = function () {
                if ($(window).width() > 991) {
                    mobile_menu.find("ul").show("fadeIn");
                    mobile_menu.find("ul.sub-menu").hide("fadeIn");
                }
            };
            resizeFix();
            return $(window).on("resize", resizeFix);
        });
    };

    var servicesSelect = $(".services_select");
    if (servicesSelect.length) {
        // Select Box Style
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "Services":*/
        x = document.getElementsByClassName("services_select");
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            ll = selElmnt.length;
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < ll; j++) {
                /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
            and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function (e) {
                /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
      except the current select box:*/
            var x,
                y,
                i,
                xl,
                yl,
                arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i);
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);
    }

    $(document).ready(function () {
        $("#mobile-navbar-menu").menumaker({
            format: "multitoggle",
        });
        /*-- splting js start --*/
        Splitting();
        ScrollOut({
            targets: "[data-splitting]",
        });
    });
    // Select Box Style
    var servicesSelect = $(".select-services");
    if (servicesSelect.length) {
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "Services":*/
        x = document.getElementsByClassName("select-services");
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            ll = selElmnt.length;
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement("DIV");
            a.setAttribute("class", "select-selected");
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");
            for (j = 1; j < ll; j++) {
                /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener("click", function (e) {
                    /*when an item is clicked, update the original select box,
            and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute("class");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener("click", function (e) {
                /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
      except the current select box:*/
            var x,
                y,
                i,
                xl,
                yl,
                arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i);
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        document.addEventListener("click", closeAllSelect);
    }
})(jQuery);
