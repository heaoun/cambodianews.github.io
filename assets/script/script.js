// jquery
$(document).ready(function () {
    $('.imageslide').hide();
    var s = $('.imageslide');
    var num = s.length;
    var index = 0;
    s.eq(index).show();
    // btn next
    $('.tbnSlideNext').click(function () {
        s.eq(index).hide();
        index++;
        if (index >= num) {
            index = 0;
        }
        s.eq(index).show();
    })

    // btn back
    $('.tbnSlideBack').click(function () {
        s.eq(index).hide();
        index--;
        if (index < 0) {
            index = num - 1;
        }
        s.eq(index).show();
    })
    // Auto slide
    setInterval(() => {
        s.eq(index).hide();
        index++;
        if (index >= num) {
            index = 0;
        }
        s.eq(index).show();
    }, 5000);
})

// jquery for responsive slide
$(document).ready(function () {
    $('.imageslide-respon').hide();
    var s = $('.imageslide-respon');
    var num = s.length;
    var index = 0;
    s.eq(index).show();
    // btn next
    $('.tbnSlideNext-respon').click(function () {
        s.eq(index).hide();
        index++;
        if (index >= num) {
            index = 0;
        }
        s.eq(index).show();
    })

    // btn back
    $('.tbnSlideBack-respon').click(function () {
        s.eq(index).hide();
        index--;
        if (index < 0) {
            index = num - 1;
        }
        s.eq(index).show();
    })
    // Auto slide
    setInterval(() => {
        s.eq(index).hide();
        index++;
        if (index >= num) {
            index = 0;
        }
        s.eq(index).show();
    }, 5000);
})
// script of index.html

// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });

//   var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
//   });
 //load-more button
 const loadMoreBtn = document.querySelector('#load-more');
 let currentItem = 5;
 loadMoreBtn.addEventListener("click", function () {
   const boxes = [...document.querySelectorAll('.box-left .content .box-block .box-content .box')];
   for (let i = currentItem; i < currentItem + 5; i++) {
     boxes[i].style.display = 'block';
   }
   currentItem += 5;

   if (currentItem >= boxes.length) {
     loadMoreBtn.style.display = 'none';
   }
 })
//  script of social-news.html



