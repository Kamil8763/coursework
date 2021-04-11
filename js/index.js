/**********************************************************HEADER*************************************************************************/
/*код для бургер-меню*/
const btnMenu = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const toggleMenu = function() {
    menu.classList.toggle('is-active-menu');
}
btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('is-active-menu');

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});

/*открытие формы поиск*/

const btnForm = document.querySelector('.form__btn');
const form = document.querySelector('.form__input');
const toggleForm = function() {
    form.classList.toggle('form-active');
}

btnForm.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleForm();
});

document.addEventListener('click', function(e) {
    const targetForm = e.target;
    const its_form = targetForm == form || form.contains(targetForm);
    const its_btnForm = targetForm == btnForm;
    const form_is_active = form.classList.contains('form-active');

    if (!its_form && !its_btnForm && form_is_active) {
        toggleForm();
    }
});

/*выподающие списки*/
const btnClick1 = document.querySelector('.click1');
const list1 = document.querySelector('.list1');
const toggleList1 = function() {
    list1.classList.toggle('show');
}

btnClick1.addEventListener('click', function(e) {
    toggleList1();
});

document.addEventListener('click', function(e) {
    const targetList1 = e.target;
    const its_list1 = targetList1 == list1 || list1.contains(targetList1);
    const its_btnList1 = targetList1 == btnClick1;
    const list1_is_active = list1.classList.contains('show');

    if (!its_list1 && !its_btnList1 && list1_is_active) {
        toggleList1();
    }
});
/********/
const btnClick2 = document.querySelector('.click2');
const list2 = document.querySelector('.list2');
const toggleList2 = function() {
    list2.classList.toggle('show');
}

btnClick2.addEventListener('click', function(e) {
    toggleList2();
});

document.addEventListener('click', function(e) {
    const targetList2 = e.target;
    const its_list2 = targetList2 == list2 || list2.contains(targetList2);
    const its_btnList2 = targetList2 == btnClick2;
    const list2_is_active = list2.classList.contains('show');

    if (!its_list2 && !its_btnList2 && list2_is_active) {
        toggleList2();
    }
});
/********/
const btnClick3 = document.querySelector('.click3');
const list3 = document.querySelector('.list3');
const toggleList3 = function() {
    list3.classList.toggle('show');
}

btnClick3.addEventListener('click', function(e) {
    toggleList3();
});

document.addEventListener('click', function(e) {
    const targetList3 = e.target;
    const its_list3 = targetList3 == list3 || list3.contains(targetList3);
    const its_btnList3 = targetList3 == btnClick3;
    const list3_is_active = list3.classList.contains('show');

    if (!its_list3 && !its_btnList3 && list3_is_active) {
        toggleList3();
    }
});
/********/
const btnClick4 = document.querySelector('.click4');
const list4 = document.querySelector('.list4');
const toggleList4 = function() {
    list4.classList.toggle('show');
}

btnClick4.addEventListener('click', function(e) {
    toggleList4();
});

document.addEventListener('click', function(e) {
    const targetList4 = e.target;
    const its_list4 = targetList4 == list4 || list4.contains(targetList4);
    const its_btnList4 = targetList4 == btnClick4;
    const list4_is_active = list4.classList.contains('show');

    if (!its_list4 && !its_btnList4 && list4_is_active) {
        toggleList4();
    }
});
/********/
const btnClick5 = document.querySelector('.click5');
const list5 = document.querySelector('.list5');
const toggleList5 = function() {
    list5.classList.toggle('show');
}

btnClick5.addEventListener('click', function(e) {
    toggleList5();
});

document.addEventListener('click', function(e) {
    const targetList5 = e.target;
    const its_list5 = targetList5 == list5 || list5.contains(targetList5);
    const its_btnList5 = targetList5 == btnClick5;
    const list5_is_active = list5.classList.contains('show');

    if (!its_list5 && !its_btnList5 && list5_is_active) {
        toggleList5();
    }
});

/*Swiper для блока Hero***********************************************************************************************************/

const swiper = new Swiper('.hero__swiper', {
    loop: true,
    spaceBetween: 50,
    height: 100,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
});

/********************************************************Block Gallery***************************************************************************/
/*choices js фильтр**/
const element = document.querySelector('.select');
const choices = new Choices(element, {
    searchEnabled: false,
    silent: false,
    itemSelectText: ' ',
});
/*Swiper gallery*/
const swiper1 = new Swiper('.swiper__gallery', {

    loop: true,
    spaceBetween: 10,
    height: 367,

    pagination: {
        el: '.pagination__new',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.next__new',
        prevEl: '.prev__new',
    },

    breakpoints: {
        1400: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 50
        },

        740: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 34
        },

        321: {
            slidesPerView: 1,
            slidesPerColumn: 2,
            spaceBetween: 34
        },
    }
});

/*************************************************************CATALOG***************************************************************************/
/*Табы*/
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__btn').forEach(function(tabBtn) {
        tabBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.tabs').forEach(function(tabContent) {
                tabContent.classList.remove('tabs-active');
            })
            document.querySelectorAll('.tab').forEach(function(tabBtn) {
                tabBtn.classList.remove('catalog__btn--active');
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs-active');
            document.querySelector(`[data-path="${path}"]`).classList.add('catalog__btn--active');
        })
    })
})

