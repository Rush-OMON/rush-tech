/*==================================================
RUSH TECH
scroll.js
==================================================*/


document.addEventListener("DOMContentLoaded",()=>{

initializeRevealAnimations();

initializeParallax();

initializeSectionObserver();

});



/*==================================================
REVEAL ON SCROLL
==================================================*/

function initializeRevealAnimations(){

const elements=document.querySelectorAll(

".fade-up,.fade-left,.fade-right,.zoom-in"

);

if(!elements.length) return;

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

observer.unobserve(entry.target);

}

});

},{

threshold:.18,

rootMargin:"0px 0px -80px 0px"

});

elements.forEach(el=>{

observer.observe(el);

});

}



/*==================================================
SECTION ACTIVE
==================================================*/

function initializeSectionObserver(){

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("section-visible");

}

});

},{

threshold:.25

});

sections.forEach(section=>{

observer.observe(section);

});

}



/*==================================================
PARALLAX
==================================================*/

function initializeParallax(){

const gradients=document.querySelectorAll(

".gradient-one,.gradient-two"

);

if(!gradients.length) return;

window.addEventListener("scroll",()=>{

const y=window.scrollY;

gradients.forEach((gradient,index)=>{

const speed=index===0?.18:.11;

gradient.style.transform=`translateY(${y*speed}px)`;

});

});

}



/*==================================================
PORTFOLIO PARALLAX
==================================================*/

window.addEventListener("mousemove",(e)=>{

document.querySelectorAll(".project-image").forEach(card=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/35;

const rotateX=-(y-rect.height/2)/35;

card.style.transform=

`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)`;

});

});

document.querySelectorAll(".project-image").forEach(card=>{

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1000px) rotateX(0) rotateY(0)";

});

});



/*==================================================
END scroll.js
==================================================*/
