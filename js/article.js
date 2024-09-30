
// gallery slider
let swiperGallery = new Swiper('.swiper-gallery', {
    speed: 1000,
    slidesPerView:1,
    spaceBetween: 40,
    grabCursor:true,
    pagination: {
     el: '.GallerysSlider .Pagination',
     clickable: true,
     type: 'bullets',
     renderBullet: function (index, className) {
     return '<span class="' + className + '">'  + '</span>';
 
     }
   }

  });

  const relatedPro = new Swiper('.relatedPro', {
    // Optional parameters
    freeMode:true,
    grabCursor:true,
    // If we need pagination
    scrollbar: {
        el: '.relatedProScrollbar',
        draggable:true,
      },
    slidesPerView: 4,
    spaceBetween: 30
  });
  const relatedBlog = new Swiper('.relatedBlog', {
    // Optional parameters
    slidesPerView: 3.8,
    spaceBetween: 30,
    grabCursor:true,
    // If we need pagination
    scrollbar: {
        el: '.relatedBlogScrollbar',
        draggable:true,
      },
  });
  const relatedProj = new Swiper('.relatedProj', {
    // Optional parameters
    slidesPerView: 4.8,
    spaceBetween: 30,
    grabCursor:true,
    // If we need pagination
    scrollbar: {
        el: '.relatedProjScrollbar',
        draggable:true,
      },
  });
