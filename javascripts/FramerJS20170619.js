
var image = new Image();
var imageotw = new Image();
imageotw.src = "../resources/baseback.png";
/*
var w = parseFloat(document.getElementById("w").value);
var h = parseFloat(document.getElementById("h").value);


var b = parseFloat(document.getElementById("b").value);
var mv = parseFloat(document.getElementById("mv").value);
var mh = parseFloat(document.getElementById("mh").value);

*/

var w; //frmae width
var h; //frame height

var pw; //print width
var ph; //print height
var scale; // image width/height


var b=5; //frame border width
var mv = 50; //mat ceiling vertical
var mh = 50; //mat ceiling horizontal

var framebordercolor = "#000000";
var matcolor = "#F7F7F4";

var matflag="T"; //decide whether use the mat. T represents use

function change() {
    var pic = document.getElementById("preview"),
    file = document.getElementById("f");

    var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();

    // gif在IE浏览器暂时无法显示
    if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
        alert("图片的格式必须为png或者jpg或者jpeg格式！"); 
        return;
    }
    var isIE = navigator.userAgent.match(/MSIE/)!= null,
    isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;

    if(isIE) {
        file.select();
        var reallocalpath = document.selection.createRange().text;

        // IE6浏览器设置img的src为本地路径可以直接显示图片
        if (isIE6) {
        pic.src = reallocalpath;
        image.src = reallocalpath;
        }else {
            // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
            pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
            // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
            pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
            image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
        }
    }
    else {
        html5Reader(file);
    }
}

function html5Reader(file){
    var file = file.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
        var pic = document.getElementById("preview");

        pic.src=this.result;
        image.src = this.result;
    }
}

var canvasbgcolor = document.getElementById("cvsframe").getContext("2d").fillStyle;
function drawframepreview(target,offsetx,offsety,R,refreshflag){


    var r = R;

    var canvas = document.getElementById(target);

    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 1*r+"";
    

    if(refreshflag ==true){
        canvas.height = (h*r + 10)+"";
    }
    ctx.fillStyle=canvasbgcolor;
    //Frame and border
    ctx.fillStyle = framebordercolor;
    ctx.fillRect(offsetx,offsety,w*r,h*r);
    ctx.clearRect(offsetx+b*r,offsety+b*r,(w-2*b)*r,(h-2*b)*r);

    //Mat
    ctx.fillStyle = matcolor;
    ctx.fillRect(offsetx+b*r,offsety+b*r,(w-2*b)*r,(h-2*b)*r);


    //decide whether used the mat
    if(matflag == "T"){
        ctx.clearRect(offsetx+b*r+mh*r,offsety+b*r+mv*r,(w-2*b)*r-2*mh*r,(h-2*b)*r-2*mv*r);
        //Print
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(offsetx+b*r+mh*r,offsety+b*r+mv*r,(w-2*b)*r-2*mh*r,(h-2*b)*r-2*mv*r);
    }
    else{

    }
    
    // ctx.fillRect(5+b*r+mh*r+10*r,5+b*r+mv*r+10*r,(w-2*b)*r-2*mh*r-2*10*r,(h-2*b)*r-2*mv*r-2*10*r);
    
    ctx.drawImage(image,offsetx+b*r+mh*r+10*r,offsety+b*r+mv*r+10*r,pw*r,ph*r);

    //alert(5+b*r+mh*r+10*r+" "+5+b*r+mv*r+10*r+" "+pw*r+" "+ph*r);
    //alert(((w-2*b)*r-2*mh*r-2*10*r)/((h-2*b)*r-2*mv*r-2*10*r));
    

}


function hundredized(num){
    if(num>450 && num<465){
        return 450;
    }
    else if(num >=465){
        return Math.round(num/100)*100;
    }
    else if(num < 300){
        return 300;
    }
    else{

    }
    num = Math.floor(num/10)*10;
    if(num%100<50){
        return (Math.round(num/100)+0.5)*100;
    }
    else if(num%100>50){
        return Math.round(num/100)*100;
    }
    else{
        return num;
    }
    //return Math.round(num/100)*100;
}

//Umi added 20170611
function getradiobuttonselection(name){
    var radios = document.getElementsByName(name);
    for (var i = 0; i < radios.length; i++) {
        if(radios[i].checked){
            return radios[i].value;
        }
    }

}



function changematsstatus(sta){
    if(sta == "C"){
        matcolor = "#F2F6FA";
        document.getElementById("matcolorpreview").style['background-color'] = "#F2F6FA";
        matflag = "T";
    }
    else if(sta == "W"){
        matcolor = "#F7F7F4";
        document.getElementById("matcolorpreview").style['background-color'] = "#F7F7F4";
        matflag = "T";
    }
    else if(sta == "N"){
        matcolor = "#FFFFFF";
        document.getElementById("matcolorpreview").style['background-color'] = "#FFFFFF";
        matflag = "F";

    }
    else{

    }
}

