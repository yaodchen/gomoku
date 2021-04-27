//computer play function

var ai = function(level){
  if(level=="EZ"){
    EZcomputerAI();
    console.log('using EZbot')
  }else if(level=="NM"){
    NMcomputerAI();
    console.log('using NMbot')
  }else if(level=="HD"){
    HDcomputerAI()
    console.log('using HDbot')
  }
  else{
    NMcomputerAI();
    console.log('using NMbot')
  }
}



var NMcomputerAI = function() {
  var myScore = []; //human player's score
  var computerScore = []; //ai player's score
  var max = 0; //the current highest score
  var u = 0, //the current highest score's x cord
    v = 0; //the current highest score's y cord
  for (var i = 0; i < 18; i++) {
    myScore[i] = [];
    computerScore[i] = [];

    for (var j = 0; j < 18; j++) {
      myScore[i][j] = 0;
      computerScore[i][j] = 0;
    }
  }
  for (var i = 0; i < 18; i++) {
    for (var j = 0; j < 18; j++) {
      if (board[i][j] == 0) {//if there is no piece on the spot
        for (var k = 0; k < count; k++) {
          if (wins[i][j][k]) {
            if (myWin[k] == 1) {
              myScore[i][j] += 200;
            } else if (myWin[k] == 2) {
              myScore[i][j] += 400;
            } else if (myWin[k] == 3) {
              myScore[i][j] += 2000;
            } else if (myWin[k] == 4) {
              myScore[i][j] += 10000;
            }

            if (aiWin[k] == 1) {
              computerScore[i][j] += 220;
            } else if (aiWin[k] == 2) {
              computerScore[i][j] += 420;
            } else if (aiWin[k] == 3) {
              computerScore[i][j] += 2100;
            } else if (aiWin[k] == 4) {
              computerScore[i][j] += 20000;
            }
          }
        }

        if (myScore[i][j] > max) {
          max = myScore[i][j];
          u = i;
          v = j;
        } else if (myScore[i][j] == max) {
          if (computerScore[i][j] > computerScore[u][v]) {
            u = i;
            v = j;
          }
        }

        if (computerScore[i][j] > max) {
          max = computerScore[i][j];
          u = i;
          v = j;
        } else if (computerScore[i][j] == max) {
          if (myScore[i][j] > myScore[u][v]) {
            u = i;
            v = j;
          }
        }

      }
    }
  }
  drawPiece(u, v, false);
  board[u][v] = 2;

  for (var k = 0; k < count; k++) {
    if (wins[u][v][k]) {
      aiWin[k]++;
      myWin[k] = 6;
      if (aiWin[k] == 5) {
        setTimeout(function() {
          overwindow(ai);
        }, 300);
        over = true;
      }
    }
  }
  if (!over) {
    isPlayer = !isPlayer;
  }
}

