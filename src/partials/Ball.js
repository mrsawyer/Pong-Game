import { SVG_NS, SETTINGS } from '../settings';

export default class Ball {

    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.reset();
    }

    wallCollision() {
        const hitLeft = (this.x - this.radius) <= (this.boardWidth-this.boardWidth);
        const hitRight = (this.x + this.radius)>= (this.boardWidth);
        const hitTop = (this.y - this.radius) <= (this.boardHeight-this.boardHeight);
        const hitBottom = (this.y + this.radius) >= (this.boardHeight);

        if (hitLeft || hitRight){
            this.vx = -this.vx;
        }else if (hitBottom || hitTop) {
            this.vy = -this.vy;
        }
    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;

        while(this.vy === 0){
            this.vy = Math.floor(Math.random() * 10 - 5);
        }
        
        this.vx = SETTINGS.direction * (6 - Math.abs(this.vy));
    }
    

    render(svg) {
        this.x += this.vx;
        this.y += this.vy;
        this.wallCollision();

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'fill', SETTINGS.mainFill);
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        svg.appendChild(circle);
    }
}