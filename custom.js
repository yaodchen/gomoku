//var isPlayer = true; //check if human player
//var over = false; //if the game is over
//var canvas = document.getElementById('canvas');
//var ctx = canvas.getContext('2d');
window.onload = setup();

function setup() {
  isPlayer = true; //check if human player
  over = false; //if the game is over
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  hand = document.getElementById('hand');
  wins = [];
  board = []; //initial a 2d array
  myWin = [];
  aiWin = [];

  for (var i = 0; i < 18; i++) {
    board[i] = [];
    for (var j = 0; j < 18; j++) {
      board[i][j] = 0;
    }
  }
  drawboard(); //draw the chess board

  function drawboard() {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    for (var i = 0; i < 18; i++) {
      ctx.moveTo(18 + i * 36, 18);
      ctx.lineTo(18 + i * 36, 630);
      ctx.stroke();
      ctx.moveTo(18, 18 + i * 36);
      ctx.lineTo(630, 18 + i * 36);
      ctx.stroke();
    }
  }
}

//draw a piece on the board,this function is used by both human and AI player
var drawPiece = function(i, j, player) {
  ctx.beginPath();
  ctx.arc(i * 36 + 18, j * 36 + 18, 16, 0, 2 * Math.PI); //draw a circle piece
  //third parameter means draw circle from 3 o'clock, so i*36 needs to plus 18
  ctx.closePath();
  ctx.stroke();
  if (player) { //here human player is black piece
    ctx.fillStyle = "black";
  } else {
    ctx.fillStyle = "#D3D3D3";
  }
  ctx.fill();
}

////////////////////////////////////////////////////////////////////////////
//count how many ways to win in total
for (var i = 0; i < 18; i++) {
  wins[i] = [];
  for (var j = 0; j < 18; j++) {
    wins[i][j] = [];
  }
}



var count = 0; //count how many ways to win in total
//row win
for (var i = 0; i < 18; i++) {
  for (var j = 0; j < 14; j++) {
    for (var k = 0; k < 5; k++) {
      wins[i][j + k][count] = true;
      //wins[0][0][0]
      //wins[0][1][0]
      //wins[0][2][0]
      //wins[0][3][0]
      //wins[0][4][0]
      //this iteration records the first way of wining
    }
    count++;
  }
}

//col win
for (var i = 0; i < 18; i++) {
  for (var j = 0; j < 14; j++) {
    for (var k = 0; k < 5; k++) {
      wins[j + k][i][count] = true;
    }
    count++;
  }
}

//diagnal win 1
for (var i = 0; i < 14; i++) {
  for (var j = 0; j < 14; j++) {
    for (var k = 0; k < 5; k++) {
      wins[i + k][j + k][count] = true;
    }
    count++;
  }
}

//diagnal win 2
for (var i = 0; i < 14; i++) {
  for (var j = 17; j > 3; j--) {
    for (var k = 0; k < 5; k++) {
      wins[i + k][j - k][count] = true;
    }
    count++;
  }
}

console.log(count) //show how many ways to win in total

for (var i = 0; i < count; i++) {
  myWin[i] = 0;
  aiWin[i] = 0
} //all the way to win starts with a zero
///////////////////////////////////////////////////////////////////////////////////////////////

//human click function
canvas.onclick = function(e) {
  if (over || !isPlayer) {
    return;
  }
  var x = e.offsetX; //offset position is the mouse position inside the event target(the canvas)
  var y = e.offsetY;
  var i = Math.floor(x / 36);
  var j = Math.floor(y / 36);
  //get an integer to decide which cross point to draw on the board
  if (board[i][j] == 0) {
    board[i][j] = 1 //1 means human player's piece
    //put a piece in the 2d array
    drawPiece(i, j, isPlayer);

    var n = parseInt(hand.innerHTML) + 1;
    hand.innerHTML = n;

    for (var way = 0; way < count; way++) { //loop all ways of winning
      if (wins[i][j][way]) {
        myWin[way]++; //if this spot is used by a way of winning then increase that way of winning in player's win-way array
        aiWin[way] = 6; //give a nonsense number means ai player wont be able to win in this way anymore
        if (myWin[way] == 5) { //if this win-way is completed
          over = true;
          setTimeout(function() {
            console.log("doing over()")
            overwindow("human");
          }, 300);
        }
      }
    }
    if (!over) {
      isPlayer = !isPlayer;
      ai(level);
    }
  }
}
