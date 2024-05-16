function slider1() {
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
function myowl_crosol() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      2000: {
        items: 4,
      },
      2560: {
        items: 5,
      },
    },
  });
}
function front_page_Animation() {
  Shery.imageEffect(".back", {
    style: 6,
    config: {
      noiseDetail: { value: 7.44, range: [0, 100] },
      distortionAmount: { value: 2.21, range: [0, 10] },
      scale: { value: 35.88, range: [0, 100] },
      speed: { value: 0.78, range: [0, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 2.136478510252749 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 1, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 1.83, range: [0, 10] },
      metaball: { value: 0.05, range: [0, 2], _gsap: { id: 3 } },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.27, range: [0, 2] },
      noise_scale: { value: 100, range: [0, 100] },
    },
    debug: false,
    gooey: true,
  });
}
function front_page() {
  gsap.from(".page1 .row2 .col1", {
    duration: 3,
    scale: 0.4,
  });
  gsap.from(".page1 .top .heading ", {
    duration: 2,
    scale: 0.6,
  });
}

function secondpage(){
  gsap.from(".page2 .row1 .col1 h5",{
    x:-260,
    duration:2,
    rotate:360,
    scrollTrigger:{
      trigger:".page2",
      scroller:"body",
      markers:false,
      start: "top 600px",
      end:"top 500px"
    }
  })
  gsap.from(".page2 .row1 .col2 h1",{
    x:1300,
    duration:2,
    rotate:360,
    scrollTrigger:{
      trigger:".page2",
      scroller:"body",
      markers:false,
      start: "top 500px",
      end:"top 50px"
    }
  })
  gsap.from(".image-containerfor-row2",{
    y:-300,
    duration:2,
    rotate:360,
    stagger:1,
    scrollTrigger:{
      trigger:".page2",
      scroller:"body",
      markers:false,
      start: "top 700px",
      end:"top 50px"
    }
  })
}


function thirdpage(){
  gsap.from(".page3 .row2 h1",{
    y:-260,
    duration:2,
    ease:"bounce.out",
    scrollTrigger:{
      trigger:".page3",
      scroller:"body",
      markers:true,
      start: "top 400px",
      end:"top 100px"
    }
  })
}
slider1();
slider2();
myowl_crosol();
front_page();
front_page_Animation();
secondpage();
thirdpage();