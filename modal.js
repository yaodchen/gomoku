var level;
var btns = document.getElementsByClassName('button');
var btns2 = document.getElementsByClassName('button2');
var modal = document.getElementById('modal');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var getLevel = function(event){
  console.log("click");
  var key = event.target.id;
  level = key;
  console.log(level);
  modal.style.display ="none";
  document.getElementById('level').innerHTML = level;
  console.log(isPlayer);
}

var getIsPlayer = function(event){
  var first = event.target.id;
  if(first=="Yes"){
    isPlayer = true;
  }else{
    isPlayer = false;
  }
  modal2.style.display = "none";

  if(!isPlayer){
    drawPiece(8,8,false);
    board[8][8] = 2;
    isPlayer = !isPlayer;
  }

}

var overwindow = function(who){
  modal3.style.display="block";
  var info = document.getElementById('info');
  if(who=="human"){
    info.innerHTML = "You Win!"
  }
  else{
    info.innerHTML ="AI Win!"
  }
}


for(var i=0;i<btns.length;i++){
  btns[i].addEventListener("click",getLevel);
  console.log("added")
};
for(var i=0;i<btns2.length;i++){
  btns2[i].addEventListener("click",getIsPlayer);
  console.log("added")
};
