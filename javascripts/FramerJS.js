function changeStyle(){
    
    var frameBorder = document.getElementById("frameBorder").value;

    var frameWidth = document.getElementById("frameWidth").value;
    var frameHeight = document.getElementById("frameHeight").value;

    var innerWidth = document.getElementById("innerWidth").value;
    var innerHeight = document.getElementById("innerHeight").value;

    var matWidth = document.getElementById("matWidth").value;
    var matHeight = document.getElementById("matHeight").value;


    if(frameHeight-innerHeight<=0||frameWidth-innerWidth<=0){
        alert("画心尺寸不应该大于或等于画框尺寸！");
    }
    else if(frameHeight-matHeight<=0||frameWidth-matWidth<=0){
        alert("卡纸开孔尺寸不应该大于或等于画框尺寸！");
    }
    else if(matHeight-innerHeight<0||matWidth-innerWidth<0){
        alert("画心尺寸不应该大于卡纸开孔尺寸！");
    }
    else{
        var innerMarginTop = (frameHeight-innerHeight)/2;
        var matMarginTop = (frameHeight-matHeight)/2;

        document.getElementById("innerMarginVertical").value = innerMarginTop;
        document.getElementById("innerMarginHorizontal").value = (frameWidth-innerWidth)/2;
        var targetFrame = document.getElementById("targetFrame");
        var targetInner = document.getElementById("targetInner");
        var targetMat = document.getElementById("targetMat");

        var _innerMarginTop = (matHeight-innerHeight)/2;

        
        if(frameWidth - 500 <0){
            targetFrame.style.cssText +=  "border:solid "+ frameBorder +"px #000000;width:"+(parseInt(frameWidth)+parseInt(frameBorder)+parseInt(frameBorder))+"px;height:"+(parseInt(frameHeight)+parseInt(frameBorder)+parseInt(frameBorder))+"px;"
            targetMat.style.cssText +=  "width:"+matWidth+"px;height:"+matHeight+"px;margin-top:"+matMarginTop+"px;";
            targetInner.style.cssText +=  "width:"+innerWidth+"px;height:"+innerHeight+"px;margin-top:"+_innerMarginTop+"px;";
        }
        else if(frameWidth - 500 >= 0){
            targetFrame.style.cssText +=  "border:solid "+ frameBorder/2 +"px #000000;width:"+(parseInt(frameWidth)+parseInt(frameBorder)+parseInt(frameBorder))/2+"px;height:"+(parseInt(frameHeight)+parseInt(frameBorder)+parseInt(frameBorder))/2+"px;"
            targetMat.style.cssText +=  "width:"+matWidth/2+"px;height:"+matHeight/2+"px;margin-top:"+matMarginTop/2+"px;";
            targetInner.style.cssText +=  "width:"+innerWidth/2+"px;height:"+innerHeight/2+"px;margin-top:"+_innerMarginTop/2+"px;";
        } 
        else if(frameWidth - 800 >= 0) {
            targetFrame.style.cssText +=  "border:solid "+ frameBorder/8 +"px #000000;width:"+(parseInt(frameWidth)+parseInt(frameBorder)+parseInt(frameBorder))/8+"px;height:"+(parseInt(frameHeight)+parseInt(frameBorder)+parseInt(frameBorder))/8+"px;"
            targetMat.style.cssText +=  "width:"+matWidth/8+"px;height:"+matHeight/8+"px;margin-top:"+matMarginTop/8+"px;";
            targetInner.style.cssText +=  "width:"+innerWidth/8+"px;height:"+innerHeight/8+"px;margin-top:"+_innerMarginTop/8+"px;";
        }
        else if(frameWidth - 1000 >= 0) {
            targetFrame.style.cssText +=  "border:solid "+ frameBorder/10 +"px #000000;width:"+(parseInt(frameWidth)+parseInt(frameBorder)+parseInt(frameBorder))/10+"px;height:"+(parseInt(frameHeight)+parseInt(frameBorder)+parseInt(frameBorder))/10+"px;"
            targetMat.style.cssText +=  "width:"+matWidth/10+"px;height:"+matHeight/10+"px;margin-top:"+matMarginTop/10+"px;";
            targetInner.style.cssText +=  "width:"+innerWidth/10+"px;height:"+innerHeight/10+"px;margin-top:"+_innerMarginTop/10+"px;";
        }
        else{
            targetFrame.style.cssText +=  "border:solid "+ frameBorder/100 +"px #000000;width:"+(parseInt(frameWidth)+parseInt(frameBorder)+parseInt(frameBorder))/100+"px;height:"+(parseInt(frameHeight)+parseInt(frameBorder)+parseInt(frameBorder))/100+"px;"
            targetMat.style.cssText +=  "width:"+matWidth/100+"px;height:"+matHeight/100+"px;margin-top:"+matMarginTop/100+"px;";
            targetInner.style.cssText +=  "width:"+innerWidth/100+"px;height:"+innerHeight/100+"px;margin-top:"+_innerMarginTop/100+"px;";
        }

        
        

        targetFrame.title = "宽："+ frameWidth +"mm*高："+frameHeight+"mm";
        targetInner.title = "宽："+ innerWidth +"mm*高："+innerHeight+"mm";
        targetMat.title = "宽："+ innerWidth +"mm*高："+innerHeight+"mm";
    }
}