function loadresult(fw,fh,pw,ph){
    document.getElementById("result_table").style['display'] = "block";
    var rf = document.getElementById("result_frame");
    var rp = document.getElementById("result_print");
    var pm = document.getElementById("result_mat");
    
/*
    rf.innerHTML = fw + "x" + fh; 
    rp.innerHTML = parseFloat(pw).toFixed(2) + "x" + parseFloat(ph).toFixed(2); 
    pm.innerHTML = (parseFloat(pw)+20).toFixed(2) + "x" + (parseFloat(ph)+20).toFixed(2); 
*/
    rf.innerHTML = fw + "x" + fh; 
    rp.innerHTML = parseInt(pw) + "x" + parseInt(ph); 
    pm.innerHTML = (parseInt(pw)+20) + "x" + (parseInt(ph)+20); 

}


function framebordercolorchange(color){
    if(color=="W"){
        document.getElementById("colorpreview").style['background-color'] = "#FFFFFF";
        framebordercolor = "#FFFFFF";
    }
    else if(color=="B"){
        document.getElementById("colorpreview").style['background-color'] = "#000000";
        framebordercolor = "#000000";
    }
    else{

    }
}

function calculateprintandframesize(){
    //Check users have had the picture uploaded and fill the longside size
    if(image.width==0 || image.height==0 || document.getElementById("longside").value==0){
        alert("Please make sure you have uploaded pictures and fill the longside size");
    }
    else{
        scale = image.width/image.height;
        var longside = parseFloat(document.getElementById("longside").value);
        if(getradiobuttonselection("mode") == "frame"){
            if(scale<1){//portrait picture
                h = longside;
                ph = longside - 2*mv-20 - 2*b;
                pw = ph*scale;
                w = pw+2*mh+20 + 2*b;
                w = hundredized(w);
                mh = (w-pw-20-2*b)/2;
            }
            else if(scale>1){//landscape picture
                w = longside;
                pw = longside - 2*mh-20 -2*b;
                ph = pw/scale;
                h = ph + 2*mv+20 +2*b;
                h = hundredized(h);
                mv = (h-ph-20-2*b)/2;
            }
            else if(scale==1){//square picture
                w = h = hundredized(longside);
                pw = ph = w-2*mv-20-2*b;
            }
            else{

            }

        }
        else if(getradiobuttonselection("mode") == "print"){
            if(scale<1){//portrait picture
                ph = longside;
                pw = ph*scale;
                w = hundredized(pw+2*mh+20+2*b);
                h = hundredized(ph+2*mv+20+2*b);
                mh = (w-pw-20-2*b)/2;
                mv = (h-ph-20-2*b)/2;
            }
            else if(scale>1){//landscape picture
                pw = longside;
                ph = pw/scale;
                w = hundredized(pw+2*mh+20+2*b);
                h = hundredized(ph+2*mv+20+2*b);
                mh = (w-pw-20-2*b)/2;
                mv = (h-ph-20-2*b)/2;
            }
            else if(scale==1){//square picture
                pw = ph = longside;
                w = h = hundredized(pw+2*mh+20+2*b);
                mv = mh = (w-pw-20-2*b)/2;
            }
            else{

            }
        }
        else{

        }

    }
}

function drawonratio(ceiling){
    //document.getElementById("cvsframe").style.height = (h+10)+"";
    if(ceiling == "S"){
        mv = mh = 200;
    }
    else if(ceiling =="M"){
        mv = mh = 150;
    }
    else if(ceiling=="L"){
        mv = mh = 100;
    }
    else if(ceiling=="XL"){
        mv = mh = 50;
    }
    else{

    }

    if((mv+mh+20)>= w || (mv+mh+20)>= h){
        mv = mh = 50;
        alert("画面边距超过画框尺寸，请选择画面尺寸较大的选项！");
    }
    else{
        calculateprintandframesize();
        drawframepreview("cvsframe",5,5,260/w,true);

        loadresult(w,h,pw,ph);

        otw();

    }
    
}

function resetworkingarea(){
    document.getElementById("cvsframe").getContext("2d").height = document.getElementById("cvsframe").getContext("2d").height;
    document.getElementById("result_table").style['display'] = "none";
}

function  otw(){
    

    var canvas2 = document.getElementById("cvsotw");
    var ctxowt = canvas2.getContext('2d');
    ctxowt.height = ctxowt.height;

    ctxowt.fillStyle = "#FDFFF6";
    ctxowt.fillRect(0,0,270,251);


    

    var offsetx = 175-w*0.085/2;
    var offsety = 92.5-h*0.085/2;
    drawframepreview("cvsotw",offsetx,offsety,0.085,false);

    ctxowt.drawImage(imageotw,5,5);


    

}
