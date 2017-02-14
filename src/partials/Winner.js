import { SVG_NS, SETTINGS } from '../settings';


export default class Score {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }


    
    render(svg, player) {

        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'font-size', this.size);
        text.setAttributeNS(null, 'fill', SETTINGS.mainFill);
        text.textContent = `May the force be with you ${player}`;

        svg.appendChild(text);
    }
}