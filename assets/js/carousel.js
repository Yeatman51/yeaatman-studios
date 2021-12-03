let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
let displayedPicture = document.getElementById('displayed-picture');

rightArrow.addEventListener('click', advanceCarousel);
leftArrow.addEventListener('click', retractCarousel);

let carouselImgs = [
'assets/img/designs-img/Yeatman_GD_6.png', 
'assets/img/designs-img/Yeatman_GD_1.png',
'assets/img/designs-img/Yeatman_GD_5.png',
'assets/img/designs-img/Yeatman_GD_7.png',
'assets/img/designs-img/Yeatman_GD_8.png',
'assets/img/web-img/treat-home.png'
]

// Advance the carousel controls by one circle

function advanceCarousel(event) {
    let circles = document.querySelectorAll('.circle-control');

    for(let i=0; i < circles.length - 1; i++) {
        if(circles[i].classList.contains('active-circle')) {
            advancePicture(circles[i+1].id)
            circles[i].classList.remove('active-circle');
            circles[i+1].classList.add('active-circle');
            return;
        }
    }
}

// Carousel functionality

function advancePicture(picture) {
    switch (picture) {
        case 'first':
            displayedPicture.setAttribute('src', carouselImgs[0]);
            
            break;

        case 'second':
            displayedPicture.setAttribute('src', carouselImgs[1]);
            break;

        case 'third':
            displayedPicture.setAttribute('src', carouselImgs[2]);           
            break;

        case 'fourth':
            displayedPicture.setAttribute('src', carouselImgs[3]);
            break;

        case 'fifth':
            displayedPicture.setAttribute('src', carouselImgs[4]);         
            break;
        
        case 'sixth':
            displayedPicture.setAttribute('src', carouselImgs[5]);
            break;

        default:
            displayedPicture.setAttribute('src', carouselImgs[0])
            break;
    }
}

// Retract the carousel controls by one circle

function retractCarousel() {
    let circles = document.querySelectorAll('.circle-control');

    for(let i=1; i < circles.length; i++) {
        if(circles[i].classList.contains('active-circle')) {
            advancePicture(circles[i-1].id)
            circles[i].classList.remove('active-circle');
            circles[i-1].classList.add('active-circle');
            return;
        }
    }
}
