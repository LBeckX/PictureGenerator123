// Elements
var MAIN_CANVAS,
    LEFT,
    RIGHT,
    inputElementOpenInfoBox,
    elementInfoBox,
    INPUT_UPLOAD_PICTURE,
    INPUT_CANVAS_WIDTH,
    INPUT_CANVAS_HEIGHT,
    INPUT_JPG_QUALITY;


// Values
var ctx,
    jpgQuality = 100,
    canvasWidth = 800,
    canvasHeight = 600,
    img;

document.addEventListener("DOMContentLoaded", function () {
    getElements();
    infoBox();
    canvas();
    checkModified();
    upadteInput();
}, false);


function canvas() {
    ctx = MAIN_CANVAS.getContext('2d');
    MAIN_CANVAS.width = INPUT_CANVAS_WIDTH.value;
    MAIN_CANVAS.height = INPUT_CANVAS_HEIGHT.value;
}
function getElements() {
    MAIN_CANVAS = document.getElementById("MAIN_CANVAS");
    LEFT = document.getElementById("LEFT");
    inputElementOpenInfoBox=document.getElementById("OPEN_INFO");
    elementInfoBox=document.getElementById("INFO_BOX");
    INPUT_UPLOAD_PICTURE=document.getElementById("INPUT_UPLOAD_PICTURE");
    INPUT_CANVAS_WIDTH=document.getElementById("INPUT_CANVAS_WIDTH");
    INPUT_CANVAS_HEIGHT=document.getElementById("INPUT_CANVAS_HEIGHT");
    INPUT_JPG_QUALITY=document.getElementById("INPUT_JPG_QUALITY");
}
function checkModified(){
    var inputElements=document.getElementsByTagName("input");
    for (var i=0;i<inputElements.length;i++){
        inputElements[i].addEventListener("change",update,false);
    }
}
function update() {
    switch (this.name){
        case  "INPUT_UPLOAD_PICTURE":
            loadPictureInToCanvas(this);
            break;
        case "INPUT_CANVAS_WIDTH":
            canvasWidth = this.value;
            break;
        case "INPUT_CANVAS_HEIGHT":
            canvasHeight = this.value;
            break;
        case "INPUT_JPG_QUALITY":
            jpgQuality = this.value;
            break;
    }
    upadteInput();
}
function loadPictureInToCanvas(inputFile) {
    if ( inputFile.files && inputFile.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(event) {
            img = new Image();
            img.onload = function() {
                MAIN_CANVAS.width = img.width;
                MAIN_CANVAS.height = img.height;
                canvasWidth = img.width;
                canvasHeight = img.height;
                ctx.drawImage(img, 0, 0);
                upadteInput();
            };
            img.src = event.target.result;
        };
        FR.readAsDataURL(inputFile.files[0]);
    }
}
function upadteInput() {
    INPUT_CANVAS_WIDTH.value = canvasWidth;
    INPUT_CANVAS_HEIGHT.value = canvasHeight;
    INPUT_JPG_QUALITY.value = jpgQuality;
}
function hasClass(element,className) {
    if (element.classList.contains(className)) {
        return true;
    }
}
function removeClass(element,className) {
    element.className = element.className.replace(className,'');
    element.className = element.className.replace(" "+className,'');
}
function addClass(element,className) {
    removeClass(element,className);
    className = ' '+className;
    element.className = element.className + className;
}
function infoBox() {
    var closeInfoBoxElements = document.getElementsByClassName("infoBoxClose");
    for (var k=0;k<closeInfoBoxElements.length;k++){
        closeInfoBoxElements[k].addEventListener("click",closeInfoBox);
    }
    inputElementOpenInfoBox.addEventListener("click",openCloseInfoBox);
}
function openCloseInfoBox() {
    if(hasClass(elementInfoBox,"open")){
        removeClass(elementInfoBox,"open");
    }
    else {
        addClass(elementInfoBox,"open");
    }
}
function closeInfoBox() {
    if(hasClass(elementInfoBox,"open")){
        removeClass(elementInfoBox,"open");
    }
}
