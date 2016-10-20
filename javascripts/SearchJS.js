function Search(key_words) {

    var redirection ="";
    var condition = document.getElementById("cbxSearchcondtion").value;
    switch(condition){
        case 'SEARCH_ALL': redirection = "https://www.baidu.com/s?wd=";
        break;
        case 'SEARCH_PIC': redirection = "http://image.baidu.com/search/index?tn=baiduimage&word=";
        break;
        case 'SEARCH_MUSIC': redirection = "http://music.baidu.com/search?key=";
        break;
        default: break;
    }

    window.open(redirection + key_words);
}
function ExhcnageUnit(){
    var ori = parseFloat(document.getElementById('ori').value);
    var result;
    var condition = document.getElementById('unitExchangeType').value;
    switch(condition){
        case 'F2C': result = (ori-32)*5/9; 
        break;
        case 'C2F': result = ori*9/5+32;;
        break;
        case 'E2S': result = ori*2.54;
        break;
        case 'S2E': result = ori/2.54;
        break;
        default: break;
    }
    document.getElementById('res').value = result;

}