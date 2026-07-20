/*==================================================
RUSH TECH
script.js
==================================================*/


document.addEventListener("DOMContentLoaded", () => {

initializePreloader();

initializeNavigation();

initializeScrollProgress();

initializeBackToTop();

initializeFAQ();

initializeCounters();

initializeCursorGlow();

});



/*==================================================
PRELOADER
==================================================*/

function initializePreloader(){

const preloader = document.getElementById("preloader");

if(!preloader) return;

window.addEventListener("load",()=>{

setTimeout(()=>{

preloader.style.opacity="0";
preloader.style.visibility="hidden";

setTimeout(()=>{

preloader.remove();

},700);

},500);

});

}



/*==================================================
NAVIGATION
==================================================*/

function initializeNavigation(){

const header=document.getElementById("header");

const menu=document.querySelector(".nav-links");

const menuBtn=document.querySelector(".menu-btn");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

menu.classList.toggle("active");

menuBtn.classList.toggle("active");

});

}

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");

menuBtn.classList.remove("active");

});

});

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

}



/*==================================================
SCROLL PROGRESS
==================================================*/

function initializeScrollProgress(){

const progress=document.getElementById("scroll-progress");

if(!progress) return;

window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-

window.innerHeight;

const progressWidth=

(window.scrollY/totalHeight)*100;

progress.style.width=progressWidth+"%";

});

}



/*==================================================
BACK TO TOP
==================================================*/

function initializeBackToTop(){

const button=document.getElementById("backToTop");

if(!button) return;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

button.classList.add("show");

}else{

button.classList.remove("show");

}

});

button.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}
/*==================================================
FAQ ACCORDION
==================================================*/

function initializeFAQ(){

const faqItems=document.querySelectorAll(".faq-item");

if(!faqItems.length) return;

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(other=>{

if(other!==item){

other.classList.remove("active");

}

});

item.classList.toggle("active");

});

});

}



/*==================================================
COUNTER ANIMATION
==================================================*/

function initializeCounters(){

const counters=document.querySelectorAll("[data-count]");

if(!counters.length) return;

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter=entry.target;

const target=parseInt(counter.dataset.count);

let current=0;

const increment=Math.ceil(target/80);

const updateCounter=()=>{

current+=increment;

if(current>=target){

counter.textContent=target;

}else{

counter.textContent=current;

requestAnimationFrame(updateCounter);

}

};

updateCounter();

observer.unobserve(counter);

});

},{

threshold:.5

});

counters.forEach(counter=>{

observer.observe(counter);

});

}



/*==================================================
CURSOR GLOW
==================================================*/

function initializeCursorGlow(){

const glow=document.querySelector(".cursor-glow");

if(!glow) return;

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

}



/*==================================================
ACTIVE NAVIGATION
==================================================*/

(function(){

const sections=document.querySelectorAll("section[id]");

const links=document.querySelectorAll(".nav-links a");

if(!sections.length) return;

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

})();



/*==================================================
SMOOTH ANCHOR LINKS
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

});

});



/*==================================================
AUTO HIDE NAVBAR
==================================================*/

let lastScroll=0;

window.addEventListener("scroll",()=>{

const header=document.getElementById("header");

const current=window.pageYOffset;

if(current>lastScroll && current>150){

header.style.transform="translateY(-100%)";

}else{

header.style.transform="translateY(0)";

}

lastScroll=current;

});



/*==================================================
CLOSE MENU WHEN CLICKING OUTSIDE
==================================================*/

document.addEventListener("click",(e)=>{

const menu=document.querySelector(".nav-links");

const button=document.querySelector(".menu-btn");

if(!menu || !button) return;

if(

!menu.contains(e.target) &&

!button.contains(e.target)

){

menu.classList.remove("active");

button.classList.remove("active");

}

});



/*==================================================
IMAGE LAZY FADE-IN
==================================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

imageObserver.unobserve(entry.target);

}

});

},{

threshold:.15

});

images.forEach(img=>{

img.style.opacity="0";

img.style.transform="translateY(20px)";

img.style.transition=".8s ease";

imageObserver.observe(img);

});



/*==================================================
END OF PART 2
==================================================*/
