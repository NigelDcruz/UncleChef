import './style/style.scss';

const header = document.getElementsByTagName('header');


let handleHideHeader = () => {
  header[0].classList.add('hide')
  header[0].classList.remove('show')
}

let handleShowHeader = () => {
  header[0].classList.add('show')
  header[0].classList.remove('hide')
}


let lastScrollTop = 0;

document.addEventListener("scroll", function () {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    // downscroll code
    if (st >= 180) {
      handleShowHeader();
    }
    else {
      handleHideHeader();
    }
  } else {
    // upscroll code
    handleHideHeader();
  }
  lastScrollTop = st <= 0 ? 0 : st;
}, false);

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})