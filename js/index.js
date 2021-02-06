function list1() {
    document.getElementById("list1").classList.toggle('show');
}

function list2() {
    document.getElementById("list2").classList.toggle('show');
}

function list3() {
    document.getElementById("list3").classList.toggle('show');
}

function list4() {
    document.getElementById("list4").classList.toggle('show');
}

function list5() {
    document.getElementById("list5").classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.click')) {

        var dropdowns = document.getElementsByClassName("submenu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


/*******************************************************************************/
/*код для бургер-меню*/
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    })
})


window.onclick = function(event) {
        if (!event.target.matches('.click')) {

            var dropdowns = document.getElementsByClassName("menu");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    /*******************************************************************************/

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

/**/