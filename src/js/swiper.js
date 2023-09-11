import Swiper from '../../node_modules/swiper/swiper-bundle';

const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1.1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        400:{
            slidesPerView:1.5,
        },
        500:{
            slidesPerView:1.8,
        },
        600:{
            slidesPerView:2.3,
        },
        700:{
            slidesPerView:2.5,
        },
        768:{
            slidesPerView:11,
        },
    },
});
