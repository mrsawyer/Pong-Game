import { SVG_NS, SETTINGS } from '../settings';

export default class Ball {

    constructor(radius, boardWidth, boardHeight) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.reset();
    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
    }
    

    render(svg) {

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'fill', SETTINGS.mainFill);
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        svg.appendChild(circle);
    }
}