var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});
var swiper2 = new Swiper(".swiper_grid_4", {
    slidesPerView: 1,
    spaceBetween: 10,
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
var swiper3 = new Swiper(".swiper_grid_4_2", {
    slidesPerView: 1,
    spaceBetween: 10,

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
var review_swiper = new Swiper(".review-swiper", {
    navigation: {
        nextEl: ".for-next",
        prevEl: ".for-prev",
    },
});