document.addEventListener("DOMContentLoaded",()=>{

    gsap.to('.left-half',{
       scaleX:0,
       duration:1,
       ease:"power2.inOut"  
    })

    gsap.to('.right-half',{
       scaleX:0,
       duration:1,
          ease:"power2.inOut"
    })
})