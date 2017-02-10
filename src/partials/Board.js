import { SVG_NS, SETTINGS } from '../settings';


export default class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    render(svg) {
        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'fill', SETTINGS.boardFill);

        let line = document.createElementNS(SVG_NS, 'line');
        line.setAttributeNS(null, 'x1', this.width/2);
        line.setAttributeNS(null, 'x2', this.width/2);
        line.setAttributeNS(null, 'y1', this.height-this.height);
        line.setAttributeNS(null, 'y2', this.height);
        line.setAttributeNS(null, 'stroke', SETTINGS.mainFill);
        line.setAttributeNS(null, 'stroke-width', '3px');
        line.setAttributeNS(null, 'stroke-dasharray', '20, 15');

        svg.appendChild(rect);
        svg.appendChild(line);
    }
}