import { SVG_NS, SETTINGS } from '../settings';


export default class Pause {
    constructor(x, y, pause) {
        this.x = x;
        this.y = y;
        this.pauseText = pause;
    }
    
    render(svg) {

        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'font-size', SETTINGS.fontSize);
        text.setAttributeNS(null, 'fill', SETTINGS.mainFill);
        text.setAttributeNS(null, 'id', 'paused');
        text.textContent = 'paused';

        svg.appendChild(text);
    }
}