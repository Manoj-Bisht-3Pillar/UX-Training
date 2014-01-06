
window.onload = function(){
	var canvas = document.getElementById('animateCanvas');
	ctx = canvas.getContext('2d');

	var imageObj = new Image();

	imageObj.onload = function() {
		ctx.drawImage(imageObj, 69, 50);
	};
	imageObj.src = 'images/qutub-minar.png';

	var planeObj = new Image();

	planeObj.onload = function() {
        ctx.drawImage(planeObj, 69, 50);
	};
	planeObj.src = 'images/aeroplane-transparent.png';

	var aclObj = new Image();

	aclObj.onload = function() {
        ctx.drawImage(aclObj, 69, 50);
	};
	aclObj.src = 'images/acl.png';


	var W = canvas.width;
	var H = canvas.height;
	var looped = 0;
	var x = 10,
	y = 10,
	w = 50,
	h = 50;

	var vx = 2;
	var vy = 2;
	
	function showMessage(){
		clearInterval(drawer);
		ctx.font = 'italic 30pt myFirstFont';
		ctx.drawImage(aclObj, 150, 20);
      		ctx.fillText('Is cement mein jaan hai..! ', 150, 310);
	}

	function draw() {
		ctx.clearRect(0, 0, W, H);
		x += vx;
		y += vy;
		if (x == W-300){
			looped++;
			if (looped<2)
				x=10;
			else
				showMessage();
		}
		ctx.drawImage(planeObj, x, 0, 200, 140);
		//ctx.fillRect(x, 0, w, h);
		ctx.drawImage(imageObj, W-200, 0);

	}

	var drawer = setInterval(draw, 1000/60);
}
