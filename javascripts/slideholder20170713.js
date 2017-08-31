var slideholder = document.getElementById("slideitem");
var _x;
var _y;

slideholder.addEventListener('touchstart',touch1);
slideholder.addEventListener('touchmove',touch1);
slideholder.addEventListener('touchend',touch1);



var list = [
			{src:"./resources/ox.svg",link:"./Pages/pageGallery.html"},
			{src:"./resources/archive.svg",link:"./Pages/archive_mobile.html"},
			{src:"./resources/equip.svg",link:"./Pages/pageTool.html"},
			{src:"./resources/camera.svg",link:"./underconstruction.html"},
			{src:"./resources/at.svg",link:"./underconstruction.html"}
			];

var navibtns = document.getElementsByName("navibtns");

var listcurrentitemindex=0;
var templink="./Pages/pageGallery.html";
function touch1(){
	var event = window.event;
	if(event.type == "touchstart"){
		_x = event.touches[0].clientX;
		_y = event.touches[0].clientY;
		//alert(_x);
	}
	else if(event.type == "touchend"){
		event.preventDefault();  
		var x = event.changedTouches[0].clientX;
		var y = event.changedTouches[0].clientY;
		if(x-_x>50){

			itemprev();
		}
		else if(x-_x<-50){

			itemnext();
		}
		else{
			if(Math.abs(y-_y)<=5){ // Prevent mis-touch
				location.href = templink;
			}
			
		}
	}
	else{

	}
}

/*Peoblems remain*/
function itemprev(){
	listcurrentitemindex = listcurrentitemindex-1;

	if(listcurrentitemindex<0){
		listcurrentitemindex = 4;
	}

	var index = Math.abs(listcurrentitemindex);
	//console.warn(index%3);
	var l = list[index%5].link;
	var s = list[index%5].src;

	slideholder.setAttribute("src",s);
	templink = l;
	fadein();

	changenavibtndisplay(index%5);

	//slideholder.setAttribute("onclick","gotolink(\'"+l+"\');");
	
	
	
}
/*Peoblems remain*/
function itemnext(){
	listcurrentitemindex = listcurrentitemindex+1;
	var index = Math.abs(listcurrentitemindex);
	//console.warn(index);
	var l = list[index%5].link;
	var s = list[index%5].src;

	slideholder.setAttribute("src",s);
	templink = l;
	fadein();

	changenavibtndisplay(index%5);
	//slideholder.setAttribute("onclick","gotolink(\'"+l+"\');");
	


}

var fadeinlist = ["fadein1 1s linear","fadein2 1s linear"];
var fadeinlistcount = 0;

function fadein(){
	slideholder.style['opacity'] = "0";
	slideholder.style['display']="none";
	slideholder.style['display']="block";
	slideholder.style.animation = fadeinlist[fadeinlistcount%2];
	slideholder.style['opacity'] = "1";
	fadeinlistcount = fadeinlistcount+1;
}


function fadeout(){
	slideholder.style['display']="none";
	slideholder.style['display']="block";
	slideholder.style.animation = "fadeout 1s linear";
	slideholder.style['opacity'] = "0";
}
//slideholder.addEventListener('touch',touch);


function changenavibtndisplay(i){
	for(var k = 0;k<5;k++){
		navibtns[k].style['background-color'] = "#FFFFFF";
	}
	navibtns[i].style['background-color'] = "#999999";
}
