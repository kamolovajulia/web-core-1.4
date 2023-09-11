document.addEventListener("DOMContentLoaded", (event) => {

    const burger = document.querySelector('.icon__burger');
    const closeBtn = document.querySelector('.icon__close-menu');
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
            if (window.innerWidth>=768) {
              asideContainer.classList.add('aside-container-1000');
            }
        };
    });

    const requestContent = document.querySelector('.wrapper-request');
    const feedbackContent = document.querySelector('.wrapper-feedback');
    const asideContainer = document.querySelector('.aside-container');

    //Функция закрытия меню
    function closeMenu() {
        asideMenu.classList.add('aside-body--opacity0');
        asideMenu.classList.remove('aside-body--opacity1');
        burger.dataset.open = 'false';
    }

    function openBody() {
      bodyContent.classList.remove('body__content--opacity0');
      bodyContent.classList.remove('body__content--fixed');
    }

    //Закрытие меню с помощью кнопки
    closeBtn.addEventListener('click', function() {
            closeMenu();
            if (window.innerWidth>=768) {
              asideContainer.classList.remove('aside-container-1000');
            }
            if (requestContent.classList.contains('hidden') && feedbackContent.classList.contains('hidden')) {
              openBody();
            }
        // }
    });

    //Скрыть боковое меню и основной контент при 1440px
    function hideBodyAndMenu() {
      bodyContent.classList.add('body__content--fixed320');
      asideContainer.classList.add('menu-opacity0');
      asideContainer.classList.add('body__content--fixed');
    }

    const call = document.querySelectorAll('.icon__call');
    const chat = document.querySelectorAll('.icon__chat');

    //Открытие окон обратной связи и заказа звонка
    for (i=0; i<call.length; i++) {
        call[i].addEventListener('click', function() {
            requestContent.classList.remove('hidden');
            bodyContent.classList.add('body__content--opacity0');
            if (asideMenu.classList.contains('aside-body--opacity1')) {
              asideContainer.classList.add('aside-container--absolute');
            }
            if(window.innerWidth>=1440) {
              hideBodyAndMenu();
            } else {
              bodyContent.classList.add('body__content--fixed');
            };
    });
    }
    for (i=0; i<chat.length; i++) {
      chat[i].addEventListener('click', function() {
        feedbackContent.classList.remove('hidden');
        bodyContent.classList.add('body__content--opacity0');
        if (asideMenu.classList.contains('aside-body--opacity1')) {
          asideContainer.classList.add('aside-container--absolute');
        }
        if (window.innerWidth>=1440) {
            hideBodyAndMenu();
        } else {
          bodyContent.classList.add('body__content--fixed');
        };
      });
    }

    //Показать боковое меню и основной контент
    function openBodyAndMenu() {
      bodyContent.classList.remove('body__content--fixed320');
      asideContainer.classList.remove('menu-opacity0');
      asideContainer.classList.remove('body__content--fixed');
    }

    const close = document.querySelectorAll('.icon__close');

    function closeFeedback() {
      feedbackContent.classList.add('hidden');
    }

    function closeRequest() {
      requestContent.classList.add('hidden');
    }

    //Закрытие окон обратной связи и заказа звонка
    for (i=0; i<chat.length; i++) {
      close[i].addEventListener('click', function() {
        bodyContent.classList.remove('body__content--opacity0');
            if(window.innerWidth>=1440) {
                openBodyAndMenu();
                if (!feedbackContent.classList.contains('hidden')) {
                  closeFeedback();
                }
                if (!requestContent.classList.contains('hidden')) {
                  closeRequest();
                }

            }
            else {
              bodyContent.classList.remove('body__content--fixed');
              if (asideMenu.classList.contains('aside-body--opacity1')) {
                asideContainer.classList.remove('aside-container--absolute');
              }
                if (!feedbackContent.classList.contains('hidden')) {
                  closeFeedback();
                }
                if (!requestContent.classList.contains('hidden')) {
                  closeRequest();
                }
                if (burger.dataset.open=='true') {
                    bodyContent.classList.remove('body__content--opacity1');
                    hideBody();
                }
            }
        });
    }

    //Закрытие меню при нажатии на заблюренную область
    asideContainer.addEventListener('click', (e) => {
        if ((!asideMenu.contains(e.target))&&(burger.dataset.open =='true')) {
            closeMenu();
            if (window.innerWidth>=768) {
              asideContainer.classList.remove('aside-container-1000');
            }
            if (requestContent.classList.contains('hidden') && feedbackContent.classList.contains('hidden')) {
              openBody();
            }
        }
    });

    const Feedback = document.querySelector('.feedback');

    feedbackContent.addEventListener('click', (e) => {

      if ((!Feedback.contains(e.target))&&(!feedbackContent.classList.contains('hidden'))) {
        closeFeedback();
        if (asideMenu.classList.contains('aside-body--opacity1')) {
          asideContainer.classList.remove('aside-container--absolute');
        }
        openBody();
      }
    });

  const request = document.querySelector('.request');

  requestContent.addEventListener('click', (e) => {

    if ((!request.contains(e.target))&&(!requestContent.classList.contains('hidden'))) {
      closeRequest();
      if (asideMenu.classList.contains('aside-body--opacity1')) {
        asideContainer.classList.remove('aside-container--absolute');
      }
      openBody();
    }
  });

});
