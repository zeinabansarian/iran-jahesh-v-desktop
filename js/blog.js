$(function(){
  var current = window.location.search;
 if( current.includes("pageno")){
  $('.Paginations a').each(function(){
      var $this = $(this);
      let  str = current.split("pageno=")[1];
      let result = str.substr(0,1);
      if($this.attr('id') == result){
          $this.addClass('active');
          $this.siblings().removeClass( 'active' );
      }      
  })
}
else{
  $('#1').addClass('active');
}
})

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