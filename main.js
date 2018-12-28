
const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')
ctx.font = "bold 40px Arial";

window.addEventListener("mousedown", click);
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        createObjects
    }
}

// constants
let panSpeed = 2
const gravity = .4
const floorHeight = 50

// game objects, initialized in createObjects()
var palyer;
var pipe1;
var pipe2;

function createObjects(){
    player = new Player(canvas.width / 3, canvas.height / 2)
    pipe1 = new Pipe(0)
    pipe2 = new Pipe(canvas.width / 1.5)
    background = new Background()
}

// main method
function draw(){
    ctx.clearRect(0, 0, 600, 600)
    background.drawTop()
    pipe1.update()
    pipe1.show()
    pipe2.update()
    pipe2.show()
    background.drawBottom()
    background.update()
    player.update()
    player.show()
    ctx.fillStyle = "black"
    ctx.fillText(player.score, canvas.width / 2, 40)
    score()
    requestAnimationFrame(draw)
}


function score(){
    if(!pipe1.scored && player.x >= pipe1.x){
        pipe1.scored = true
        player.score++
        
    }
    if(!pipe2.scored && player.x >= pipe2.x){
        pipe2.scored = true
        player.score++
    }
}

function restartGame(){
    createObjects()
}

function click(){
    player.jump()
}

createObjects();
draw();






