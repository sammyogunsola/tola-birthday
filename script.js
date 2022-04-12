var i = 0; //sart point
// const Images = document.querySelector('.img-container');
var images = [];
var time = 3000;

images[1] ='./images/img1.JPG'
images[0] ='./images/img2.JPG'
images[2] ='./images/img3.JPG'
images[4] ='./images/img4.JPG'
images[7] ='./images/img5.JPG'
images[5] ='./images/img6.JPG'
images[6] ='./images/img7.JPG'
images[8] ='./images/img8.JPG'
images[3] ='./images/img9.JPG'
images[11] ='./images/img10.JPG'
images[9] ='./images/img12.JPG'
images[10] ='./images/img13.JPG'


function changeImg() {
    document.slide.src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg;
