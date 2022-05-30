let scrollToTop  = document.querySelector(".scrollToTop");

scrollToTop.addEventListener("click", function(){
    window.scroll ({
        top:0,
        left:0,
        behavior:"smooth"
    })
});
////////////////////////////////////////////////////////////
let ourSkills = document.querySelector(".ourSkills");
let sctop = ourSkills.getBoundingClientRect().top;
let ourlinkS = document.querySelector(".ourS");

ourlinkS.addEventListener("click",function(){
    window.scroll ({
        top:sctop,
        behavior:"smooth",
    })
})
let sp1 = document.querySelector(".sp1")
let sp2 = document.querySelector(".sp2")
let sp3 = document.querySelector(".sp3")
let sp4 = document.querySelector(".sp4")
window.onscroll = function(){
    if(window.scrollY >= sctop - 300){
        sp1.style.width = "80%";
        sp2.style.width = "85%";
        sp3.style.width = "70%";
        sp4.style.width = "80%";
    }
    if (window.scrollY > 800){
        scrollToTop.style.opacity = "1";
    }else if(window.scrollY < 800){
        scrollToTop.style.opacity = "0";
    }
}
////////////////////////////////////////////////////////
let seco = document.querySelector(".seco");
let minu = document.querySelector(".minu");
let hou = document.querySelector(".hou");
let day = document.querySelector(".day");
myIntervar = setInterval(function(){
    let ev1 =seco.innerHTML--;
    if(seco.innerHTML== 0){
        seco.innerHTML= 60;
        minu.innerHTML--;
        if(minu.innerHTML ==0){
            hou.innerHTML--;
        }
        if(hou.innerHTML== 0){
            day.innerHTML--;
        }
    }
    if(hou.innerHTML == 0){
        clearInterval(myIntervar);
        seco.innerHTML =0;
        hou.innerHTML =0;
        minu.innerHTML =0;
        day.innerHTML =0;
        seco.style.color ="red";
        minu.style.color ="red";
        hou.style.color ="red";
        day.style.color ="red";
    }
},1000);

