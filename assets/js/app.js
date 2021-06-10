$(function() {

    var header = $("#header"),
        introH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop(),
        doc_w = $(window).width(),
        company__slider = $("#company__slider");


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
        company__slider();
    });


    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    function company__slider() {
        if ( doc_w < '992'){
            $(".company__inner").removeClass("company__slider");
        }
    }




    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;


        $("html, body").animate({
            scrollTop:  blockOffset
        }, 700);
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    $(".nav__link").on("click", function(event) {
        event.preventDefault();

        $("#nav_toggle").removeClass("active");
        $("#nav").removeClass("active");
    });






    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });








    company__slider.slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 500
    });



    //Slider Photogrophy
    $("#photography__btns a").on("click", function(event) {
        event.preventDefault();

        var $this = $(this);

        $("#photography__btns a").removeClass("active");
        $this.addClass("active");

    });



    $(".italy__btn").on("click", function(event) {
        event.preventDefault();

        $(".photography__photos").removeClass("show");
        $("#italy__photos").addClass("show");

    });


    $(".australia__btn").on("click", function(event) {
        event.preventDefault();

        $(".photography__photos").removeClass("show");
        $("#australia__photos").addClass("show");

    });


    $(".india__btn").on("click", function(event) {
        event.preventDefault();

        $(".photography__photos").removeClass("show");
        $("#india__photos").addClass("show");

    });



    $(".brazil__btn").on("click", function(event) {
        event.preventDefault();

        $(".photography__photos").removeClass("show");
        $("#brazil__photos").addClass("show");

    });


});
