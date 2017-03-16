import { SVG_NS, SETTINGS } from '../settings';

export default class Paddle {

    constructor(boardHeight, width, height, x, y, up, down) {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.up = up;
        this.down = down;
        this.score = SETTINGS.score;

        if(!SETTINGS.pause){
            document.addEventListener('keydown', event => {
                
                switch (event.keyCode) {
                    case this.up:
                        this.y = Math.max((this.y-SETTINGS.speed), (this.boardHeight-this.boardHeight));
                        break;
                    case this.down:
                        this.y = Math.min((this.y+SETTINGS.speed), (this.boardHeight-SETTINGS.paddleHeight));
                        break;
                }
            });
        }
    }

    coordinates(x, y, width, height) {
        let leftX = x;
        let rightX = x + width;
        let topY = y;
        let bottomY = y + height;
        return [leftX, rightX, topY, bottomY];
    }

    render(svg) {

        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'x', this.x);
        rect.setAttributeNS(null, 'y', this.y);
        rect.setAttributeNS(null, 'fill', SETTINGS.mainFill);

        svg.appendChild(rect);
    }
}
