document.addEventListener("DOMContentLoaded", (event) => {

    const brandsBtn = document.querySelector('.brands__show-all');
    const brandsShowAll = document.querySelector('.brands__show-all__link');
    const brandsArrow = document.querySelector('.brands__arrow');
    const brandsWrapper = document.querySelector('.brands__swiper-wrapper');

    //Раскрытие всех элементов раздела "Ремонт техники различных брендов"
    brandsBtn.addEventListener('click', function () {
        if (brandsBtn.dataset.allBrands=='false') {
            brandsWrapper.classList.remove('brands__swiper-wrapper--fixes-size');
            brandsWrapper.classList.add('swiper-wrapper_full-height');
            brandsArrow.classList.add('transform');
            brandsBtn.dataset.allBrands='true';
            brandsShowAll.textContent='Скрыть';
        } else {
            brandsWrapper.classList.add('brands__swiper-wrapper--fixes-size');
            brandsWrapper.classList.remove('swiper-wrapper_full-height');
            brandsArrow.classList.remove('transform');
            brandsBtn.dataset.allBrands='false';
            brandsShowAll.textContent='Показать все';
        };
    });

    const repairBtn = document.querySelector('.repair__show-all');
    const repairShowAll = document.querySelector('.repair__show-all__link');
    const repairArrow = document.querySelector('.repair__arrow');
    const repairWrapper = document.querySelector('.repair__swiper-wrapper');

    //Раскрытие всех элементов раздела "Ремонт различных видов техники"
    repairBtn.addEventListener('click', function () {
        if (repairBtn.dataset.allRepair=='false') {
            repairWrapper.classList.remove('repair__swiper-wrapper--fixes-size');
            repairWrapper.classList.add('swiper-wrapper_full-height');
            repairArrow.classList.add('transform');
            repairBtn.dataset.allRepair='true';
            repairShowAll.textContent='Скрыть';
        } else {
            repairWrapper.classList.add('repair__swiper-wrapper--fixes-size');
            repairWrapper.classList.remove('swiper-wrapper_full-height');
            repairArrow.classList.remove('transform');
            repairBtn.dataset.allRepair='false';
            repairShowAll.textContent='Показать все';
        };
    });

    const burger = document.querySelector('.icon_burger');
    const closeBtn = document.querySelector('.icon_close');
    const asideMenu = document.querySelector('.aside-body');
    const bodyContent = document.querySelector('.body__content');

    //Функция скрытия основной части страницы
    function hideBody() {
        bodyContent.classList.add('body__content--opacity0');
        bodyContent.classList.add('body__content--fixed');
    }

    //Открытие меню
    burger.addEventListener('click', function() {
        if ((burger.dataset.open == 'false')&&(window.innerWidth<1440)) {
            asideMenu.classList.remove('aside-body--opacity0');
            asideMenu.classList.add('aside-body--opacity1');
            hideBody();
            burger.dataset.open = 'true';
        };
    });

    const requestContent = document.querySelector('.wrapper-request');
    const feedbackContent = document.querySelector('.wrapper-feedback');
    const asideContainer = document.querySelector('.aside-container');

    //Функция закрытия меню
    function closeMenu() {
        asideMenu.classList.add('aside-body--opacity0');
        asideMenu.classList.remove('aside-body--opacity1');
        bodyContent.classList.remove('body__content--opacity0');
        bodyContent.classList.remove('body__content--fixed');
        burger.dataset.open = 'false';
    }

    //Закрытие меню с помощью кнопки
    closeBtn.addEventListener('click', function() {
        if ((feedbackContent.dataset.attr=='false')&&(requestContent.dataset.attr=='false')) {
            closeMenu();
        }
    });
    //Скрыть боковое меню и основной контент при 1440px
    function hideBodyAndMenu() {
      bodyContent.classList.add('body__content--fixed320');
      asideContainer.classList.add('menu-opacity0');
      asideContainer.classList.add('body__content--fixed');
  }
    //Открытие окон обратной связи и заказа звонка
    document.addEventListener('click', function(event) {
        let id = event.target.dataset.toggleId;
        if (!id) return;
        if (id=='feedbackCall') {
            let elem = document.getElementById('feedbackCall');
            elem.classList.remove('hidden');
            elem.dataset.attr='true';
            bodyContent.classList.add('body__content--opacity0');
            // hideBody();
            if (window.innerWidth>=1440) {
                // asideMenu.classList.add('menu-opacity0');
                hideBodyAndMenu();
            } else {
              bodyContent.classList.add('body__content--fixed');
            };
        };
        if (id=='requestCall') {
            let elem = document.getElementById('requestCall');
            elem.classList.remove('hidden');
            elem.dataset.attr='true';
            bodyContent.classList.add('body__content--opacity0');
            // hideBody();
            if(window.innerWidth>=1440) {
              hideBodyAndMenu();
            } else {
              bodyContent.classList.add('body__content--fixed');
            };
        };
    });
    //Показать боковое меню и основной контент
    function openBodyAndMenu() {
      bodyContent.classList.remove('body__content--fixed320');
      asideContainer.classList.remove('menu-opacity0');
      asideContainer.classList.remove('body__content--fixed');
  }
    //Закрытие окон обратной связи и заказа звонка
    document.addEventListener('click', function(event) {
        let id = event.target.dataset.toggleId;
        if (!id) return;
        if (id=='close') {
            if(window.innerWidth>=1440) {
                openBodyAndMenu();
                if (feedbackContent.dataset.attr=='true') {
                    let elem = document.getElementById('feedbackCall');
                    elem.classList.add('hidden');
                    elem.dataset.attr='false';
                }
                if (requestContent.dataset.attr=='true') {
                    let elem = document.getElementById('requestCall');
                    elem.classList.add('hidden');
                    elem.dataset.attr='false';
                }
                bodyContent.classList.remove('body__content--opacity0');
            } else {
                if (feedbackContent.dataset.attr=='true') {
                    let elem = document.getElementById('feedbackCall');
                    elem.classList.add('hidden');
                    elem.dataset.attr='false';
                }
                if (requestContent.dataset.attr=='true') {
                    let elem = document.getElementById('requestCall');
                    elem.classList.add('hidden');
                    elem.dataset.attr='false';
                }
                bodyContent.classList.remove('body__content--opacity0');
                if (burger.dataset.open=='true') {
                    // asideMenu.classList.add('aside-body--opacity1');
                    bodyContent.classList.remove('body__content--opacity1');
                    hideBody();
                }
            }
        }
    });

    //Закрытие меню при нажатии на заблюренную область
    asideContainer.addEventListener('click', (e) => {
        if ((!asideMenu.contains(e.target))&&(burger.dataset.open =='true')) {
            closeMenu();
        }
    });

    //свайпер
    let swiper = new Swiper(".swiper-container", {
        slidesPerView: 1.1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            400:{
                slidesPerView:1.5,
            },
            500:{
                slidesPerView:1.8,
            },
            600:{
                slidesPerView:2.3,
            },
            700:{
                slidesPerView:2.5,
            },
            768:{
                slidesPerView:11,
            },
        },
    });

});
