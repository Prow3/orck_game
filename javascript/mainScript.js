function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    setup()
    background('skyblue')
    for (const balloon of Game.balloons) {
        balloon.display()
        balloon.move()

        if(balloon.y <= balloon.size/2 && balloon.color != 'black') {
            noLoop()
            Game.balloons.length = 0
            background('green')
            let scoro = Game.score
            Game.score = ''
            textSize(64)
            fill('black')
            textAlign(CENTER, CENTER)
            text("FINISH", 200, 200)
            textSize(34)
            text('Score ' + scoro, 200, 300)

            
        }
    }
    textSize(32)
    fill('black')
    text(Game.score, 20, 40)
    if(frameCount % 80 == 0) {
    Game.addcommonballoon(50,1,'blue')
    }
    if(frameCount % 200 == 0) {
    Game.addnigerballoon(40,2,'black')
    }
    if(frameCount % 2000 == 0) {
    Game.addCaldynBaloon(40,2,'Magenta')
    }
}


function mousePressed() {
    Game.checkifballoonburst()
    if(isLooping() == false) {
        loop()
        Game.score = 0
    }
}

class Game {
    static balloons = []
    static score = 0
    static addcommonballoon(size, speed, color) {
        let balloon = new CommonBalloon(size, speed, color)
        this.balloons.push(balloon)
    }
    static addnigerballoon(size, speed, color) {
        let balloon = new nigerballoon(size, speed, color)
        this.balloons.push(balloon)
    }
    static addCaldynBaloon(size, speed, color) {
        let balloon = new CaldynBaloon(size, speed, color)
        this.balloons.push(balloon)
    }
    static SpaceTraveler(size, speed, color) {
        let balloon = new SpaceTraveler(size, speed, color)
        this.balloons.push(balloon)
    }
    static checkifballoonburst() {
        this.balloons.forEach((balloon, index) => {
            let distance = dist(balloon.x, balloon.y, mouseX, mouseY)
            if(distance <= balloon.size / 2) {
                balloon.burst(index)
            }
        })
    }
}

class CommonBalloon {
    constructor(size, speed, color) {
        this.x = random(width)
        this.y = random(height - 10, height + 50)
        this.color = color
        this.size = size
        this.speed = speed
        this.teleport = 0
    }
    display() {
        fill(this.color)
        ellipse(this.x, this.y, this.size)
        line(this.x, this.y + this.size/2, this.x, this.y + 2 * this.size)
    }
    
    move() {
        if (Game.score > 100){
            this.speed = 1.3
        }
        this.y -= this.speed
    }

    burst(index) {
        Game.balloons.splice(index, 1)
        Game.score += 1
    }
}

class nigerballoon extends CommonBalloon{
    burst(index) {
        Game.balloons.splice(index, 1)
        Game.score += 10
    }
    move() {
        if (Game.score > 100){
            this.speed = 1.2
        }
        this.y -= this.speed
    }
}

class CaldynBaloon extends CommonBalloon {

    move() {
        if (Game.score > 100){
            this.speed = 1.3
        }
        this.y -= this.speed
    }
    burst(index) {
        this.teleport += 1
        if(this.teleport <= 1) {
            this.x = random(width)
            this.y = random(height - 300, height + 0)
        }else {
        Game.balloons.splice(index, 1)
        Game.score += 10
        }
    }
}
