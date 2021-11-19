// Animation for the hamburger nav bar

let hamBars = document.getElementById('ham-bars-wrapper');
let bar1 = document.getElementById('ham-bar-1');
let bar2 = document.getElementById('ham-bar-2');
let bar3 = document.getElementById('ham-bar-3');

let navList = document.getElementById('nav-list');

hamBars.addEventListener('click', animateNav);

function animateNav() {

    if(hamBars.classList.contains('closed')) {
        hamBars.classList.remove('closed');
        hamBars.classList.add('open')
        bar1.setAttribute('style', 'margin-left: 5px; transition: 0.5s ease-in-out;');
        bar2.setAttribute('style', 'margin-left: 10px; transition: 0.5s ease-in-out;');
        bar3.setAttribute('style', 'margin-left: 15px; transition: 0.5s ease-in-out;');
        navList.setAttribute('style', 'display: block; transition: 0.5s ease-in-out;')
    } else {
        hamBars.classList.remove('open');
        hamBars.classList.add('closed');
        bar1.setAttribute('style', 'margin-left: 0px; transition: 0.5s ease-in-out;');
        bar2.setAttribute('style', 'margin-left: 0px; transition: 0.5s ease-in-out;');
        bar3.setAttribute('style', 'margin-left: 0px; transition: 0.5s ease-in-out;');
        navList.setAttribute('style', 'display: none; transition: 0.5s ease-in-out;')

    }
}