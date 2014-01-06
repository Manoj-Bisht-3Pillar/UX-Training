var canvas, ctx;
var offsetX;
var offsetY;
var canvasWidth;
var canvasHeight;
var isDragging=false;
var images = [];

window.onload = function(){
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        
        canvas = document.getElementById('imageCanvas');
        ctx = canvas.getContext("2d");
        offsetX=canvas.offsetLeft;
        offsetY=canvas.offsetTop;
        canvasWidth=canvas.width;
        canvasHeight=canvas.height;

        document.getElementById('getfiles').onchange = function(){
            var files = document.getElementById('getfiles').files;
            for(var i = 0; i < files.length; i++) {
                resizeAndUpload(files[i]);
            }
        };
        canvas.onmousedown = function(e){handleMouseDown(e);};
        canvas.onmousemove = function(e){handleMouseMove(e);};
        canvas.onmouseup = function(e){handleMouseUp(e);};
        canvas.onmouseout = function(e){handleMouseOut(e);};

    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
}

function resizeAndUpload(file) {
    var reader = new FileReader();
    reader.onloadend = function() {

    var tempImg = new Image();
    tempImg.src = reader.result;
    tempImg.onload = function() {
        var MAX_WIDTH = 220;
        var MAX_HEIGHT = 120;
        
        var tempW = tempImg.width;
        var tempH = tempImg.height;
        
        if (tempW > tempH) {
            if (tempW > MAX_WIDTH) {
               tempH *= MAX_WIDTH / tempW;
               tempW = MAX_WIDTH;
            }
        } else {
            if (tempH > MAX_HEIGHT) {
               tempW *= MAX_HEIGHT / tempH;
               tempH = MAX_HEIGHT;
            }
        }
        
        ctx.drawImage(this, 0, 0, tempW, tempH);
        images.push(this);
      }
    }
    reader.readAsDataURL(file);
}


function handleMouseDown(e){
  canMouseX=parseInt(e.clientX-offsetX);
  canMouseY=parseInt(e.clientY-offsetY);
  // set the drag flag
  isDragging=true;
}

function handleMouseUp(e){
  canMouseX=parseInt(e.clientX-offsetX);
  canMouseY=parseInt(e.clientY-offsetY);
  // clear the drag flag
  isDragging=false;
}

function handleMouseOut(e){
  canMouseX=parseInt(e.clientX-offsetX);
  canMouseY=parseInt(e.clientY-offsetY);
  // user has left the canvas, so clear the drag flag
  //isDragging=false;
}
function handleMouseMove(e){
  canMouseX=parseInt(e.clientX-offsetX);
  canMouseY=parseInt(e.clientY-offsetY);
  // if the drag flag is set, clear the canvas and draw the image
  if(isDragging){

        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        images.push(images.shift()); // shuffle images
        for (index = 0; index < images.length; ++index) {
            ctx.drawImage(images[index],canMouseX-128/2,canMouseY-120/2,128,120);
        }
      //ctx.drawImage(images[images.length-1],canMouseX-128/2,canMouseY-120/2,128,120);
  }
}
