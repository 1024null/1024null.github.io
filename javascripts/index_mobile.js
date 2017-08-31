//20170711 Umi Added
var flag = 0;
function menutoggle(menuid){
  var menu = document.getElementById(menuid);
  if(flag==0){
    menu.style.animation = "depack-vertical .8s linear";
    menu.style['margin-top'] = "10px";
    flag =1;
  }
  else{
    menu.style.animation = "enpack-vertical 1s linear";
    menu.style['margin-top'] = "-100px";
    flag =0;
  }
}

