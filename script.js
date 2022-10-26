// // function firstaAndLast(text) {
// //  let smth = text.slice(1, text.length-1)
// //   return smth
// // }
// // console.log(firstaAndLast('aboba'))


// // function ins(n, sn) {
// //   let f = n.slice(0, 1)
// //   let s = sn.slice(0, 1)
// //   let res = (f + "." + s)
// //   return res
// // }
// // console.log(ins('Nikita', 'Enanov'))

// // function smth(n){
// //   let lgaga = []
// // for (let i = n; i >= 1; i--) {
// // lgaga.push(i)
// // }
// // return lgaga
// // }
// // console.log(smth(5))

// // function pol(txt) {
// //     let lgaga = txt
// //     lgaga = lgaga.split("").reverse().join("")
// //     if(lgaga == txt) {
// //         return 'its palindrome'
// //     }else {
// //         return 'no its not palindrome'
// //     }
// // }
// // console.log(pol('kslaf;ja;f'))

// // function smth (a, b) {
// //     if(a == b){
// //      let s = a * a
// //      return s
// //     }else {
// //         let p = (a + b) * 2
// //         return 
// //     }
// // }
// // console.log(smth(10, 15))



// function convertToBinary(x) {
//     let bin = 0;
//     let rem, i = 1, step = 1;
//     while (x != 0) {
//         rem = x % 2;
//         console.log(
//             `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
//         );
//         x = parseInt(x / 2);
//         bin = bin + rem * i;
//         i = i * 10;
//     }
//     console.log(`Binary: ${bin}`);
// }

// // take input
// let number = prompt('Enter a decimal number: ');

// convertToBinary(number);

// // let binar = prompt('digit') 
// // let digi = binar.toString(16); 
// // console.log(digi)

// let binar = prompt('binary');
// let digi = parseInt(binar, 2);
// console.log(digi);







// function aboba(pizza) {
//     let arr = []
//     for (let i = 0; i < pizza.length; i++) {
//         let demon = Math.sqrt(pizza[i])
//    let android = demon % 1
//    if(android == 0) {
//     arr.push(demon)
//    } else {
//     let lgaga = Math.pow(pizza[i], 2)
//     arr.push(lgaga)
//    }
    
// }
// return arr
// }
// console.log(aboba([2,9,3,7,2,1]))


// // function stolb (count, between, len) {
// //     if(count >= 2) {
// //         let finbetween = (count-1)*(between*100)
// //         let finlen = len*count-(len+len)
// //         let endresult = parseInt(finlen + finbetween)
// //         return endresult
// //     } else {
// //         return "столбов должно быть не меньше двух"
// //     }
// // }
// // console.log(stolb(3, 10, 25))

// function norepeat(mas) {
//     for (let i = 0; i < mas.length; i++) {
//         if(i != mas.lastIndexOf(mas[i])) {
//             return false
//         } 
            
        
        
//     }
//     return true
// }

// console.log(norepeat([1, 2, 3, 4]))





// // let arr = []
// // for (let i = -50; i < 150; i++) {
// //     let num = (i % 5)
// //     if(num == 0) {
// //         arr.push(i)
// //     }
// // }

// // console.log(arr)


// function rev(n) {
//   n = String(n)
//   let arr = n.split("")
//   arr = arr.reverse()
//   return arr
// }
// console.log(rev(12345))


// // function getRandomArbitrary(min, max) {
// //     return Math.random() * (max - min) + min;
// //   }



// // for (let i = 0; i < array.length; i++) {
// //     const element = array[i];
    
// // }


// for (let index = 0; index < array.length; index++) {
//     console.log(i)



// function plostAndPer(left,up) {
//    let per = left + up * 2
//    let plost = left * up
//     return [per,plost]
// }

// console.log(plostAndPer(10,5))


// function sumArr(arr) {
//     let sumarr = 0
//     for (let i = 0; i < arr.length; i++) {
//      sumarr += arr[i]
//     }
//     return sumarr
// }

// console.log(sumArr([2,2,4]))

// function rev(arr) {
// arr = arr.reverse()
// return arr
// }

// console.log(rev([1,2,3]))



// let i
// while (true) {
//     console.log(i)
//     i++
// }





// class coffemachine {

//     #water = 0

//     #coffeebeans = 0

//     #milk = 0

//     #mode = 'off'

//     set mode(mode) {
//         if(this.mode == 'off') {
//             this.mode = 'on'
//         } else {
//             this.mode = 'off'
//         }
//     }

//     set addwater(water) {
//         if(water + this.water < 1001) {

//             if(water + this.water > 0) {
//                 this.water = water
//             } else {

//                 throw Error('воды должно быть не меньше 0 и не больше 1000')

//             }
        
//         } 
            
    
//     }

//     set addbeans(beans) {

//         if(beans + this.beans < 301) {

//                 if(beans + this.beans > 0) {
//                     this.beans = beans
//                 } else{

//                     throw Error('бобов должно быть не меньше 0 и не больше 300')

//                 } 
            
//         }
//     } 

//     set addmilk(milk) {
//         if(milk + this.milk < 501) {

//             if(milk + this.milk > 0) {
//                 this.milk = milk
//             }
//         } 
//     }

//     docoffe() {
//         if(this.#mode == 'on') {
//         if(this.#water > 100) {
//         if(this.#milk > 60) {
//         if(this.#coffeebeans > 30) {
//                         console.log('ваше кофе готово')
//                     }
//                         throw Error ('бобов должно быть не меньше 30')
//                     }
//                 }else {
//                     throw Error ('молока должно быть не меньше 60мл')
//                 }
//             }
//         }else {
//             throw Error ('воды должно быть не меньше 100мл')
//         }
//             throw Error ('кофе машина выключена')
//         }
//     }

//  let coffemachine = coffemachine
 

function setup() {
    createCanvas (1870, 1070)
}

function draw() {
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
