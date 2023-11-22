const swiper = new Swiper('.swiper', {
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',

    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  grabCursor: true,

  slideToClickedSlide: true,

  mousewheel: {

    sensitivity: 1,

  },

  slidesPerView: 1.2,

  spaceBetween: 16,

  loop: true,

  breakpoints: {
    520: {
      slidesPerView: 2,
    },
  }
 
});


const moreBtn = document.querySelector('.more-button');
const brandItems = document.querySelectorAll('.brand__item');
const btnTitle = document.querySelector('.more-button__text');

moreBtn.addEventListener('click', function() {
  if(btnTitle.textContent === 'Показать всё') {
    btnTitle.textContent = 'Скрыть';
  for(let item of brandItems) {
    item.classList.add('brand__item--opened');
  }
} else {
  for(let item of brandItems) {
    item.classList.remove('brand__item--opened');
  }
  btnTitle.textContent = 'Показать всё';
}
});
// const windowInnerWidth = window.innerWidth;
// const swiperHide = document.querySelector('.swiper');

// window.addEventListener('resize', function(event){
//   addHiddenMode();
// });

// function addHiddenMode() {
// if (windowInnerWidth > 700) {
//   swiperHide.classList.add('hidden');
// } else {
//   swiperHide.classList.remove('hidden');
// }
// }
// const mobileMenu = document.querySelector('.brands-swiper');
// console.log(mobileMenu);

// if ($(window).width() < 514) {

//   mobileMenu.removeClass();
// }
  