///////////////////////////////////////////////////////////
var EZcomputerAI = function() {
  var myScore = []; //human player's score
  var computerScore = []; //ai player's score
  var max = 0; //the current highest score
  var u = 0, //the current highest score's x cord
    v = 0; //the current highest score's y cord
  for (var i = 0; i < 18; i++) {
    myScore[i] = [];
    computerScore[i] = [];

    for (var j = 0; j < 18; j++) {
      myScore[i][j] = 0;
      computerScore[i][j] = 0;
    }
  }
  for (var i = 0; i < 18; i++) {
    for (var j = 0; j < 18; j++) {
      if (board[i][j] == 0) {//if there is no piece on the spot
        for (var k = 0; k < count; k++) {
          if (wins[i][j][k]) {
            if (myWin[k] == 1) {
              myScore[i][j] += 200;
            } else if (myWin[k] == 2) {
              myScore[i][j] += 400;
            } else if (myWin[k] == 3) {
              myScore[i][j] += 2000;
            } else if (myWin[k] == 4) {
              myScore[i][j] += 100;
            }

            if (aiWin[k] == 1) {
              computerScore[i][j] += 100;
            } else if (aiWin[k] == 2) {
              computerScore[i][j] += 380;
            } else if (aiWin[k] == 3) {
              computerScore[i][j] += 2000;
            } else if (aiWin[k] == 4) {
              computerScore[i][j] += 1000;
            }
          }
        }

        if (myScore[i][j] > max) {
          max = myScore[i][j];
          u = i;
          v = j;
        } else if (myScore[i][j] == max) {
          if (computerScore[i][j] > computerScore[u][v]) {
            u = i;
            v = j;
          }
        }

        if (computerScore[i][j] > max) {
          max = computerScore[i][j];
          u = i;
          v = j;
        } else if (computerScore[i][j] == max) {
          if (myScore[i][j] > myScore[u][v]) {
            u = i;
            v = j;
          }
        }

      }
    }
  }
  drawPiece(u, v, false);
  board[u][v] = 2;

  for (var k = 0; k < count; k++) {
    if (wins[u][v][k]) {
      aiWin[k]++;
      myWin[k] = 6;
      if (aiWin[k] == 5) {
        setTimeout(function() {
          overwindow(ai);
        }, 300);
        over = true;
      }
    }
  }
  if (!over) {
    isPlayer = !isPlayer;
  }
}
/////////////////////////////////////////////////////////////////////////////
var HDcomputerAI = function() {
  var myScore = []; //human player's score
  var computerScore = []; //ai player's score
  var max = 0; //the current highest score
  var u = 0, //the current highest score's x cord
    v = 0; //the current highest score's y cord
  for (var i = 0; i < 18; i++) {
    myScore[i] = [];
    computerScore[i] = [];

    for (var j = 0; j < 18; j++) {
      myScore[i][j] = 0;
      computerScore[i][j] = 0;
    }
  }
  for (var i = 0; i < 18; i++) {
    for (var j = 0; j < 18; j++) {
      if (board[i][j] == 0) {//if there is no piece on the spot
        for (var k = 0; k < count; k++) {
          if (wins[i][j][k]) {
            if (myWin[k] == 1) {
              myScore[i][j] += 200;
            } else if (myWin[k] == 2) {
              myScore[i][j] += 400;
            } else if (myWin[k] == 3) {
              myScore[i][j] += 2000;
            } else if (myWin[k] == 4) {
              myScore[i][j] += 18000;
            } //else if (myWin[k] == 5){
              //myScore[i][j] += 20000;
            //}

            if (aiWin[k] == 1) {
              computerScore[i][j] += 220;
            } else if (aiWin[k] == 2) {
              computerScore[i][j] += 420;
            } else if (aiWin[k] == 3) {
              computerScore[i][j] += 2200;
            } else if (aiWin[k] == 4) {
              computerScore[i][j] += 20000;
            } //else if (aiWin[k] == 5) {
              //computerScore[i][j] += 25000;
            //}
          }
        }

        if (myScore[i][j] > max) {
          max = myScore[i][j];
          u = i;
          v = j;
        } else if (myScore[i][j] == max) {
          if (computerScore[i][j] > computerScore[u][v]) {
            u = i;
            v = j;
          }
        }

        if (computerScore[i][j] > max) {
          max = computerScore[i][j];
          u = i;
          v = j;
        } else if (computerScore[i][j] == max) {
          if (myScore[i][j] > myScore[u][v]) {
            u = i;
            v = j;
          }
        }

      }
    }
  }
  // var checkResult = schemeCheck();
  // console.log(checkResult);
  // if(checkResult[0]){
  //   u=checkResult[1];
  //   v=checkResult[2];
  // }

  drawPiece(u, v, false);
  board[u][v] = 2;

  for (var k = 0; k < count; k++) {
    if (wins[u][v][k]) {
      aiWin[k]++;
      myWin[k] = 6;
      if (aiWin[k] == 5) {
        setTimeout(function() {
          overwindow(ai);
        }, 300);
        over = true;
      }
    }
  }
  if (!over) {
    isPlayer = !isPlayer;
  }
}


function schemeCheck(){
  for(var i=4;i<14;i++){
    for(var j=4;j<14;j++){
      if(board[i][j]==0){
        var countFlower = 0
        var countTwo = 0
        if(board[i][j-1]==1&&board[i][j-2]==1&&board[i][j-3]==0){//top 2
          countTwo+=1;
        }
        if(board[i][j+1]==1&&board[i][j+2]==1&&board[i][j+3]==0){//down 2
          countTwo+=1;
        }
        if(board[i-1][j]==1&&board[i-2][j]==1&&board[i-3][j]==0){//left2
          countTwo+=1;
        }
        if(board[i+1][j]==1&&board[i+2][j]==1&&board[i+3][j]==0){//right2
          countTwo+=1;
        }
        if(board[i+1][j]==1&&board[i-1][j]&&board[i][j+1]&&board[i][j-1]==1){
          countFlower +=1
        }
      }
      if(countFlower > 0){
        return[true,i,j];
      }
      if(countTwo >= 2){
        return [true,i,j];
      }
    }
  }
  return [false];
}
