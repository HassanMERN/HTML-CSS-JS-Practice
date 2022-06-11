let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }
    else {
        document.querySelector('.header').classList.remove('active')
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }
    else {
        document.querySelector('.header').classList.remove('active')
    }

}

document.querySelector('.login-btn').onclick = () => {
    document.querySelector('.loginFormContainer').classList.toggle('active');
}

document.querySelector('#closeLoginForm').onclick = () => {
    document.querySelector('.loginFormContainer').classList.remove('active');
}

document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-paralax').forEach(elm => {
        let speed = elm.getAttribute('data-speed')
        let x = (window.innerWidth - e.pageX * speed) / 90
        let y = (window.innerHeight - e.pageY * speed) / 90

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`
    })
}


document.querySelector('#closeLoginForm').onclick = () => {
    document.querySelector('.loginFormContainer').classList.remove('active');
}

document.querySelector('.home').onmouseleave = (e) => {
    document.querySelectorAll('.home-paralax').forEach(elm => {
        let speed = elm.getAttribute('data-speed')
        let x = (window.innerWidth - e.pageX * speed) / 90
        let y = (window.innerHeight - e.pageY * speed) / 90

        elm.style.transform = `translateX(0px) translateY(0px)`
    })
}

var swiper = new Swiper(".vehicle_slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    centeredSlides:true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "0": {
            slidesPerView: 1,
        },
        "770": {
            slidesPerView: 2,
        },
        "992": {
            slidesPerView: 3,
        },
    },
});