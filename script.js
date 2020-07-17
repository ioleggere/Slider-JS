var imgs=[];
var slider;
var imgNow;
var imgMax;
function preLoad(){
    var cont = 1;
    for(var i = 0; i<2;i++){
        imgs[i]=new Image();
        imgs[i].src="images/img"+cont+".png";
        cont++;
    }
}
function loadImg(img){
    slider.style.backgroundImage="url('"+imgs[img].src+"')";
}

function start(){
    preLoad();
    imgNow = 0;
    imgMax = imgs.length - 1;
    slider = document.getElementById("slider");
    loadImg(imgNow); 
}

function slide(dir){
    imgNow+=dir;
    if(imgNow > imgMax){
        imgNow=0;
    }
    else if(imgNow < 0){
        imgNow = imgMax;
    }
    loadImg(imgNow);
}

window.addEventListener("load", start);
