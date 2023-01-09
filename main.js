import Ball from './ball.js'
import Paddle from './paddle.js'

const ball = new Ball(document.getElementById("ball"))
//update loop
const playerPaddle = new Paddle(document.querySelector("#player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))

let lastTime 
function update(time) {
    if (lastTime!= null) {
        const delta = time - lastTime
        //ball.update(delta)
    }

    lastTime = time
    window.requestAnimationFrame(update)



}
document.addEventListener("mousemove" , e  => {
    playerPaddle.position = (e.y/ window.innerHeight) *100

})

window.requestAnimationFrame(update)