var fwid = document.getElementById("fwid");
var fhet = document.getElementById("fhet");

var iwid = document.getElementById("iwid");
var iwid = document.getElementById("iwid");

var mwid = document.getElementById("mwid");
var mwid = document.getElementById("mwid");



var frame = document.getElementById("frame");
var inner = document.getElementById("holder");



function loadpic(){
    change();
    document.getElementById("frame").style['display'] = "none";
}

function recalc1(){
    if(fwid.value > iwid.value && fhet.value > ihet.value){
        frame.style['width'] = (parseFloat(fwid.value)+10) + "px";
        frame.style['height'] = (parseFloat(fhet.value)+10) + "px";
        inner.style['width'] = (parseFloat(iwid.value) + 22) + "px";
        frame.style['padding-left']= frame.style['padding-right'] = ((fwid.value-inner.offsetWidth)/2)+"px";
        frame.style['padding-top']= frame.style['padding-bottom'] = ((fhet.value-inner.offsetHeight)/2)+"px";
        if(inner.offsetHeight < frame.offsetHeight){
            loaddata2(1);
        }
        else{
            document.getElementById("frame").style['display'] = "none";
            alert("Target print is smaller in this set of frame | 所选画框尺寸过小");
        }
        
    }
    else{
        document.getElementById("frame").style['display'] = "none";
        alert("Target print is smaller in this set of frame | 所选画框尺寸过小");
    }
    /*document.getElementById('frame').style['width'] = parseFloat(fwid.value)/(parseFloat(document.getElementById('iwid').value)/238) + 'px';
    document.getElementById('frame').style['height'] = parseFloat(fhet.value)/(parseFloat(document.getElementById('iwid').value)/238) + 'px';
    
    document.getElementById('frame').style['padding-top'] = document.getElementById('frame').style['padding-bottom'] = (document.getElementById('frame').style['offsetHeight'] - document.getElementById('holder').style['offsetHeight'])/2 + "px"; 
    document.getElementById('frame').style['padding-left'] = document.getElementById('frame').style['padding-right'] = (document.getElementById('frame').style['offsetWidth'] - document.getElementById('holder').style['offsetWidth'])/2 + "px";   */
}

function recalc2(w,h){
    if(document.getElementById('holder').offsetWidth < w && document.getElementById('holder').offsetHeight < h){
        frame.style['width']= (w+10) + "px";
        frame.style['height']= (h+10)+ "px";
        frame.style['padding-left']= frame.style['padding-right'] = ((w-inner.offsetWidth)/2)+"px";
        frame.style['padding-top']= frame.style['padding-bottom'] = ((h-inner.offsetHeight)/2)+"px";
        loaddata1("F",1);
    }
    else{
        document.getElementById("frame").style['display'] = "none";
        alert("Target print is smaller in this set of frame | 所选画框尺寸过小");
    }
}



