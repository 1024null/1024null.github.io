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