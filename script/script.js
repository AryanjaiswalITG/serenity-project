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
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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
var review_swiper = new Swiper(".review-swiper", {
    navigation: {
        nextEl: ".for-next",
        prevEl: ".for-prev",
    },
});



stored_age()
// age verification 
let user_age = document.getElementById("user-age");
let age_submit = document.getElementById("age-submit");
age_submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (user_age.value >= 18 && user_age.value > 0 && user_age.value < 100) {
        document.querySelector(".age-varification").style.display = "none";
        document.querySelector(".welcome").style.display = "block"
        localStorage.setItem('userage', 'true');
        welcome_popup()
    }
    else {
        document.querySelector(".age-varification").style.display = "none";
        document.querySelector(".error-cover").style.display = "block";
    }
});

function stored_age() {
    if (localStorage.getItem("userage") == "true") {
        document.querySelector(".age-varification-wraper").style.display = "none";
    } else if (localStorage.getItem("userage") == "false") {
        document.querySelector(".age-varification").style.display = "none";
        document.querySelector(".error-cover").style.display = "block";
    }
}
function welcome_popup() {
    setInterval(() => {
        document.querySelector(".age-varification-wraper").style.display = "none";
    }, 2000);
}