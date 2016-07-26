function calcuScaleVolume() { 
	var cover = document.getElementById("cover"); 
	var covershow = document.getElementById("coverShowCalculateScaleVolume"); 
	cover.style.display = 'block'; 
	covershow.style.display = 'block'; 
}


function CloseCoverPage(target){
	var cover = document.getElementById("cover"); 
	var covershow =document.getElementById(target);
	cover.style.display = ''; 
	covershow.style.display = ''; 

}


function CalculateVolume() {
    var len = parseFloat(document.getElementById('len').value);
    var wid = parseFloat(document.getElementById('wid').value);

    var square = len*wid;
    var totalVol;
    var condi = document.getElementById('unitSelector').value;
    if(condi == "cm"){
        totalVol = square*0.0018;
    }
    else{
        totalVol = square*0.012;
    }
    document.getElementById('vol').value = totalVol;
}