const imageSlider = document.querySelectorAll('.slider-2 .slider-line2 img');
const sliderLine2 = document.querySelector('.slider-line2');

let count2 = 0;
let width2;

function init2(){
    width2 = document.querySelector('.slider-2').offsetWidth;
    sliderLine2.style.width = width2*imageSlider.length + 'px';

    imageSlider.forEach(item => {
        item.style.width = width2 + 'px';
        item.style.height = 'auto';
        
    });
    rollSlider2();
}
window.addEventListener('resize', init2);
init2();

document.querySelector('.slider2-prev').addEventListener('click',function(){
    count2--;
     if(count2 < 0){
        count2 = imageSlider.length - 1;
     }
    rollSlider2();
});
document.querySelector('.slider2-next').addEventListener('click',function(){
    count2++;
     if(count2 >= imageSlider.length){
        count2 = 0;
     }
    rollSlider2();
});

function rollSlider2(){
    sliderLine2.style.transform = 'translate(-'+count2*width2+'px)';
}
init2();