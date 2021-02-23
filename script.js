const loader = document.getElementById('loader');

window.addEventListener('load', ()=>{
    var container = document.getElementById('container');
    loader.style.transitionDuration="8s";
    loader.style.opacity--;

    container.style.transitionDelay="5s"
    container.style.transitionDuration="5s";
    container.style.opacity++;

})

const slide = document.querySelectorAll('.slide');
const nbSlide = slide.length;
const suivant = document.querySelector('#suivant');
const precedent = document.querySelector('#precedent');
let counter = 0;

function slideSuivante(){
    slide[counter].classList.remove('active');
    if(counter < nbSlide - 1){
        counter++;
    }else{
        counter  = 0;
    }
    slide[counter].classList.add('active')
}
suivant.addEventListener('click', slideSuivante)

function slidePrecedent(){
    slide[counter].classList.remove('active')
    if(counter > 0){
        counter--;
    }else{
        counter = nbSlide -1;

    }
    slide[counter].classList.add('active')
}
precedent.addEventListener('click',slidePrecedent)
setInterval(slideSuivante,3000);
