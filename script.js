var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,2,2,1,2,2,2,2,1,1,2,2,2,2,1,2,2,2,1,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,1,2,1,2,1,2,2,2,2,0,0,2,2,2,2,1,2,1,2,1,2,1,2],
    [0,1,2,1,2,1,2,1,2,0,0,0,0,0,0,0,0,2,1,2,1,2,1,2,1,0],
    [0,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1,0],
    [0,1,2,1,2,1,2,1,2,0,0,0,0,0,0,0,0,2,1,2,1,2,1,2,1,0],
    [2,1,2,1,2,1,2,1,2,2,2,2,2,2,2,2,2,2,1,2,1,2,1,2,1,2],
    [2,1,2,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,2,1,2],
    [2,1,2,1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]

function createWorld() {
    var output = '';
    for (let i=0; i<world.length; i++) {
        output += '\n<div class="row">\n';
        for (let j=0; j<world[i].length; j++) {
            if (world[i][j] == 2) {
                output += '<div class="brick"></div>'
            }
            else if (world[i][j] == 1 || world[i][j] == 5) {
                output += '<div class="Coin"></div>'
            }
            if (world[i][j] == 0) {
                output += '<div class="empty"></div>'
            }
            if (world[i][j] == 3) {
                output += '<div class="fruit"></div>'
            }
        }
        output += '\n</div>'
    }
    document.getElementById("world").innerHTML = output;
}

createWorld()


var x = 0;
var y = 0;
pacman = document.getElementById("pacman");
var Xstart = pacman.style.left = `${x+445}px`;
var ystart = pacman.style.top = `${y+20}px`;
score = parseFloat(document.getElementById("score").innerText)


document.onkeydown = function(e) {
    if (e.keyCode == 37 && world[y+1][x] !== 2) {
        x--;
        console.log (x)
    }
    if (e.keyCode == 39 && world[y+1][x+2] !== 2) {
        x++;
    }
    if (e.keyCode ==38 && world[y][x+1] !== 2) {
        y--;
    }
    if (e.keyCode ==40 && world[y+2][x+1] !== 2) {
        y++;
    }
    pacman.style.left = `${x*20+445}px`;
    pacman.style.top = `${y*20+20}px`;
    if (world[y+1][x+1] == 1) {
        world[y+1][x+1] = 0;
        createWorld()
        score++
        document.getElementById('score').innerText = score;
    }
    if (world[y+1][x+1] == 3 ) {
        world[y+1][x+1] = 0;
        score += 50;
        document.getElementById('score').innerText = score;
        
    }
    console.log(x)
    console.log(y)
}

// function worldCreate() {
//     var output = '';
//     for (let i=0; i<16; i++) {
//         output += '<div class="row">';
//         if (i == 0 || i == 15) {
//             for (let j=0; j<20;j++) {
//                 output += '\n<div class="brick"></div>\n'
//             }
//         }
//         else {for (let j=0; j<20;j++) {
//             if (j==0||j==19|| j==6) {
//                 output += '\n<div class="brick"></div>\n'
//             }
//             else {output += '\n<div class="Coin"></div>\n'}
//             }
//         }
//         output += '\n</div>'
//     }
//     document.getElementById("world").innerHTML = output;
// }

// worldCreate()



