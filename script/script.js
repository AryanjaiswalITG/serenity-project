var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});
var swiper2 = new Swiper(".swiper_grid_4", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextE1: ".swiper-button-next",
        nextE2: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});