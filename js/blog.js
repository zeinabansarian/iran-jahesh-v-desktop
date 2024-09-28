  // Enable Scroll

  const lenis = new Lenis()


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  gsap.registerPlugin(ScrollTrigger);
let blogs = document.querySelectorAll('.Blog')
console.log(blogs);

blogs.forEach(blog=>{
    gsap.to(blog.querySelector('.Title h2'),{
        y:0,
        scrollTrigger: {
            trigger:blog,
          start: "top 70%", 
          end:'bottom bottom',
        },
    })
})