

class Background {
    constructor(){
        this.x = 0
        this.top = new Image()
        this.top.src = "./images/backgroundTop.jpg"
        this.bottom = new Image()
        this.bottom.src = "./images/backgroundBottom.jpg" 
    }
    drawTop(){
        ctx.drawImage(this.top, 0, 0, canvas.width, canvas.height - floorHeight)
        
    }

    drawBottom(){
        ctx.drawImage(this.bottom, this.x, canvas.height - floorHeight, canvas.width * 2, floorHeight)  
    }
    update(){
        if(this.x <= -canvas.width){
            this.x = 0
        }
        this.x -= panSpeed
    }
}