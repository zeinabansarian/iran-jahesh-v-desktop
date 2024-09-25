jQuery('.openPara').readmore({
    speed: 100,
    collapsedHeight:100,
    moreLink: '<button class="text-blue-text cursor-pointer relative z-10 font-IRANYekan400 text-base text-b2" dir="ltr" style="float:right;">+ بیشتر </button>',
    lessLink: '<button class="text-blue-text cursor-pointer relative z-10 font-IRANYekan400 text-base text-b2" dir="ltr" style="float:right;">- کمتر </button>',
    heightMargin: 16,
    afterToggle: function(trigger, element, expanded) {
        
        if(! expanded) { // The "Close" link was clicked
          $('html, body').animate( { scrollTop: element.offset().top }, {duration: 100 } );
        }
      },
});

const certificateSlider = new Swiper('.certificateSlider', {
    // Optional parameters
    // If we need pagination
    speed:1000,
    slidesPerView: 5,
    spaceBetween: 50,
    navigation: {
        nextEl: '.nextBtnCerti',
        prevEl: '.prevBtnCerti',
      },
  });
const tandisSlider = new Swiper('.tandisSlider', {
    // Optional parameters
    // If we need pagination
    speed:1000,
    slidesPerView: 3,
  
  });

const gallerySlider = new Swiper('.gallerySlider', {
    // Optional parameters
    // If we need pagination
    speed:1000,
    pagination: {
        el: '.certiPagination',
        clickable:true
      },
  });



//   قطره
                     
let movingImage = document.querySelector(".movingImage")


function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

  console.log(elementInViewport2(movingImage));
  if (window.pageYOffset>2) {
    movingImage.style.width="revert-layer"
   }
   else{
       movingImage.style.width="0"

   }
window.addEventListener("scroll" , function (params) {
    if (window.pageYOffset>2) {
     movingImage.style.width="revert-layer"
    }
    else{
        movingImage.style.width="0"

    }
    if (elementInViewport2(this.document.querySelector("footer"))) {
           movingImage.style.width="0"
    }
})
  gsap.registerPlugin(ScrollTrigger);

// ابتدا مسیر خط SVG را دریافت می‌کنیم
const path = document.querySelector("#linePath");
const image = document.querySelector("#movingImage");

const pathLength = path.getTotalLength();
setTimeout(() => {
    // GSAP انیمیشن اسکرول:
    gsap.to(image, {
      scrollTrigger: {
        trigger: path, // شروع انیمیشن هنگام ورود خط SVG به ویوپورت
        start: "top center", // زمانی که ابتدای SVG در وسط صفحه باشد
        end: "bottom center", // پایان انیمیشن زمانی که انتهای SVG در وسط صفحه باشد
        scrub: 2, // همگام‌سازی انیمیشن با اسکرول
      },
      motionPath: {
        path: path, // مسیری که باید تصویر طی کند
        align: path, // هم‌راستایی تصویر با مسیر
        alignOrigin: [0.5, 0.5], // تنظیم موقعیت تصویر روی مسیر
      },
    
      duration: 2, // مدت زمان انیمیشن
      ease: "none" // بدون تغییرات سرعت در انیمیشن
    });
    
}, 500);




