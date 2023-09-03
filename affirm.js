let sliderImg = document.getElementById('slider-img')

let images = ['Project-pics/affirm-butterfly.png','Project-pics/affirm-day.png',
'Project-pics/affirm-flower.png', 'Project-pics/affirm-harmony.png','Project-pics/affirm-sunflower.png',
'Project-pics/affirm-tulip.png','Project-pics/affirm-wellness.png']
 let i = 0;
function slide(){
    sliderImg.src = images[i]

    i++;
    if(i===4){
        i=0;
    }
}
setInterval(slide,3000)







