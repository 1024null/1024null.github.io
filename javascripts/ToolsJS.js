function calcuScaleVolume() { 
	var cover = document.getElementById("cover"); 
	var covershow = document.getElementById("coverShowCalculateScaleVolume"); 
	cover.style.display = 'block'; 
	covershow.style.display = 'block'; 
}

function openNewPad(padTitle) { 
    var cover = document.getElementById("cover"); 
    var covershow = document.getElementById(padTitle); 
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

    var processType = document.getElementById('typeSelector').value;

    var condi = document.getElementById('unitSelector').value;
    if(processType == "standard"){
        if(condi == "cm"){
        totalVol = square*0.0018;
        }
        else{
        totalVol = square*0.012;
        }
    }
    else{
        if(condi == "cm"){
        totalVol = square*0.014;
        }
        else{
        totalVol = square*0.09;
        }
    }
    
    document.getElementById('vol').value = totalVol; 
}


function ExhcnageUnit(){
    var ori = parseFloat(document.getElementById('ori').value);
    var result;
    var condition = document.getElementById('unitExchangeType').value;
    switch(condition){
        case 'F2C': result = (ori-32)*5/9; 
        break;
        case 'C2F': result = ori*9/5+32;;
        break;
        case 'E2S': result = ori*2.54;
        break;
        case 'S2E': result = ori/2.54;
        break;
        default: break;
    }
    document.getElementById('res').value = result;

}