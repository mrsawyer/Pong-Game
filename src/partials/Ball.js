import { SVG_NS, SETTINGS } from '../settings';


export default class Ball {

    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.reset();
        this.ping = new Audio('public/sounds/pong-02.wav');
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

    paddleCollision(player1, player2) {
        if (this.vx > 0) { 
            let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
            let [leftX, rightX, topY, bottomY] = paddle;
            if( this.x + this.radius >= leftX &&
                this.x + this.radius <= rightX &&
                topY <= this.y &&
                bottomY >= this.y){
                this.vx = -this.vx;
                this.ping.play();
            }
        } else {
            let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
            let [leftX, rightX, topY, bottomY] = paddle; 
            if( this.x - this.radius >= leftX &&
                this.x - this.radius <= rightX &&
                topY <= this.y &&
                bottomY >= this.y){
                this.vx = -this.vx;
                this.ping.play();
            }
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

    goal (player) {
        player.score ++;
        this.reset();
    }

    render(svg, player1, player2) {

        this.x += this.vx;
        this.y += this.vy;
        this.wallCollision();
        this.paddleCollision(player1, player2);

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'fill', SETTINGS.mainFill);
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        svg.appendChild(circle);

        const rightGoal = (this.x + this.radius) >= (this.boardWidth);
        const leftGoal = (this.x - this.radius) <= (this.boardWidth-this.boardWidth);

        if(rightGoal){
            this.goal(player1);
            SETTINGS.direction = 1;
        }else if(leftGoal) {
            this.goal(player2);
            SETTINGS.direction = -1;
        }
    }
}