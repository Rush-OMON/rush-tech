/*==================================================
RUSH TECH
animations.js

Premium Interaction Engine
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

initializeRippleButtons();
initializeMagneticButtons();
initializeTiltCards();
initializeFloatingCards();
initializeTechTicker();

});


/*==================================================
BUTTON RIPPLE
==================================================*/

function initializeRippleButtons(){

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";
ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},650);

});

});

}



/*==================================================
MAGNETIC BUTTONS
==================================================*/

function initializeMagneticButtons(){

document.querySelectorAll(".btn-primary").forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const moveX=(x-rect.width/2)*0.12;

const moveY=(y-rect.height/2)*0.12;

button.style.transform=

`translate(${moveX}px,${moveY}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});

}



/*==================================================
3D CARD TILT
==================================================*/

function initializeTiltCards(){

const cards=document.querySelectorAll(

".service-card,.highlight-card,.testimonial-card,.tech-card"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=-(y-rect.height/2)/18;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

}



/*==================================================
FLOATING HERO CARDS
==================================================*/

function initializeFloatingCards(){

const cards=document.querySelectorAll(".floating-card");

cards.forEach((card,index)=>{

let direction=index%2===0?1:-1;

let offset=0;

setInterval(()=>{

offset+=0.25*direction;

if(offset>8 || offset<-8){

direction*=-1;

}

card.style.transform=

`translateY(${offset}px)`;

},30);

});

}



/*==================================================
TECH STRIP
==================================================*/

function initializeTechTicker(){

const wrapper=document.querySelector(".tech-wrapper");

if(!wrapper) return;

let position=0;

function animate(){

position-=0.35;

wrapper.style.transform=

`translateX(${position}px)`;

if(Math.abs(position)>wrapper.scrollWidth/2){

position=0;

}

requestAnimationFrame(animate);

}

animate();

}



/*==================================================
SHIMMER EFFECT
==================================================*/

document.querySelectorAll(

".service-card,.project-image"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.classList.add("shimmer");

});

card.addEventListener("mouseleave",()=>{

card.classList.remove("shimmer");

});

});

/* Ripple */

.btn-primary,
.btn-secondary{

position:relative;
overflow:hidden;

}

.ripple{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.45);

transform:scale(0);

animation:rippleAnimation .65s linear;

pointer-events:none;

}

@keyframes rippleAnimation{

to{

transform:scale(4);

opacity:0;

}

}



/* Shimmer */

.shimmer{

position:relative;

overflow:hidden;

}

.shimmer::after{

content:"";

position:absolute;

top:0;

left:-120%;

width:60%;

height:100%;

background:

linear-gradient(

90deg,

transparent,

rgba(255,255,255,.28),

transparent

);

transform:skewX(-20deg);

animation:cardShimmer .9s;

}

@keyframes cardShimmer{

100%{

left:160%;

}

}


/*==================================================
END animations.js
==================================================*/
