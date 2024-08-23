/* start java coding for slider*/
let allSlides=document.querySelectorAll(".slide");
let button=document.querySelectorAll(".button-slider li");
let c=0;
let slider=setInterval(switchImage,3000);
function switchImage(){
    button.forEach(ele=>{
    ele.classList.remove("active");
    })
    button[c].classList.add("active");
    allSlides.forEach(element=>{
    element.classList.remove("active");
    })
    allSlides[c++].classList.add("active");
    if(c===button.length){
        c=0;
    }
}
// choose the picture for each button
button.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        button.forEach((ele)=>{
            ele.classList.remove("active");
        })
        e.target.classList.add("active");
        if(li.classList.contains("firstbutton")){
            c=0;
            allSlides.forEach((element)=>{
                element.classList.remove("active")
            })
            allSlides[c].classList.add("active");
        }
        else if(li.classList.contains("secondbutton")){
            c=1;
            allSlides.forEach((element)=>{
                element.classList.remove("active");
            })
            allSlides[c].classList.add("active");
        }
        else{
            c=2;
            allSlides.forEach((element)=>{
                element.classList.remove("active");
            })
            allSlides[c].classList.add("active");
        }
    })
})
/** to make portfolio chane picture of three picture */
let all=document.querySelectorAll(".slid");
let butt=document.querySelectorAll(".button-sliders li");
let s=0;
let sli=setInterval(switchimage,2000);
function switchimage(){
    butt.forEach(ele=>{
    ele.classList.remove("active");
    })
    butt[s].classList.add("active");
    all.forEach(element=>{
    element.classList.remove("active");
    })
    all[s++].classList.add("active");
    if(s===butt.length){
        s=0;
    }
}

butt.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        butt.forEach((ele)=>{
            ele.classList.remove("active");
        })
        e.target.classList.add("active");
        if(li.classList.contains("firstbutton")){
            s=0;
            all.forEach((element)=>{
                element.classList.remove("active")
            })
            all[s].classList.add("active");
        }
        else if(li.classList.contains("secondbutton")){
            s=1;
            all.forEach((element)=>{
                element.classList.remove("active");
            })
            all[s].classList.add("active");
        }
        else{
            s=2;
            all.forEach((element)=>{
                element.classList.remove("active");
            })
            all[s].classList.add("active");
        }
    })
})
/**end swich portfolio image */
// to switch arrows
    let arrow=document.querySelectorAll(".arrows i");
    let prev=document.getElementById("first-arrow");
    let next=document.getElementById("second-arrow");
    arrow.forEach(r=>{
    prev.addEventListener('click',ele=>{
            switchImage();
    })
    next.addEventListener('click',ele=>{
            switchImage();
    })
    })   
    /********************* */
    /** start counter section*/
    let n1=document.getElementById("count1");
    let n2=document.getElementById("count2");
    let n3=document.getElementById("count3");
    let n4=document.getElementById("count4");
    function animate(element,start,end,duration){
        let range=start-end;
        let current=start;
        let increment=0;
        if(end>start){
        increment=1;
        }
        else{
            increment=-1;
        }
        var timer=setInterval(function(){
            current+=increment;
            element.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },duration);
    }
    animate(n1,0,232,5);
    animate(n2,0,521,2);
    animate(n3,0,1463,(0).toExponential(0));
    animate(n4,0,15,30);
// for resopsive nav
 let toogl=document.querySelector(".icons");
 let hamburger=document.querySelector(".icons i");
 let nav=document.querySelector(".main-nav");
 
 hamburger.onclick=function(){
    nav.classList.toggle("active");
    let isactive=nav.classList.contains("active");
    hamburger.classList=isactive? "fa-solid fa-xmark":"fa fa-bars";
 }
 // section profile
 /**  when click on button appear option for it*/
    let i=0;
    let btnOption=document.querySelectorAll(".seq button");
    let collOption=document.querySelectorAll(".profile .container .row-option");
    btnOption.forEach((li)=>{
        li.addEventListener("click",(e)=>{
            btnOption.forEach((ele)=>{
                ele.classList.remove("active");
            })
            e.target.classList.add("active");
            if(li.classList.contains("firstoption")){
                i=0;
                collOption.forEach((element)=>{
                    element.classList.remove("active")
                })
                collOption[i].classList.add("active");
            }
            else if(li.classList.contains("secondoption")){
                i=1;
                collOption.forEach((element)=>{
                    element.classList.remove("active");
                })
                collOption[i].classList.add("active");
            }
            else if(li.classList.contains("thirdoption")){
                i=2;
                collOption.forEach((element)=>{
                    element.classList.remove("active");
                })
                collOption[i].classList.add("active");
            }
            else{
                i=3;
                collOption.forEach((element)=>{
                    element.classList.remove("active");
                })
                collOption[i].classList.add("active");
            }
        })
    })
/*** to up and down pararaph on click in top and down arrow */
document.querySelectorAll(".top").forEach(item=>{
item.addEventListener('click',function(){
let ans=item.nextElementSibling;
/*item.classList.toggle("active");
let isopen=item.classList.contains("active");
item.classList=isopen? "fa-solid fa-angle-up":"fa-solid fa-angle-down";*/
if(ans.style.display==="block") {
    ans.style.display="none";
}
else{ 
ans.style.display="block";
}
})
})
////* to active nav when scroll*///
let section=document.querySelectorAll("section");
let headernav=document.querySelectorAll("header .main-nav a");
// for scrool to top
let back=document.querySelector(".backtohome");
window.onscroll= ()=>{
    if(this.scrollY >= 100){
        back.classList.add("show");
    }
    else{
        back.classList.remove("show");
    }
section.forEach(ele=>{
let above=window.scrollY;
let offset=ele.offsetTop-150;
let height=ele.offsetHeight;
let id=ele.getAttribute("id");
if(above >=offset && above<offset+height){
headernav.forEach(element=>{
element.classList.remove("active");
document.querySelector('header .main-nav a[href*='+ id+']').classList.add("active");
});
}
});
}
// to back to home above
back.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}

