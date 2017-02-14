import { SVG_NS, SETTINGS } from '../settings';


export default class Score {
    constructor(x, y, size, playerWins) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.playerWins = playerWins;
    }


    
    render(svg, player) {

        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'font-size', this.size);
        text.setAttributeNS(null, 'fill', SETTINGS.mainFill);
        text.textContent = player.score;

        svg.appendChild(text);

        if(player.score >=2){
			let text1 = document.createElementNS(SVG_NS, 'text');
            text1.setAttributeNS(null, 'x', 128);
            text1.setAttributeNS(null, 'y', 128);
            text1.setAttributeNS(null, 'font-size', this.size);
            text1.setAttributeNS(null, 'fill', SETTINGS.mainFill);
            text1.setAttributeNS(null, 'id', 'winner');
            text1.textContent = `${this.playerWins} Wins!`;

            svg.appendChild(text1);
		}
    }
}
