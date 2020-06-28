
var externalText = "<div id=\"external\" style=\"position: fixed;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;animation: txcc 30s linear 0s infinite;\"><p style=\"font-size:50px;\">學測倒數</p><p id=\"en_day\" style=\"font-size:250px;margin:5px;\"></p></div>";

document.write(externalText);

var exter = document.getElementById("external");

function external(X, Y) {
    exter.style.left = (X - window.innerWidth / 2) / 150 + "px";
    exter.style.top = (Y - window.innerHeight / 2) / 150 + "px";
}

(document.getElementsByTagName("style"))[0].innerHTML += "@keyframes txcc { 0% { color: #0000ff; } 25% { color: #00ff00; } 50% { color: #ff0000; } 75% { color: #ffff00; } 100% { color: #0000ff; } }";

var day = document.getElementById("en_day");

var oDate1 = new Date(Date.now());
var oDate2 = new Date(2021,0,23);

cDay = (oDate2 - oDate1) / (1000 * 60 * 60 * 24);

day.innerText = parseInt(cDay);