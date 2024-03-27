function homeAnimation(){
  
  gsap.set(".slidesbg" , {scale : 4})

    var tl = gsap.timeline({
      scrollTrigger : {
        trigger : ".home",
        start : "top top",
        end: "bottom bottom",
        scrub:1
      },
    })

    tl.to(".videodiv" ,{
        '--clip': "0%",
        ease : Power2,
    } , 'a')

    .to(".slidesbg" , {
      scale : 1,
      ease: Power2
    } , 'a')
    .to(".left" , {
      xPercent : -10,
      stagger : .04,
      ease : Power4 
    } , 's')
    .to(".right" , {
      xPercent : 5,
      stagger : 0.4,
      ease : Power4 
    } , 's')
}

function slideAnimation(){
  
      gsap.to(".slide" , {
        scrollTrigger : {
            trigger : ".real",
            start : "top top",
            end : "bottom bottom",
            scrub : 3
            },
        xPercent : -200,
        ease : Power4
      })
}

function teamAnimation(){

   document.querySelectorAll(".listelem")
   .forEach(function(el){ 
        el.addEventListener("mousemove" , function(dets){
            gsap.to(this.querySelector(".pictures") , {
              opacity: 1,
              xPercent : gsap.utils.mapRange( 0 , window.innerWidth , -200 , 200 , dets.clientX),
              ease : Power2 , 
              duration :.2
            })
            gsap.to(this.querySelector(".bluelayer") , {
              height : "100%",
              ease : Power1,
              duration : 0.5
            })
        })

        el.addEventListener("mouseleave" , function(){
          gsap.to(this.querySelector(".pictures") , {
            opacity: 0,
            ease :Power2,
            duration : .2
          })
          gsap.to(this.querySelector(".bluelayer") , {
            height : "0%",
            duration:0.5
          })
      })
   })   
}

function paraAnimation(){
      var clutter = ""
        document.querySelector(".textpara").textContent.split("")
        .forEach(function(letter){
            if(letter == " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${letter}</span>`
        })
        document.querySelector(".textpara").innerHTML = clutter;
        gsap.set(".textpara span" , {opacity : .1})
        gsap.to(".textpara span" , {
          scrollTrigger :{
            trigger : ".para",
            start : "top 50%",
            end : "bottom 80%",
            scrub : 2
          },
          opacity : 1,
          stagger : .03,
          ease : Power4
        })
}

function locoMotive(){
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsuleAnimation(){
  
    gsap.to(".capsules" , {
      scrollTrigger: {
        trigger : ".capsules",
        start : "top 80%",
        end : "bottom bottom",
        scrub:2  
      },
      y:0,
      ease: Power4
    })
}

function changeColor(){
  
    document.querySelectorAll(".section")
      .forEach(function(e){
          ScrollTrigger.create({
            trigger : e,
            start : "top 50%",
            end: "bottom 50%",
            onEnter : function(){
              document.body.setAttribute("theme" , e.dataset.color);
            },
            onEnterBack : function(){
              document.body.setAttribute("theme" , e.dataset.color);
            }
          })
      })
}

homeAnimation();
slideAnimation();
teamAnimation();
paraAnimation();
locoMotive();
capsuleAnimation();
changeColor();