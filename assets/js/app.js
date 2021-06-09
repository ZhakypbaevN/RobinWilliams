$(function() {

    var header = $("#header"),
        introH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop(),
        doc_w = $(window).width();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
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



    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });




    if ( doc_w > '992'){
        var show = 4;
        var w = $('#slider').width() / show;
        var l = $('.slide').length;
        $('.slide').width(w);
        $('#slide-container').width(w * l)

        function slider() {
            $('.slide:first-child').animate({
                marginLeft: -w
            }, 1500, function () {
                $(this).appendTo($(this).parent()).css({marginLeft: 0});
            });
        }
        var timer = setInterval(slider, 1500);

        $('#slider').hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(slider, 1500);
        });

    }



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
