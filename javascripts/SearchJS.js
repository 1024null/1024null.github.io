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
