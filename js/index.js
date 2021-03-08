/*код для бургер-меню****************************************************************************/
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

/*открытие формы поиск******************************************************************************/

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

/*выподающие списки**********************************************************************************************************/
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

/*Swiper для блока Hero**************************************************************************/

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

/*секция Галерея************************************************************************************************************/


/*choices js фильтр******************************************************/

const element = document.querySelector('.select');
const choices = new Choices(element, {
    searchEnabled: false,
    silent: false,
    itemSelectText: ' ',

});

/*Swiper gallery***********************************************************/

const swiper1 = new Swiper('.swiper__gallery', {
    loop: true,
    slidesPerView: 1,
    slidesPerColumn: 2,
    spaceBetween: 0,

    pagination: {
        el: '.pagination__gallery',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.next__gallery',
        prevEl: '.prev__gallery',
    },

    breakpoints: {

        1450: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 50
        },

        730: {
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

/*Catalog*****************************************************************/

/*accordion*/

var accordion = document.querySelector('.accordion');
accordion.addEventListener('click', change);

function change(event) {
    var targ = event.target;
    if (targ.tagName !== 'H3') return;
    if (targ.classList.contains('select')) {
        hideAll();
    } else {
        hideAll();
        targ.classList.add('select');
        showText(targ.nextElementSibling);
    }
}

function hideAll() {
    var h3El = accordion.querySelectorAll('h3');
    var divEl = accordion.querySelectorAll('ul');
    for (var i = 0; i < h3El.length; i++) {
        h3El[i].classList.remove('select');
    }
    for (var i = 0; i < divEl.length; i++) {
        divEl[i].style.height = '0';
        divEl[i].style.padding = '0';
    }
}

function showText(textEl) {
    textEl.style.height = '342px';
    textEl.style.paddingTop = '25px';
}

/*переклчение  информации с фото по художнику*/

const btnBenedetto = document.querySelector('.benedettoLink');
const benedetto = document.querySelector('.benedetto');
const toggleCatalog = function() {
    benedetto.classList.toggle('catalog__picture-active');
}

btnBenedetto.addEventListener('click', function(e) {
    toggleCatalog();
});

document.addEventListener('click', function(e) {
    const target1 = e.target;
    const its_menu1 = target1 == benedetto || benedetto.contains(target1);
    const its_btnMenu1 = target1 == btnBenedetto;
    const menu_is_active1 = benedetto.classList.contains('catalog__picture-active');

    if (!its_menu1 && !its_btnMenu1 && menu_is_active1) {
        toggleCatalog();
    }
});



/**************************************************************/
const btnDomenico = document.querySelector('.domenicoLink');
const domenico = document.querySelector('.domenico');

const toggleCatalog1 = function() {
    domenico.classList.toggle('catalog__picture-active');
}

btnDomenico.addEventListener('click', function(e) {
    toggleCatalog1();
});

document.addEventListener('click', function(e) {
    const target2 = e.target;
    const its_menu2 = target2 == domenico || domenico.contains(target2);
    const its_btnMenu2 = target2 == btnDomenico;
    const menu_is_active2 = domenico.classList.contains('catalog__picture-active');

    if (!its_menu2 && !its_btnMenu2 && menu_is_active2) {
        toggleCatalog1();
    }
});
/***************************************************************************/

const btnBergonione = document.querySelector('.bergonioneLink');
const bergonione = document.querySelector('.bergonione ');

const toggleCatalog2 = function() {
    bergonione.classList.toggle('catalog__picture-active');
}

btnBergonione.addEventListener('click', function(e) {
    toggleCatalog2();
});

document.addEventListener('click', function(e) {
    const target3 = e.target;
    const its_menu3 = target3 == bergonione || bergonione.contains(target3);
    const its_btnMenu3 = target3 == btnBergonione;
    const menu_is_active3 = bergonione.classList.contains('catalog__picture-active');

    if (!its_menu3 && !its_btnMenu3 && menu_is_active3) {
        toggleCatalog2();
    }
});

/****************************************************************************/







/************************************************************************************/

/*Табы*/

window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__btn').forEach(function(tabBtn) {
        tabBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.tabs').forEach(function(tabContent) {
                tabContent.classList.remove('tabs-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs-active');
        })
    })
})