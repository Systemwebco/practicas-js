const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafito=document.getElementsByClassName('parrafito');
const pid=document.getElementById('pid');
const input=document.querySelector('input');
console.log(parrafito);
console.log({h1,p,parrafito,pid,input,});

h1.innerHTML="Patito 🦆🦆🦆"

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

pid.innerHTML = "";
pid.appendChild(img);