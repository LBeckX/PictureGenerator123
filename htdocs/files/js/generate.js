// Elements
var MAIN_CANVAS,
    LEFT,
    RIGHT,
    inputElementOpenInfoBox,
    elementInfoBox,
    INPUT_UPLOAD_PICTURE,
    INPUT_CANVAS_WIDTH,
    INPUT_CANVAS_HEIGHT,
    INPUT_JPG_QUALITY,
    DOWNLOAD_LINK;


// Values
var ctx,
    jpgQuality = 100,
    canvasWidth = 800,
    canvasHeight = 600,
    img = 0,
    fileName = "";

document.addEventListener("DOMContentLoaded", function () {
    getElements();
    infoBox();
    canvas();
    checkModified();
    upadteInput();

    DOWNLOAD_LINK.addEventListener("click",function (e) {
        dataUriToBlob(function (blob) {
            console.log("callback(blob)");
            if(fileName === ""){
                fileName = "emptyCanvas.jpg";
            }
            DOWNLOAD_LINK.download = fileName;
            DOWNLOAD_LINK.href = URL.createObjectURL(blob);
            DOWNLOAD_LINK.onclick = function() {
                requestAnimationFrame(function() {
                    URL.revokeObjectURL(e.href);
                });
                e.removeAttribute('href')
            };
        });
    },false);
    
}, false);

window.addEventListener("mousewheel",function (e) {
   canvasStyleWidth(e);
});

window.addEventListener("DOMMouseScroll", function (e) {
    canvasStyleWidth(e);
}, false);

function canvas() {
    ctx = MAIN_CANVAS.getContext('2d');
    MAIN_CANVAS.width = INPUT_CANVAS_WIDTH.value;
    MAIN_CANVAS.height = INPUT_CANVAS_HEIGHT.value;
    MAIN_CANVAS.style.width = INPUT_CANVAS_WIDTH.value+"px";
    MAIN_CANVAS.style.height = "auto";
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
    DOWNLOAD_LINK=document.getElementById("DOWNLOAD_LINK");
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
            updateCanvas("width");
            break;
        case "INPUT_CANVAS_HEIGHT":
            canvasHeight = this.value;
            updateCanvas("height");
            break;
        case "INPUT_JPG_QUALITY":
            jpgQuality = this.value;
            break;
    }
    upadteInput();
}
function loadPictureInToCanvas(inputFile) {
    console.log("loadPictureInToCanvas(inputFile)");
    if ( inputFile.files && inputFile.files[0] ) {
        fileName = inputFile.files[0].name+".jpg";
        var FR= new FileReader();
        FR.onload = function(event) {
            img = new Image();
            img.onload = function() {
                MAIN_CANVAS.width = img.width;
                MAIN_CANVAS.style.width = img.width+"px";
                MAIN_CANVAS.height = img.height;
                MAIN_CANVAS.style.height = "auto";
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
function canvasStyleWidth(e) {
    console.log("canvasStyleWidth(e)");
    var width = parseInt(MAIN_CANVAS.style.width,10);
    if(e.deltaY < 0){
        width+=50;
        MAIN_CANVAS.style.width = width+"px";
    }
    else{
        width-=50;
        MAIN_CANVAS.style.width = width+"px";
    }
}
function upadteInput() {
    console.log("upadteInput()");
    INPUT_CANVAS_WIDTH.value = canvasWidth;
    INPUT_CANVAS_HEIGHT.value = canvasHeight;
    INPUT_JPG_QUALITY.value = jpgQuality;
}
function updateCanvas(widthOrHeight){
    var multiplikator = 0;
    if(widthOrHeight === "width"){
        multiplikator = MAIN_CANVAS.height / MAIN_CANVAS.width;
        MAIN_CANVAS.width = canvasWidth;
        canvasHeight = canvasWidth*multiplikator;
        MAIN_CANVAS.height =canvasHeight;
    }else if(widthOrHeight === "height"){
        multiplikator = MAIN_CANVAS.width/MAIN_CANVAS.height;
        MAIN_CANVAS.height = canvasHeight;
        canvasWidth = canvasHeight*multiplikator;
        MAIN_CANVAS.width =canvasWidth;
    }else {
        console.error("updateCanvas(widthOrHeight) -> widthOrHeight");
    }
    if(img !== 0){
        drawImage(canvasWidth,canvasHeight);
    }
    upadteInput();
}
function drawImage(width,height) {
    ctx.drawImage(img, 0, 0,width,height);
}
function dataUriToBlob(callback) {
    console.log("dataUriToBlob(callback)");
    var quality = jpgQuality/100;
    var dataURI = MAIN_CANVAS.toDataURL('image/jpeg',quality);
    var binStr = atob(dataURI.split(',')[1]),
        len = binStr.length,
        arr = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        arr[i] = binStr.charCodeAt(i);
    }
    callback(new Blob([arr]));
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