/*переклчение  информации с фото по художнику*/
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion__btn').forEach(function(tabAutor) {
        tabAutor.addEventListener('click', function(event) {
            const info = event.currentTarget.dataset.info;
            document.querySelectorAll('.catalog__picture').forEach(function(tabContent) {
                tabContent.classList.remove('catalog__picture-active')
            })

            document.querySelectorAll('.accordion__btn').forEach(function(tabImg) {
                tabImg.classList.remove('accordion__btn--active');
            })
            document.querySelector(`[data-target="${info}"]`).classList.add('catalog__picture-active');
            document.querySelector(`[data-info="${info}"]`).classList.add('accordion__btn--active');
        })
    })
})

/*accordion*/

let accordion = document.querySelector('.accordion');
accordion.addEventListener('click', change);

function change(event) {
    let targ = event.target;
    if (targ.tagName !== 'H3') return;
    if (targ.classList.contains('select')) {
        hideAll();
        hideAll2();
        hideAll3();
        hideAll4();
        hideAll5();
    } else {
        hideAll();
        hideAll2();
        hideAll3();
        hideAll4();
        hideAll5();
        targ.classList.add('select');
        showText(targ.nextElementSibling);
    }
}

function hideAll() {
    var h3El = accordion.querySelectorAll('h3');
    var divEl = accordion.querySelectorAll('ul');
    for (let i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (let i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
        divEl[i].style.padding = '0';
    }
}

function showText(textEl) {
    textEl.style.height = textEl.scrollHeight + 'px';
    textEl.style.marginBottom = '25px';
    textEl.style.transition = 'all 1s ease-in-out';
}

let accordionTwo = document.querySelector('.accordion-two');
accordionTwo.addEventListener('click', change);

function hideAll2() {
    var h3El = accordionTwo.querySelectorAll('h3');
    var divEl = accordionTwo.querySelectorAll('ul');
    for (let i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (let i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
        divEl[i].style.padding = '0';
    }
}

let accordionFree = document.querySelector('.accordion-free');
accordionFree.addEventListener('click', change);

function hideAll3() {
    var h3El = accordionFree.querySelectorAll('h3');
    var divEl = accordionFree.querySelectorAll('ul');
    for (let i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (let i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
        divEl[i].style.padding = '0';
    }
}

let accordionFour = document.querySelector('.accordion-four');
accordionFour.addEventListener('click', change);

function hideAll4() {
    var h3El = accordionFour.querySelectorAll('h3');
    var divEl = accordionFour.querySelectorAll('ul');
    for (let i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (let i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
        divEl[i].style.padding = '0';
    }
}

let accordionFive = document.querySelector('.accordion-five');
accordionFive.addEventListener('click', change);

function hideAll5() {
    var h3El = accordionFive.querySelectorAll('h3');
    var divEl = accordionFive.querySelectorAll('ul');
    for (let i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (let i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
        divEl[i].style.padding = '0';
    }
}
/*************************************************************EVENT*****************************************************************/

const btnEvent = document.querySelector('.event__btn');
const open = document.querySelector('.none');
const open1 = document.querySelector('.none1');
const open2 = document.querySelector('.none2');

const toggleEvent = function() {
    open.classList.add('event__item-active');
    open1.classList.add('event__item-active');
    open2.classList.add('event__item-active');
    btnEvent.style.display = 'none'
}

btnEvent.addEventListener('click', function(o) {
    o.stopPropagation();
    toggleEvent();
})

const swiperEvent = new Swiper('.event__swiper', {
    loop: true,
    pagination: {
        el: '.event__pagination',
        clickable: true,
    },

});

/**************************************************************publications****************************************************************/

const swiperPublic = new Swiper('.publications__swiper', {
    loop: true,

    pagination: {
        el: '.pagination__product',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.product__next',
        prevEl: '.product__prev',
    },

    breakpoints: {

        1350: {
            slidesPerView: 3,
            spaceBetween: 50
        },

        1000: {
            slidesPerView: 2,
            spaceBetween: 34,
        },

        740: {
            slidesPerView: 2,
            spaceBetween: 34,
        },

    }

});
window.addEventListener('DOMContentLoaded', function() {
        document.querySelector('#formtitle').addEventListener('click', function() {
            document.querySelector('#formcategory').classList.toggle('open')
        })
    })
    /*****************************************************************Projects**********************************************************************/
    /*swiper*/
const swiperProjects = new Swiper('.swiper__projects', {
    loop: true,



    navigation: {
        nextEl: '.next__projects',
        prevEl: '.prev__projects',
    },

    breakpoints: {

        1350: {
            slidesPerView: 3,
            spaceBetween: 50,
        },

        320: {
            slidesPerView: 2,
            spaceBetween: 34,
        },

        100: {
            slidesPerView: 1,
            spaceBetween: 34,
        },
    }

});

/*form*/

let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.address__form', {
    rules: {
        name: {
            required: true,
            minLength: 5,
            maxLength: 30,
        },
        tel: {
            required: true,
            function(name, value) {
                const phone = selector.inputmask.unmaskedvalue()
                console.log(phone)
                return Number(phone) && phone.length === 10
            }
        },
    },
});

/*яндекс карта*/
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("Mymap", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75846306898368, 37.601079499999905],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15,
    });
    var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/map.png',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
}
