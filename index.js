var board= [];
var gameOver = false;
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;
    if(gameOver) {
        return;
    }

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
    update();
    if(isWin()) {
        gameOver = true;
        document.getElementById("game-over-message").innerHTML = "You win";
        document.getElementById("game-over-message").style.display = "block";
    }
    else if(isLose()) {
        gameOver = true;
        document.getElementById("game-over-message").innerHTML = "You lose";
        document.getElementById("game-over-message").style.display = "block";
    }
}

function update() {
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            if(board[i][j] == "0") {
                document.getElementById("" + i + "-" + j).innerHTML = "";
            }
            else {
                document.getElementById("" + i + "-" + j).innerHTML = board[i][j];
            }
        }
    }
}

function start() {
    board = [];
    gameOver = false;
    board.push([0, 0, 0, 0]);
    board.push([0, 0, 0, 0]);
    board.push([0, 0, 0, 0]);
    board.push([0, 0, 0, 0]);
    add_2();
    add_2();
    board = [[4, 128, 32, 2], [512, 32, 64, 256], [2, 4, 8, 16], [2, 4, 2, 2]];
    update();
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
            if(board[i][j] == board[i][j + 1]) {
                return false;
            }
            if(board[i][j] == board[i + 1][j]) {
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
    var n = Math.floor(Math.random() * 16);
    while(board[Math.floor(n / 4)][n % 4] != 0) {
        n = Math.floor(Math.random() * 16);
    }
    board[Math.floor(n / 4)][n % 4] = 2;
}

function left() {
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 2; j++) {
            var save = board[i][j];
            board[i][j] = board[i][3 - j];
            board[i][3 - j] = save;
        }
    }
    right();
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 2; j++) {
            var save = board[i][j];
            board[i][j] = board[i][3 - j];
            board[i][3 - j] = save;
        }
    }
}

function right() {
    for(var i = 0; i < 4; i++) {
        for(var j = 2; j >= 0; j--) {
            if(board[i][j] != 0) {
                var cur = j;
                for(var k = j + 1; k < 4; k++) {
                    if(board[i][k] == board[i][cur]) {
                        board[i][k] *= 2;
                        board[i][cur] = 0;
                        cur = k;
                    }
                    else if(board[i][k] != 0) {
                        var prev = board[i][cur];
                        board[i][cur] = 0;
                        board[i][k - 1] = prev;
                        cur = k;
                    }
                    else if(k == 3) {
                        var prev = board[i][cur];
                        board[i][cur] = 0;
                        board[i][k] = prev;
                        cur = k;
                    }
                }
            }
        }
    }
}

function up()
{
    for(var i = 0; i < 2; i++) {
        for(var j = 0; j < 4; j++) {
            var save = board[i][j];
            board[i][j] = board[3 - i][j];
            board[3 - i][j] = save;
        }
    }
    down();
    for(var i = 0; i < 2; i++) {
        for(var j = 0; j < 4; j++) {
            var save = board[i][j];
            board[i][j] = board[3 - i][j];
            board[3 - i][j] = save;
        }
    }
}

function down()
{
    for(var j = 0; j < 4; j++) {
        for(var i = 2; i >= 0; i--) {
            if(board[i][j] != 0) {
                var cur = i;
                for(var k = i + 1; k < 4; k++) {
                    if(board[k][j] == board[cur][j]) {
                        board[k][j] *= 2;
                        board[cur][j] = 0;
                        cur = k;
                    }
                    else if(board[k][j] != 0) {
                        var prev = board[cur][j];
                        board[cur][j] = 0;
                        board[k - 1][j] = prev;
                        cur = k;
                    }
                    else if(k == 3) {
                        var prev = board[cur][j];
                        board[cur][j] = 0;
                        board[k][j] = prev;
                        cur = k;
                    }
                }
            }
        }
    }
}