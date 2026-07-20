/*==================================================
RUSH TECH
particles.js
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

createParticles();

});

function createParticles(){

const hero=document.querySelector("#hero");

if(!hero) return;

const container=document.createElement("div");

container.className="particles-container";

hero.appendChild(container);

for(let i=0;i<28;i++){

const particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"%";

particle.style.animationDuration=

12+Math.random()*12+"s";

particle.style.animationDelay=

Math.random()*8+"s";

particle.style.opacity=

0.15+Math.random()*0.25;

particle.style.width=

3+Math.random()*5+"px";

particle.style.height=

particle.style.width;

container.appendChild(particle);

}

}
/*==================================================
BACKGROUND PARTICLES
==================================================*/

.particles-container{

position:absolute;

inset:0;

overflow:hidden;

pointer-events:none;

z-index:-1;

}

.particle{

position:absolute;

bottom:-50px;

border-radius:50%;

background:rgba(171,53,0,.35);

animation:particleFloat linear infinite;

filter:blur(.4px);

}

@keyframes particleFloat{

0%{

transform:

translateY(0)

translateX(0);

opacity:0;

}

20%{

opacity:.35;

}

80%{

opacity:.25;

}

100%{

transform:

translateY(-120vh)

translateX(50px);

opacity:0;

}

}
