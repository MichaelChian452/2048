var board= [];
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        up();
    }
    else if (e.keyCode == '40') {
        down();
    }
    else if (e.keyCode == '37') {
       left();
    }
    else if (e.keyCode == '39') {
       right();
    }
    else {
        return;
    }
    add_2();
    var str = "";
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            str += board[i][j];
        }
        str += "\n";
    }
    console.log(str);
}

function start() {
    board = [];
    board.push([0, 0, 0, 0]);
    board.push([0, 0, 0, 0]);
    board.push([0, 0, 0, 0]);
    board.push([0, 0, 0, 0]);
    add_2();
    add_2();
    var str = "";
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            str += board[i][j];
        }
        str += "\n";
    }
    console.log(str);
}

function isLose() {
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            if(board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

function isWin() {
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            if(board[i][j] == 2048) {
                return true;
            }
        }
    }
    return false;
}

function add_2() {
    console.log(board.length);
    var n = Math.floor(Math.random() * 16);
    while(board[n / 4][n % 4] != 0) {
        n = Math.floor(Math.random() * 16);
    }
    board[n / 4][n % 4] = 2;
    }

function left() {
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            if(board[i][j] != 0) {
                for(var k = j - 1; k >= 0; k--) {
                    if(board[i][k] == 0) {
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if(board[i][k] == board[i][j]) {
                        board[i][k] *= 2;
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
}

function right() {
    for(var i = 0; i < 4; i++) {
        for(var j = 3; j >= 0; j--) {
            if(board[i][j] != 0) {
                for(var k = j + 1; k < 4; k++) {
                    if(board[i][k] == 0) {
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if(board[i][k] == board[i][j]) {
                        board[i][k] *= 2;
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
}

function up()
{
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            if(board[i][j] != 0) {
                for(var k = i - 1; k >= 0; k--) {
                    if(board[k][j] == 0) {
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if(board[k][j] == board[i][j]) {
                        board[k][j] *= 2;
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
}

function down()
{
    for(var i = 3; i >= 0; i--) {
        for(var j = 0; j < 4; j++) {
            if(board[i][j] != 0) {
                for(var k = i + 1; k < 4; k++) {
                    if(board[k][j] == 0) {
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if(board[k][j] == board[i][j]) {
                        board[k][j] *= 2;
                        board[i][j] = 0;
                    }
                }
            }
        }
    }
}