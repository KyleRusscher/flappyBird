
class Pipe {
    constructor(initX){
        this.scored = false
        this.initX = initX
        this.gap = 140;
        this.width = 80;
        this.height = Math.random() * (canvas.height * .4) + 100
        this.y = canvas.height - this.height
        this.x = canvas.width + this.initX
        this.pipeTopScreenHeight = this.y - this.gap
        this.pipeTop = new Image()
        this.pipeTop.src = "./images/pipe-top.png"
        this.pipeBottom = new Image()
        this.pipeBottom.src = "./images/pipe-bottom.png"
    }

    show(){
        ctx.fillStyle = 'green'
        ctx.drawImage(this.pipeTop, this.x,  (this.pipeTopScreenHeight) - this.pipeTop.height, this.width ,this.pipeTop.height) // top pipe image
        ctx.drawImage(this.pipeBottom, this.x, this.y, this.width, this.pipeBottom.height) // bottom rect
    }
    update(){
        if(this.colision()){
            restartGame()
        } else if(this.x + this.width <= 0){
            this.newPipe()
        } else {
            this.x -= panSpeed
        }
    }
    newPipe(){
        this.gap = 140 - player.score * 2
        this.width = 80;
        this.height = Math.random() * (canvas.height * .4) + 100
        this.y = canvas.height - this.height
        this.x = canvas.width 
        this.scored = false
        this.pipeTopScreenHeight = this.y - this.gap
    }
    colision(){
        if((player.x + player.sizeY - 2 > this.x && player.x < this.x + this.width) && (player.y < this.pipeTopScreenHeight || player.y + player.sizeX > this.y)){
            return true
        }
        return false
    }
}