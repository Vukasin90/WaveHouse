var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  // Lightbox

var productItem = document.querySelectorAll('.fig-wrap');
var lightBox = document.querySelector('.lightbox');
var lbImage = document.querySelector('.lightbox-img');

for(var i = 0; i < productItem.length; i++) {
  productItem[i].addEventListener('click', function(e) {
    var imageLink = e.target.closest('img');
    var lightBoxImage = imageLink.getAttribute('src');
    var lightBox = document.querySelector('.lightbox');

    lbImage.setAttribute('src', lightBoxImage);
    lightBox.classList.add('lightbox-toggle');

    document.addEventListener('keyup', function(e) {
      if(e.keyCode === 27) {
          lightBox.classList.remove('lightbox-toggle');
      }
    });
  });
}

if (lightBox) {
  lightBox.addEventListener('click', function() {
    lightBox.classList.remove('lightbox-toggle');
  });
}

//Hamburger toggle
var hamburgerMenu = document.querySelector('.hamburger-wrapper');
var nav = document.querySelector('.navigation');
var hamOpen = document.querySelector('.toggle-hamburger');
var hamClose = document.querySelector('.close-hamburger');

hamburgerMenu.addEventListener('click', function() {
  nav.classList.add('toggle-hamburger');
});

hamClose.addEventListener('click', function() {
  nav.classList.remove('toggle-hamburger');
});

