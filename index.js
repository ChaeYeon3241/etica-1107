/* 스크롤 히든, 탑버튼 */

console.clear();
var $window = $(window);

var windowScrollTop = 0;
var windowHeight = 0;

$window.scroll(function () {
    windowScrollTop = $window.scrollTop();
}).scroll();

$window.resize(function () {
    windowHeight = $window.height();
}).resize();

function TopBar__show() {
    $('html').addClass('top-bar-actived');
}

function TopBar__init() {
    $(window).on('wheel', function (event) {
        var scrollTop = $window.scrollTop();

        if (event.originalEvent.deltaY < 0) {
            TopBar__show();
        } else {
            TopBar__hide();
        }
    });

    function TopBar__hide() {
        $('html').removeClass('top-bar-actived');
    }

    TopBar__show();

    $(window).on('keyup', function (event) {
        if (event.keyCode == 38 || event.keyCode == 36 || event.keyCode == 33) {
            TopBar__show();
        } else if (event.keyCode == 40 || event.keyCode == 35 || event.keyCode == 34) {
            TopBar__hide();
        }
    });

    $window.scroll(function () {
        console.log(windowHeight);
        if (windowScrollTop == 0) {
            TopBar__show();
        }
    });
}

TopBar__init();

function ToTopBtn__init() {
    $('.btn-to-top').stop().click(function () {
        TopBar__show();

        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
}

ToTopBtn__init();

/*슬릭 슬라이더*/

function SliderBox1__init() {
    $('.main-slider-box-1 .slick').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        arrows: true,
        prevArrow: ".slider-box-1  .arrows > .btn-arrow-left",
        nextArrow: ".slider-box-1  .arrows > .btn-arrow-right"
    });
}

SliderBox1__init();


/* 가로 스크롤 */

(function ($) {

    $(".mask-products").on('scroll', function () {
        $val = $(this).scrollLeft();

        if ($(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth) {
            $(".nav-next").hide();
        } else {
            $(".nav-next").show();
        }

        if ($val == 0) {
            $(".nav-prev").hide();
        } else {
            $(".nav-prev").show();
        }
    });
    console.log('init-scroll: ' + $(".nav-next").scrollLeft());
    $(".nav-next").on("click", function () {
        $(".mask-products").animate({
            scrollLeft: '+=460'
        }, 200);

    });
    $(".nav-prev").on("click", function () {
        $(".mask-products").animate({
            scrollLeft: '-=460'
        }, 200);
    });



})(jQuery);