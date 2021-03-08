
import Ball from '../balls.js';
import Player from '../player.js';

setInterval(createBall, 500);

let player = new Player().body;
document.body.appendChild(player);

function createBall () {
    let killer = new Ball; 
    setBallType(killer);
    let ball = killer.ball;
    document.body.appendChild(ball);
    setTimeout(() => {
        document.body.removeChild(ball);
    }, 6000)
};

function setBallType (ball) {
    let number =  Math.floor((Math.random() * 10) + 1);
    if (number <= 7) {
        ball.setType('killer');
    } else {
        ball.setType('healer');
    }
}

document.addEventListener('keydown', event => {
    console.log(event);
    if (event.key === "ArrowLeft") {
        let style = window.getComputedStyle(player);
        let left = style.getPropertyValue('left');
        let leftPlain = left.slice(0, left.length - 2);
        player.style.left = (parseFloat(leftPlain) - 20) + 'px';
    }
    if (event.key === "ArrowRight") {
        let style = window.getComputedStyle(player);
        let left = style.getPropertyValue('left');
        let leftPlain = left.slice(0, left.length - 2);
        player.style.left = (parseFloat(leftPlain) + 20) + 'px';
    }
});

// changeColor(4);

// function changeColor(numTimes) {
//     delay(1500)
//     .then(() => {
//         if(numTimes == -1) {
//             console.log('I am done');
//         } else {
//             console.log('Currently at:',numTimes);
//             killer.style.backgroundColor = colors[numTimes];
//             changeColor(numTimes - 1);
//         }
//     }).catch(() => {});
// }

// function delay (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, time);
//     });
// }