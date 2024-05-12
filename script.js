function slider1(){
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

function slider2() {
  var swiper = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:200,
  nav:false,
  autoplay:false,
  autoplayTimeout:3000,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1024:{
          items:3
      },
      1440:{
        items:4
      },
      2560:{
        items:5
      }
  
  }
})



slider1();
slider2();