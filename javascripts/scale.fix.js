var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.toLowerCase().match(/iPhone/i) || navigator.userAgent.toLowerCase().match(/android/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }

  /*document.getElementById('unitExchange').style.width = document.getElementById('header').style.width;*/
  document.getElementById('unitExchange').style.width = '375px';
  document.getElementById('unitExchange').removeAttribute('top');
  document.getElementById('unitExchange').removeAttribute('left'); 
  document.getElementById('unitExchange').removeAttribute('margin-top');
  document.getElementById('unitExchange').removeAttribute('margin-left');
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}