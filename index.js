var a = Math.floor((Math.random() * 6 ) + 1);
document.getElementById("fimg").src = "images/dice"+a+".png";
var b = Math.floor((Math.random() * 6 ) + 1);
document.getElementById("simg").src = "images/dice"+b+".png";
if (a > b){
  var c = document.getElementById("text");
  c.innerHTML = "Player 1 win !";
}
if (a < b){
    document.getElementById("text").innerHTML = "Player 2 win !";
}
if (a === b){
   document.getElementById("text").innerHTML = "Draw";
}
