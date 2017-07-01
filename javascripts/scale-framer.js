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


function framerMobileMode(){
    if (navigator.userAgent.toLowerCase().match(/iPhone/i) || navigator.userAgent.toLowerCase().match(/android/i)) {
        document.getElementById("result_table_holder_mobile").style['display'] = "none";
        //document.getElementById("result_table_holder_mobile").style['display'] = "block";
        document.getElementById("result_table_holder_desktop").style['display'] = "none";

        document.getElementById("cvsframe_m").style['display'] = "block";
        document.getElementById("cvsframe").style['display'] = "none";

        document.getElementById("div_center").style['display'] = "none";

        document.getElementById("spacing_col3").style['display'] = "none";        
           
    }
    else{
        document.getElementById("result_table_holder_mobile").style['display'] = "none";
        //document.getElementById("result_table_holder_desktop").style['display'] = "block";
        document.getElementById("result_table_holder_desktop").style['display'] = "none";

        document.getElementById("cvsframe_m").style['display'] = "none";
        document.getElementById("cvsframe").style['display'] = "block";

        document.getElementById("div_center").style['display'] = "block";

        document.getElementById("spacing_col3").style['display'] = "block"; 
    }

}
