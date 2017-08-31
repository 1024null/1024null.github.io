var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.toLowerCase().match(/iPhone/i) || navigator.userAgent.toLowerCase().match(/android/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }

  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}


//20170711 Umi Added
//For desktop devices scaling
function d2m(tags){
    if (navigator.userAgent.toLowerCase().match(/iPhone/i) || navigator.userAgent.toLowerCase().match(/android/i)) {
        location.href="./"+tags+"_mobile.html";

    }
    else{
        
    }

}

//20170711 Umi Added
//For mobile devices scaling
function m2d(tags){
    if (navigator.userAgent.toLowerCase().match(/iPhone/i) || navigator.userAgent.toLowerCase().match(/android/i)) {
        
    }
    else{
        location.href="./"+tags+".html";
    }

}

//20170718 Umi Added
//For different devide height
function automarginvertical(){
    var deviceheight = document.documentElement.clientHeight;
    var sh = document.getElementById("sh");
    var shmargintop = 0.26*parseInt(deviceheight)-70;
    sh.style["margin-top"] = shmargintop + "px";
}

function automarginverticaldesktop(){
    var deviceheight = document.documentElement.clientHeight;
    var outter = document.getElementById("outter");
    var shmargintop = (parseInt(deviceheight)-523)/5;
    outter.style["margin-top"] = shmargintop + "px";
}


function androidthinlineadjust(){
  if(navigator.userAgent.toLowerCase().match(/android/i)){
    var h = document.getElementsByName("androidline-head");
    var br=document.getElementsByName("androidline-body-r");
    var ba=document.getElementsByName("androidline-body-a");
    var bb=document.getElementsByName("androidline-body-b");
    var n = document.getElementsByName("navibtns");


    for (var i = 0; i < n.length; i++) {
      n[i].style["border"]="1px solid #000000";
    }

    for (var i = 0; i < h.length; i++) {
      h[i].style["border"]="1px solid #000000";
    }

    for (var i = 0; i < br.length; i++) {
      br[i].style["border-right"]="1px solid #000000";
    }

    for (var i = 0; i < bb.length; i++) {
      bb[i].style["border-bottom"]="1px solid #000000";
    }

    for (var i = 0; i < ba.length; i++) {
      ba[i].style["border-right"]="1px solid #000000";
      ba[i].style["border-bottom"]="1px solid #000000";
    }
  }
}