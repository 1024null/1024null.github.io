function changeStyle(){
    
    var frameWidth = document.getElementById("frameWidth").value;
    var frameHeight = document.getElementById("frameHeight").value;
    var frameBorder = document.getElementById("frameBorder").value;

    var innerWidth = document.getElementById("innerWidth").value;
    var innerHeight = document.getElementById("innerHeight").value;



    if(frameHeight-innerHeight<=0||frameWidth-innerWidth<=0){
        alert("画心尺寸不应该大于或等于画框尺寸！");
    }
    else{
        var innerMarginTop = (frameHeight-innerHeight)/2;

        document.getElementById("innerMarginVertical").value = innerMarginTop;
        document.getElementById("innerMarginHorizontal").value = (frameWidth-innerWidth)/2;
        var targetFrame = document.getElementById("targetFrame");
        var targetInner = document.getElementById("targetInner");
        if(frameHeight-800>=0){
            targetFrame.style.cssText +=  "border:solid "+ frameBorder/2 +"px #000000;width:"+frameWidth/2+"px;height:"+frameHeight/2+"px;"
            targetInner.style.cssText +=  "width:"+innerWidth/2+"px;height:"+innerHeight/2+"px;margin-top:"+innerMarginTop/2+"px;";
        }
        else{
            targetFrame.style.cssText +=  "border:solid "+ frameBorder +"px #000000;width:"+frameWidth+"px;height:"+frameHeight+"px;"
            targetInner.style.cssText +=  "width:"+innerWidth+"px;height:"+innerHeight+"px;margin-top:"+innerMarginTop+"px;";
        }
        targetFrame.title = "宽："+ frameWidth +"mm*高："+frameHeight+"mm";
        targetInner.title = "宽："+ innerWidth +"mm*高："+innerHeight+"mm";
    }
}