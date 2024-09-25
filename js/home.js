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
