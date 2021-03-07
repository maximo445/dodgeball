export default class Player {
    constructor() {
        this.body = document.createElement('div');
        this.body.classList.add('player');
        this.body.style.left = (window.innerWidth/2) + 'px';
    }
}