function loaddata1(t,ratio){
    if(t=="F"){
        fwid.value = hundredized(document.getElementById("frame").offsetWidth*ratio);
        fhet.value = hundredized(document.getElementById("frame").offsetHeight*ratio);
    }
    else if(t=="P"){
        fwid.value = document.getElementById("frame").offsetWidth*ratio;
        fhet.value = document.getElementById("frame").offsetHeight*ratio;
    }
    
    iwid.value = 238*ratio;
    ihet.value = (document.getElementById("holder").offsetHeight-22)*ratio;
    mwid.value = parseFloat(iwid.value) + 20*ratio;
    mhet.value = parseFloat(ihet.value) + 20*ratio;

}

function loaddata2(ratio){

    fwid.value = hundredized(document.getElementById("frame").offsetWidth*ratio);
    fhet.value = hundredized(document.getElementById("frame").offsetHeight*ratio);
    
    iwid.value = (document.getElementById("holder").offsetWidth -22 )*ratio;
    ihet.value = (document.getElementById("holder").offsetHeight -22)*ratio;
    mwid.value = parseFloat(iwid.value) + 20*ratio;
    mhet.value = parseFloat(ihet.value) + 20*ratio;

}

function layoutdisplay(layouttype){
    
    frame.style['display'] = "block";
    if(layouttype=="S"){
        frame.style['width']= "330px";
        frame.style['height'] = (inner.offsetHeight+60+10) + "px";
        frame.style['padding']= "30px";
        loaddata1("P",1);
        
    }
    else if(layouttype=="M"){
        frame.style['width']= "390px";
        frame.style['height'] = (inner.offsetHeight+120+10) + "px";
        frame.style['padding']= "60px";
        loaddata1("P",1);
    }
    else if(layouttype=="L"){
        frame.style['width']= "510px";
        frame.style['height'] = (inner.offsetHeight+240+10) + "px";
        frame.style['padding']= "120px";
        loaddata1("P",1);
    }
    else if(layouttype=="TEST"){
        frame.style['width']= "260px";
        frame.style['height'] = (inner.offsetHeight+30+10) + "px";
        frame.style['padding']= "15px";
        loaddata1("P",1);
    }
    else if(layouttype=="400S"){
        recalc2(400,400);
        
    }
    else if(layouttype=="400300"){
        recalc2(400,300);
    }
    else if(layouttype=="400500"){
        
        recalc2(400,500);
    }
    else if(layouttype=="FREE"){
        recalc1();
    }
    else{

    }
    
}

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
        }
        else {
            // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
            pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
            // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
            pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
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
    }
}


