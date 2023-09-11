document.addEventListener("DOMContentLoaded", (event) => {
const brandsBtn = document.querySelector('.brands__show-all');
const brandsShowAll = document.querySelector('.brands__show-all__link');
const brandsArrow = document.querySelector('.brands__arrow');
const brandsWrapper = document.querySelector('.brands__swiper-wrapper');

//Раскрытие всех элементов раздела "Ремонт техники различных брендов"
brandsBtn.addEventListener('click', function () {
    if (brandsWrapper.classList.contains('brands__swiper-wrapper--fixes-size')) {
        brandsWrapper.classList.remove('brands__swiper-wrapper--fixes-size');
        brandsWrapper.classList.add('swiper-wrapper_full-height');
        brandsArrow.classList.add('transform');
        // brandsBtn.dataset.allBrands='true';
        brandsShowAll.textContent='Скрыть';
    } else {
        brandsWrapper.classList.add('brands__swiper-wrapper--fixes-size');
        brandsWrapper.classList.remove('swiper-wrapper_full-height');
        brandsArrow.classList.remove('transform');
        // brandsBtn.dataset.allBrands='false';
        brandsShowAll.textContent='Показать все';
    };
});

const repairBtn = document.querySelector('.repair__show-all');
const repairShowAll = document.querySelector('.repair__show-all__link');
const repairArrow = document.querySelector('.repair__arrow');
const repairWrapper = document.querySelector('.repair__swiper-wrapper');

//Раскрытие всех элементов раздела "Ремонт различных видов техники"
repairBtn.addEventListener('click', function () {
    if (repairWrapper.classList.contains('repair__swiper-wrapper--fixes-size')) {
        repairWrapper.classList.remove('repair__swiper-wrapper--fixes-size');
        repairWrapper.classList.add('swiper-wrapper_full-height');
        repairArrow.classList.add('transform');
        // repairBtn.dataset.allRepair='true';
        repairShowAll.textContent='Скрыть';
    } else {
        repairWrapper.classList.add('repair__swiper-wrapper--fixes-size');
        repairWrapper.classList.remove('swiper-wrapper_full-height');
        repairArrow.classList.remove('transform');
        // repairBtn.dataset.allRepair='false';
        repairShowAll.textContent='Показать все';
    };
});
});
