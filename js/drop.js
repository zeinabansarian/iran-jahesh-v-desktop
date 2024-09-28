
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