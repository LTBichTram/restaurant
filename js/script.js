let menuBtn = document.querySelector('#menuBars');
let navbar = document.querySelector('.header__navbar');

menuBtn.onclick = () => {
  menuBars.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menuBars.classList.remove('fa-xmark');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".food__slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },
});

let foodPreview = document.querySelector('.food-preview');
let foodPreviewBoxs = document.querySelectorAll('.food-preview__slide');
document.querySelectorAll('.food__slide').forEach(foodSlide => {
  foodSlide.onclick = () => {
    foodPreview.style.display = 'flex';
    let nameSlide = foodSlide.getAttribute('data-name');
    foodPreviewBoxs.forEach(foodPreviewBox => {
      let nameSlidePreview = foodPreviewBox.getAttribute('data-target');
      if(nameSlidePreview == nameSlide)
      {
        foodPreviewBox.classList.add('active');
      }
    })
  }
})

document.querySelector('.food-preview__close').onclick = () => {
  foodPreview.style.display = 'none';
  foodPreviewBoxs.forEach( foodPreviewBox => {
    foodPreviewBox.classList.remove('active');
  })
}

document.querySelector('.food-preview').onclick = () => {
  foodPreview.style.display = 'none';
  foodPreviewBoxs.forEach( foodPreviewBox => {
    foodPreviewBox.classList.remove('active');
  })
}

var swiper = new Swiper(".menu__slider", {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});


var swiper = new Swiper(".blogs__slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },
});