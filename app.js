var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
})

var swiper2 = new Swiper(".mySwiper2", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
})

var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    },

    autoplay: {
        delay: 2000,
    },
    loop: true,
})

var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },

    loop: true,
})

const deliveryBtn = document.querySelector(".delivery-btn")
const paymentBtn = document.querySelector(".payment-btn")
const deliveryInfo = document.querySelector(".delivery-info")
const paymentInfo = document.querySelector(".payment-info")

deliveryBtn.addEventListener("click", () => {
    deliveryInfo.classList.remove("hidden")
    paymentInfo.classList.add("hidden")
    deliveryBtn.classList.add('active')
    paymentBtn.classList.remove('active')
})

paymentBtn.addEventListener("click", () => {
    paymentInfo.classList.remove("hidden")
    deliveryInfo.classList.add("hidden")
    paymentBtn.classList.add('active')
    deliveryBtn.classList.remove('active')
})
