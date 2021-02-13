/*код для бургер-меню*/



window.addEventListener('DOMContentLoaded', function(open) {
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('is-active')
    })
})

/*открытие формы поиск*/
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.form__btn').addEventListener('click', function() {
        document.querySelector('.form__input').classList.toggle('form-active')
    })
})

/*выподающие списки*/

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.click1').addEventListener('click', function() {
        document.querySelector('.list1').classList.toggle('show');
    })
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.click2').addEventListener('click', function() {
        document.querySelector('.list2').classList.toggle('show');
    })
})


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.click3').addEventListener('click', function() {
        document.querySelector('.list3').classList.toggle('show');
    })
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.click4').addEventListener('click', function() {
        document.querySelector('.list4').classList.toggle('show');
    })
})


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.click5').addEventListener('click', function() {
        document.querySelector('.list5').classList.toggle('show');
    })
})

/*Swiper для блока Hero*/

const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 50,
    height: 100,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
});