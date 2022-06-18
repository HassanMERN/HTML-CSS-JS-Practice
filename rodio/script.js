let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let strategy = document.querySelector('.strategy');
let planning  = document.querySelector('.planning');
let aquisition = document.querySelector('.aquisition');
let promotion = document.querySelector('.promotion');

let Strategy = document.querySelector('.Strategy');
let Planning  = document.querySelector('.Planning');
let Aquisition = document.querySelector('.Aquisition');
let Promotion = document.querySelector('.Promotion');

function activateStrategy(){
    strategy.classList.toggle('active');
    if(aquisition.classList.contains('active')){
        aquisition.classList.remove('active');
    }
    
    if(planning.classList.contains('active')){
        planning.classList.remove('active');
    }

    if(promotion.classList.contains('active')){
        promotion.classList.remove('active');
    }

    Strategy.classList.toggle('Active');
    if(Aquisition.classList.contains('Active')){
        Aquisition.classList.remove('Active');
    }
    
    if(Planning.classList.contains('Active')){
        Planning.classList.remove('Active');
    }

    if(Promotion.classList.contains('Active')){
        Promotion.classList.remove('Active');
    }

}

function activateAquisition(){
    aquisition.classList.toggle('active');
    if(strategy.classList.contains('active')){
        strategy.classList.remove('active');
    }
    
    if(planning.classList.contains('active')){
        planning.classList.remove('active');
    }

    if(promotion.classList.contains('active')){
        promotion.classList.remove('active');
    }

    Aquisition.classList.toggle('Active');
    if(Strategy.classList.contains('Active')){
        Strategy.classList.remove('Active');
    }
    
    if(Planning.classList.contains('Active')){
        Planning.classList.remove('Active');
    }

    if(Promotion.classList.contains('Active')){
        Promotion.classList.remove('Active');
    }
}

function activatePlanning(){
    planning.classList.toggle('active');

    if(aquisition.classList.contains('active')){
        aquisition.classList.remove('active');
    }
    
    if(strategy.classList.contains('active')){
        strategy.classList.remove('active');
    }

    if(promotion.classList.contains('active')){
        promotion.classList.remove('active');
    }

    Planning.classList.toggle('Active');

    if(Aquisition.classList.contains('Active')){
        Aquisition.classList.remove('Active');
    }
    
    if(Strategy.classList.contains('Active')){
        Strategy.classList.remove('Active');
    }

    if(Promotion.classList.contains('Active')){
        Promotion.classList.remove('Active');
    }
}

function activatePromotion(){
    promotion.classList.toggle('active');
    if(aquisition.classList.contains('active')){
        aquisition.classList.remove('active');
    }
    
    if(planning.classList.contains('active')){
        planning.classList.remove('active');
    }

    if(strategy.classList.contains('active')){
        strategy.classList.remove('active');
    }

    Promotion.classList.toggle('Active');
    if(Aquisition.classList.contains('Active')){
        Aquisition.classList.remove('Active');
    }
    
    if(Planning.classList.contains('Active')){
        Planning.classList.remove('Active');
    }

    if(Strategy.classList.contains('Active')){
        Strategy.classList.remove('Active');
    }
}

first = document.querySelector('.first');
second = document.querySelector('.second');
third = document.querySelector('.third');

colfirst = document.querySelector('.col-first');
colsecond = document.querySelector('.col-second');
colthird = document.querySelector('.col-third');

function showFirst(){
    first.classList.toggle('Act');
    colfirst.innerText = "-"

    second.classList.remove('Act');
    third.classList.remove('Act')
    colsecond.innerText = "+";
    colthird.innerText = "+";
}

function showSecond(){
    second.classList.toggle('Act');
    colsecond.innerText = "-"

    first.classList.remove('Act');
    third.classList.remove('Act')
    colfirst.innerText = "+";
    colthird.innerText = "+";
}

function showThird(){
    third.classList.toggle('Act');
    colthird.innerText = "-"

    second.classList.remove('Act');
    first.classList.remove('Act')
    colsecond.innerText = "+";
    colfirst.innerText = "+";
}

let con1 = document.querySelector('.con1');
let con2 = document.querySelector('.con2');
let con3 = document.querySelector('.con3');
let con4 = document.querySelector('.con4');

function active1(){
    con1.classList.toggle("rec-act");
    con2.classList.remove("rec-act");
    con3.classList.remove("rec-act");
    con4.classList.remove("rec-act");

    con1.parentElement.classList.toggle("swiper-slide-active");
    con2.parentElement.classList.remove("swiper-slide-active");
    con3.parentElement.classList.remove("swiper-slide-active");
    con4.parentElement.classList.remove("swiper-slide-active");

}

function active2(){
    con2.classList.toggle("rec-act");
    con1.classList.remove("rec-act");
    con3.classList.remove("rec-act");
    con4.classList.remove("rec-act");

    con2.parentElement.classList.toggle("swiper-slide-active");
    con1.parentElement.classList.remove("swiper-slide-active");
    con3.parentElement.classList.remove("swiper-slide-active");
    con4.parentElement.classList.remove("swiper-slide-active");
}

function active3(){
    con3.classList.toggle("rec-act");
    con2.classList.remove("rec-act");
    con1.classList.remove("rec-act");
    con4.classList.remove("rec-act");

    con3.parentElement.classList.toggle("swiper-slide-active");
    con2.parentElement.classList.remove("swiper-slide-active");
    con1.parentElement.classList.remove("swiper-slide-active");
    con4.parentElement.classList.remove("swiper-slide-active");
}

function active4(){
    con4.classList.toggle("rec-act");
    con2.classList.remove("rec-act");
    con3.classList.remove("rec-act");
    con1.classList.remove("rec-act");

    con4.parentElement.classList.toggle("swiper-slide-active");
    con2.parentElement.classList.remove("swiper-slide-active");
    con3.parentElement.classList.remove("swiper-slide-active");
    con1.parentElement.classList.remove("swiper-slide-active");
}


var swiper = new Swiper(".spap-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 4500,
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
})

var swiper2 = new Swiper(".recent-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides:true,
    autoplay: {
        delay: 4500,
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
})