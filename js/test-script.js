gsap.registerPlugin(ScrollTrigger);

// ابتدا مسیر خط SVG را دریافت می‌کنیم
const path = document.querySelector("#linePath");
const image = document.querySelector("#movingImage");

const pathLength = path.getTotalLength();

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