

class Player{
    constructor(x, y){
        this.x = x
        this.y = y
        this.velY = 0
        this.velX = panSpeed
        this.sizeX = 25
        this.sizeY = 40
        this.score = 0
        this.count = 0
        this.bird = new Image()
        this.bird.src = "./images/bird.png"
        
    }

    show(){
        ctx.fillStyle = "red"
        ctx.drawImage(this.bird,this.x,this.y, this.sizeY, this.sizeX);     
    }

    update(){
        this.velY += gravity
        this.y += this.velY
        this.hitFloor()
        this.hitCeiling()
    }
    jump(){
        this.velY = -7
    }
    hitFloor(){
        if(this.y > canvas.height - floorHeight - player.sizeX){
            restartGame()
        }
    }
    hitCeiling(){
        if(this.y < 0){
            this.y = 0
            this.velY = 0
        }
    }
    
}