export default class Ball {
    constructor () {
        this.ball = document.createElement('div');
        this.hposition = (window.innerWidth/( Math.floor((Math.random() * 10) + 1)));
        this.ball.style.left = (this.hposition - 70) + 'px';
    }

    setType(cssClass) {
       this.ball.classList.add(cssClass);
    }
}