function hundredized(num){
    if(num>450 && num<465){
        return 450
    }
    else if(num >=465){
        return Math.round(num/100)*100;
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

var dispratio = 0.65; //screen display percentage 
var printratio = 0.25; //print possessed in frame

var matceiling = 10;
var frameborder = 5;

var wid = document.getElementById("wid");
var het = document.getElementById("het");


function changeprintratio(ratio){
    
    if(parseFloat(ratio) >0.99 || parseFloat(ratio)<0.01){
        alert("画面所占比例应小于1");

    }
    else{
        printratio = parseFloat(ratio);
    }
}



function calcResult(){
    frame.style["display"] = "block";
    
    
    if(getradiobuttonselection("mode") == "frame"){
        
        dispratio = (260+2*frameborder)/parseFloat(wid.value);
        frame.style["border"] = frameborder*dispratio + "px solid #000000";
        frame.style["width"]= (260+2*frameborder*dispratio) + "px";
        inner.style["width"] = Math.sqrt(printratio)*(260+2*frameborder*dispratio) + "px";
        //alert(inner.style["width"]);
        var fRealHet = hundredized(inner.offsetHeight/(Math.sqrt(printratio)*dispratio));
        //alert(fRealHet);
        //alert(inner.offsetHeight/(Math.sqrt(printratio)*dispratio));
        //var fRealHet = inner.offsetHeight/(Math.sqrt(printratio)*dispratio);
        frame.style["height"] = (fRealHet * dispratio) + "px";
        
        
        frame.style['padding-left'] = frame.style['padding-right'] = ((frame.offsetWidth -2*frameborder*dispratio -inner.offsetWidth)/2)+"px";
        frame.style['padding-top'] = frame.style['padding-bottom'] = ((frame.offsetHeight -2*frameborder*dispratio -inner.offsetHeight)/2)+"px";

        inner.style['padding'] = matceiling*dispratio + "px";

        //frame.style["height"] = (inner.offsetHeight*inner.offsetWidth)/(260*Math.sqrt(printratio)) + "px";

        //alert(frame.style["width"] + "1 " + frame.style["height"] + " 2" + inner.style["width"]  + "3" + inner.style["height"]);

        //alert(wid.value +" " + fRealHet +" "+inner.offsetWidth/dispratio+" " + inner.offsetHeight/dispratio+" ");
        document.getElementById("result_table").style['display'] = "block";
        loadresult(wid.value,fRealHet,inner.offsetWidth/dispratio,inner.offsetHeight/dispratio);


    }
    else if(getradiobuttonselection("mode") == "print"){

        dispratio = 260/(hundredized(parseFloat(wid.value)/Math.sqrt(printratio))-2*frameborder);

        frame.style["border"] = frameborder*dispratio + "px solid #000000";
        frame.style["width"]= (260+2*frameborder*dispratio) + "px";
        inner.style["width"] = Math.sqrt(printratio)*(260+2*frameborder*dispratio) + "px";
        //alert(inner.style["width"]);
        var fRealHet = hundredized(inner.offsetHeight/(Math.sqrt(printratio)*dispratio));
        //alert(fRealHet);
        //alert(inner.offsetHeight/(Math.sqrt(printratio)*dispratio));
        //var fRealHet = inner.offsetHeight/(Math.sqrt(printratio)*dispratio);
        frame.style["height"] = (fRealHet * dispratio) + "px";
        
        
        frame.style['padding-left'] = frame.style['padding-right'] = ((frame.offsetWidth -2*frameborder*dispratio -inner.offsetWidth)/2)+"px";
        frame.style['padding-top'] = frame.style['padding-bottom'] = ((frame.offsetHeight -2*frameborder*dispratio -inner.offsetHeight)/2)+"px";

        inner.style['padding'] = matceiling*dispratio + "px";

        //frame.style["height"] = (inner.offsetHeight*inner.offsetWidth)/(260*Math.sqrt(printratio)) + "px";

        //alert(frame.style["width"] + "1 " + frame.style["height"] + " 2" + inner.style["width"]  + "3" + inner.style["height"]);

        //alert(hundredized(parseFloat(wid.value)/Math.sqrt(printratio)) +" " + fRealHet +" "+wid.value+" " + inner.offsetHeight/dispratio+" ");
        document.getElementById("result_table").style['display'] = "block";
        loadresult(hundredized(parseFloat(wid.value)/Math.sqrt(printratio)),fRealHet,wid.value,inner.offsetHeight/dispratio);
    }
    else{

    }

    
}

function changematsstatus(sta){
    if(sta == "C"){
        document.getElementById('frame').style['background-color'] = '#FFFFFF';
        document.getElementById('holder').style['border'] = '1px solid #000000';
        document.getElementById('holder').style['background-color'] = '#FFFFFF';
    }
    else if(sta == "W"){
        document.getElementById('frame').style['background-color'] = '#F7F7F4';
        document.getElementById('holder').style['border'] = '1px solid #000000';
        document.getElementById('holder').style['background-color'] = '#FFFFFF';
    }
    else if(sta == "N"){
        document.getElementById('holder').style['border'] = '1px solid #FFFFFF';
        document.getElementById('holder').style['background-color'] = '#FFFFFF';
        document.getElementById('frame').style['background-color'] = '#FFFFFF';
    }
    else{

    }
}

function loadresult(fw,fh,mw,mh){
    var _fw = document.getElementById("result_frame_width");
    var _fh = document.getElementById("result_frame_height");
    var _pw = document.getElementById("result_print_width");
    var _ph = document.getElementById("result_print_height");
    var _mw = document.getElementById("result_mat_width");
    var _mh = document.getElementById("result_mat_height");

    _fw.innerHTML = fw;
    _fh.innerHTML = fh;
    _pw.innerHTML = parseFloat(mw).toFixed(2)-20;
    _ph.innerHTML = parseFloat(mh).toFixed(2)-20;
    _mw.innerHTML = parseFloat(mw).toFixed(2);
    _mh.innerHTML = parseFloat(mh).toFixed(2);
}