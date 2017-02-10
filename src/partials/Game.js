
import { SVG_NS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import { KEYS } from '../settings';
import { PADDLE } from '../settings';


export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;

		this.gameElement = document.getElementById(this.element);
		this.board = new Board(this.width, this.height);
		this.player1 = new Paddle(
			this.height, 
			PADDLE.paddleWidth, 
			PADDLE.paddleHeight, 
			PADDLE.boardGap,
			((this.height - PADDLE.paddleHeight) / 2),
			KEYS.a,
			KEYS.z
		);
		this.player2 = new Paddle(
			this.height, 
			PADDLE.paddleWidth, 
			PADDLE.paddleHeight, 
			(this.width-(PADDLE.boardGap+PADDLE.paddleWidth)),
			((this.height - PADDLE.paddleHeight) / 2),
			KEYS.up,
			KEYS.down
		);
	}

	render() {

		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.board.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);

	}
}