//20170719 Umi Added
var descriptionlist = [
                        {descri:"CONTACT US",src:"underconstruction.html"},
                        {descri:"DEVICES",src:"underconstruction.html"},
                        {descri:"TOOLS",src:"./Pages/pageTool.html"},
                        {descri:"ARCHIVES",src:"./Pages/archive.html"},
                        {descri:"GALLERY",src:"./Pages/pageGallery.html"}
                      ];

var descriptionlistonpage = document.getElementsByName("description");

var descriptiondefault = "NULL STUDIO";

var fadeinlist = ["fadein1 .5s linear","fadein2 .5s linear"];

var fadeinopacitylist = ["fadeinopacity1 1s linear","fadeinopacity2 1s linear"];

//var descriptionholder = document.getElementById("textdescription-text");

var navipadbtns = document.getElementsByName("navipadbtn");

var c=0;

function showdescription(i){
  if(i==-1){
    //descriptionholder.style['animation'] = "fadein3 .5s linear";
    /*
    descriptionholder.innerHTML = descriptiondefault;
    descriptionholder.style.animation = fadeinopacitylist[c%2];
    */
    hidealldescription();
    descriptionlistonpage[descriptionlistonpage.length-1].style["display"]="block";
    descriptionlistonpage[descriptionlistonpage.length-1].style.animation = fadeinopacitylist[c%2];
  }
  else{
    //descriptionholder.style.animation = fadeinlist[c%2];
    /*
    descriptionholder.innerHTML = descriptionlist[i].descri;
    descriptionholder.style.animation = fadeinopacitylist[c%2];
    */
    hidealldescription();
    descriptionlistonpage[i].style["display"]="block";
    descriptionlistonpage[i].style.animation = fadeinopacitylist[c%2];
  }
  c++;
}

function navto(j){
  location.href=descriptionlist[j].src;
}

function hidealldescription(){
  for (var i = 0; i < descriptionlistonpage.length; i++) {
    descriptionlistonpage[i].style["display"]="none";
  }
}