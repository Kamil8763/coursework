/*код для бургер-меню****************************************************************************/
const btnMenu = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const toggleMenu = function() {
    menu.classList.toggle('is-active');
}

btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('is-active');

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
/********************************************************************************/

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

/*секция Галерея*/