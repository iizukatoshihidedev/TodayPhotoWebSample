//====================================
//
//今日の写真
//Toshihide Iizuka
//
//2021/03/14
//
//====================================

//Main

//データ
var masterdata = new Array();

function init() {
    //ファイルの読み込み
    csv_data('./list.csv');

    function csv_data(dataPath) {
        const request = new XMLHttpRequest();
        request.addEventListener('load', (event) => {
            const response = event.target.responseText;
            var resArray = response.split("\n");
            
            //1行目を削除した配列を生成する
            for ( var i=1; i<resArray.length; i++ ) {
                masterdata.push(resArray[i]);
            }
            
            loadimage();
        });
        request.open('GET', dataPath, true);
        request.send();
    }
}

function loadimage() {
    var index = Math.round( Math.random()*masterdata.length);
    var mdata = masterdata[index];
    var data = mdata.split(",");
    var src = data[2];
    
    //画像表示
    var bg = document.getElementById("bg");
    bg.src = "./Album/" + src;
}