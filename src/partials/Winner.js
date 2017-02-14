import { SVG_NS, SETTINGS } from '../settings';


export default class Winner {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    render(svg, player) {

        if(player.score >=2){
			document.getElementById('winner').style.visibility = 'visible';
			return;
		}

        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, 'x', this.x-140);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'font-size', this.size);
        text.setAttributeNS(null, 'fill', SETTINGS.mainFill);
        text.setAttributeNS(null, 'id', 'winner');
        text.textContent = `May the force be with you ${player}`;

        svg.appendChild(text);

    }
}