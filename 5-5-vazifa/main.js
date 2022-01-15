
var swiper = new Swiper('.swiper-container', {
        spaceBetween: 100,
        centeredSlides: true, 
        direction: "horizontal",
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
});
// MOVE UP
const scrollTopIcon = document.querySelector(".move-up");

window.onscroll = () => {
  if (window.scrollY > 500) {
    scrollTopIcon.classList.remove("move-up-bottom");
  } else if (window.scrollY < 500) {
    scrollTopIcon.classList.add("move-up-bottom");
  }
};
scrollTopIcon.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 30) {
        document.getElementById("header-2").style.top = "0px";
        document.getElementById("header-2").style.background = "#000";
} else {
    document.getElementById("header-2").style.top = "50px";
    document.getElementById("header-2").style.background = "none";
    }
}

// slider

var splide = new Splide( '.splide', {
    perPage: 3,
    gap    : '1rem',
    autoplay: 2,
    loop: true,
    Infinity: true,
    breakpoints: {
        992: {
        perPage: 2,
        gap    : '.4rem',
        height : '100%',
        width : '100%',
        centeredSlides: 'center',
        },
        768: {
        perPage: 1,
        gap    : '.4rem',
        height : '100%',
        width : '100%',
        centeredSlides: 'center',
},
    },
} );

splide.mount();

var swiper = new Swiper('.swiper-container-2', {
    spaceBetween: 10,
    centeredSlides: true, 
    direction: "horizontal",
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

var swiper1 = new Swiper(".mySwiper-3", {
    slidesPerView: 5,
    spaceBetween: 100,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
            },
            424: {
                slidesPerView: 1,
            },
        },
    },
});



$("#toggle-open").click(function(){
    $(".slide-widgest-wrap").toggleClass("mystyle"),
    $(".side-widgest").toggleClass("mystyle");
});

$("#toggle-close").click(function(){
    $(".slide-widgest-wrap").toggleClass("mystyle"),
    $(".side-widgest").toggleClass("mystyle");
});

$("#addplus").click(function(){
    $(".dr-5").toggleClass("dropadd");
});

$("#addplus2").click(function(){
    $(".dr-6").toggleClass("dropadd");
});

$("#toggle").click(function(){
    $(".main-links-1").toggleClass("dropadd2");
});
