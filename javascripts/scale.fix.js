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