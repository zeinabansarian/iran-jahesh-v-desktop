  // Enable Scroll

  const lenis = new Lenis()


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  
gsap.registerPlugin(ScrollTrigger);
gsap.to('.Content .title p',{
     y:'100%',
     duration:.5,
    scrollTrigger: {
        trigger:'.Section-1',
      scrub:true,
      start: "top top", 
      end:'bottom 400',
    },

   })
   gsap.to('.Content .title h1',{
    y:'100%',
    duration:.5,
    scrollTrigger: {
        trigger:'.Section-1',
      scrub:true,
      start: "top top", 
      end:'bottom 400',
    },

   })
   gsap.to('.Content .lines .col',{
    y:'100%',
    scrollTrigger: {
        trigger:'.Section-1',
      scrub:true,
      start: "top top", 
      end:'bottom 400',
    },

   })
   gsap.to('.Content .Text p',{
    y:'150%',
    scrollTrigger: {
        trigger:'.Section-1',
      scrub:true,
      start: "top top", 
      end:'bottom 400',
    },

   })
gsap.to('.main__lines .line',{
    width:'100%',
    opacity:1,
    delay:5,
    duration:.5,
    scrollTrigger: {
        trigger:'.Section-1',
      scrub:true,
      start: "top top", 
      end:'bottom 400',
    },

   })

   gsap.registerPlugin(ScrollTrigger) 
// VIDEO PLAY
let secs = document.querySelectorAll('.VideoBox')
let videos = document.querySelectorAll(' .Video')
console.log(videos);
videos.forEach(s=>{
s.setAttribute('data-IS',false)
})
videos.forEach(v=>{
v.addEventListener('click',function (event) {
  let Is = event.currentTarget.getAttribute('data-IS')
  console.log(Is);
  if(Is==='false'){
      $(event.currentTarget.parentElement).toggleClass('toggle');
      console.log(event.currentTarget.querySelector('video'));
      
      event.currentTarget.querySelector('video').play()
      event.currentTarget.setAttribute('data-IS',true)
  }
  else{
    console.log('umm');
      $(event.currentTarget.parentElement).toggleClass('toggle');
      event.currentTarget.querySelector('video').pause()
      event.currentTarget.setAttribute('data-IS',false)
  }
});
})

gsap.set('.VideoBox .Video',{
  width:'30%'
})
gsap.to('.VideoBox .Video',{
  width:'100%',
  scrollTrigger: {
    trigger:'.Section-2',
    scrub:true,
    start: "top bottom", 
    end:'bottom bottom',
  },

 })
 const slider = document.getElementById("js-cta-slider");
 const sliderCounter = document.getElementById("js-cta-slider-counter");
 const sliderNext = document.getElementById("js-cta-slider-next");
 const sliderPrevious = document.getElementById("js-cta-slider-previous");
 const interleaveOffset = 0.5;
 const swiper = new Swiper(slider, {
   speed: 1000,
   grapSlidesProgress:true,
   grabCursor: true,
   watchSlidesProgress: true,
   pagination: {
    el: '.ProjectsSlider .Pagination',
    clickable: true,
    type: 'bullets',
    renderBullet: function (index, className) {
    return '<span class="' + className + '">'  + '</span>';

    }
  },
 
   navigation: {
     nextEl: '.Navigations .swiper-button-next',
     prevEl: '.Navigations .swiper-button-prev'
   },
   on: {
     progress: function() {
         let swiper = this
         for(let i =0;i<swiper.slides.length;i++){
             let slideProgress = swiper.slides[i].progress,
             innerOffset = swiper.width * interleaveOffset,
             innerTranslate= slideProgress * innerOffset
             if(innerTranslate < 0){
              swiper.slides[i].querySelector('.slide-bigimg').style.transform=' translateX(' + innerTranslate + 'px ) scale(1.3)'
             }
             else{
              swiper.slides[i].querySelector('.slide-bigimg').style.transform=' translateX(' + innerTranslate + 'px ) scale(1)'
             }
           
         }
     },
     touchStart: function(){
         let swiper = this
         for(let i =0;i<swiper.slides.length;i++){
             swiper.slides[i].style.transition=' '
         }
     },
     setTransition: function(speed){
         let swiper = this
         for(let i =0;i<swiper.slides.length;i++){
             swiper.slides[i].style.transition=speed + ' ms'
                 swiper.slides[i].querySelector('.slide-bigimg').style.transition=speed + ' ms'
         }
     }
   }
 });

//  blogs slider
let swiperBlogs = new Swiper('.swiper-blogs',{
  speed: 1000,
  slidesPerView:3,
  spaceBetween: 40,
  grabCursor:true,
  loop: true,
  autoplay: {
      // delay: 0,
  },
})
$(function () {
    
  /* 共通関数まとめ
  ********************************************** */
 
  /* raindrops
  ********************************************** */
  $('.raindrops').raindrops({
    color: '#fff',
    waveLength: 70,
    waveHeight: 70,
    rippleSpeed: .05,
  });


})