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

function toolMobileMode(){
  if (navigator.userAgent.toLowerCase().match(/iPhone/i) || navigator.userAgent.toLowerCase().match(/android/i)) {

    toolDivMoibleMode('unitExchange');
    toolDivMoibleMode('coverShowCalculateScaleVolume');
    toolDivMoibleMode('underConstruction');
  }

}

function framerMobileMode(){
  if (navigator.userAgent.toLowerCase().match(/iPhone/i) || navigator.userAgent.toLowerCase().match(/android/i)) {
    document.getElementById("divInner").style.cssText = "border:solid 2px #C0D9D9;width:400px;height:200px;margin-left:50px;margin-top:20px;";
  }

}

function toolDivMoibleMode(divID){
    /*document.getElementById('unitExchange').style.width = document.getElementById('header').style.width;*/
  document.getElementById(divID).style.width = '100%';
  document.getElementById(divID).style.height = window.screen.height;
  document.getElementById(divID).removeAttribute('top');
  document.getElementById(divID).removeAttribute('left'); 
  document.getElementById(divID).removeAttribute('margin-top');
  document.getElementById(divID).removeAttribute('margin-left');
  document.getElementById(divID).style.top = 0;
  document.getElementById(divID).style.left = 0;
  document.getElementById(divID).style.marginLeft = '0px';
  document.getElementById(divID).style.marginTop = '0px';


}

/*Umi Added 20170510*/
function archiveMobileMode(icoID,menuID){
  if (navigator.userAgent.toLowerCase().match(/iPhone/i) || navigator.userAgent.toLowerCase().match(/android/i)) {
    document.getElementById(icoID).style.display = "block";
    document.getElementById(menuID).style.display = "none";

  }
}

function menuSwitch(menuID){
  if(document.getElementById(menuID).style.display=="block"){
    document.getElementById(menuID).style.display="none"
  }
  else{
    document.getElementById(menuID).style.display="block"
  }
}