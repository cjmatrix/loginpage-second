document.addEventListener("DOMContentLoaded",()=>{
   
    
    console.log("hii")
    let split=SplitText.create('.textW',{
        type:"chars",
        // mask:"chars"
    })

    const tl=gsap.timeline()

     tl.from(split.chars,{

        opacity:0,  
        yoyo:true,
        duration:1,
         yPercent:"random([-100,100])",
        rotation:"random([-45,45])",
        stagger:{
            each:0.05,
            from:"random"
        }
     })



})