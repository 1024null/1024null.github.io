//20170730 Umi Added
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

//20170812 Umi Added
var cateflag = 0;
function categorytoggle(cateid){
  var catemenu = document.getElementById(cateid);
  if(cateflag==0){
    catemenu.style['display'] = "block";
    cateflag =1;
  }
  else{
    catemenu.style['display'] = "none";
    cateflag =0;
  }
}

function autocateenpack(cateid){
  var catemenu = document.getElementById(cateid);
  catemenu.style['display'] = "none";
  cateflag =0;
}

//20170813 Umi Added
var menuflag = 0;
function menurowtoggle(menurowid){
  var menurow = document.getElementById(menurowid);
  if(menuflag==0){
    menurow.style['display'] = "table-row";
    menuflag =1;
  }
  else{
    menurow.style['display'] = "none";
    menuflag =0;
  }
}
