import { SVG_NS } from '../settings';


export default class Pause {
    constructor(x, y, pause) {
        this.x = x;
        this.y = y;
        this.pauseText = pause;
    }
    
    render(svg) {

        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, 'x', 0);
        text.setAttributeNS(null, 'y', this.y +40);
        text.setAttributeNS(null, 'font-size', '123px');
        text.setAttributeNS(null, 'fill', 'red');
        text.setAttributeNS(null, 'id', 'paused');
        text.textContent = 'paused';

        svg.appendChild(text);
    }
}