
import { SVG_NS, KEYS, SETTINGS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Pause from './Pause';




export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.space = KEYS.spaceBar;
		this.start = KEYS.s;
		// this.pause = false;
		this.gameStart = false;
		this.startSound = new Audio('public/sounds/imperial_march.wav');
		this.pauseSound = new Audio('public/sounds/chewy_roar.wav');
		this.gameElement = document.getElementById(this.element);
		this.board = new Board(this.width, this.height);
		this.player1 = new Paddle(
			this.height, 
			SETTINGS.paddleWidth, 
			SETTINGS.paddleHeight, 
			SETTINGS.boardGap,
			((this.height - SETTINGS.paddleHeight) / 2),
			KEYS.a,
			KEYS.z
		);
		this.player2 = new Paddle(
			this.height, 
			SETTINGS.paddleWidth, 
			SETTINGS.paddleHeight, 
			(this.width-(SETTINGS.boardGap+SETTINGS.paddleWidth)),
			((this.height - SETTINGS.paddleHeight) / 2),
			KEYS.up,
			KEYS.down
		);

		this.score1 = new Score((this.width/2 - 40) , (this.height-this.height) + 25, SETTINGS.fontSize, 'player1');
		this.score2 = new Score((this.width/2 + 20) , (this.height-this.height) + 25, SETTINGS.fontSize, 'player2');
		this.ball = new Ball(SETTINGS.ballRadius, this.width, this.height);
		this.pauseText = new Pause(this.width/3, this.height/2, this.pause);

		document.addEventListener('keydown', event => {
            
            switch (event.keyCode) {
                case this.space:
					if(!SETTINGS.pause){this.pauseSound.play();}
						SETTINGS.pause = !SETTINGS.pause;
                break;
            }
        });

		document.getElementById('start-game').addEventListener('click', event => {
            switch (event) {
                default:
					this.gameStart = true;
                break;
            }
        });
	}

	render() {

		if(!this.gameStart){
			this.startSound.play();
			return;
		}

		if(SETTINGS.pause){
			document.getElementById('paused').style.visibility = 'visible';
			this.startSound.play();
			return;
		}

		if(SETTINGS.gameOver){
			return;
		}

		document.getElementById('start-game').style.visibility = 'hidden';
		this.startSound.pause();
		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);
		this.board.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);
		this.ball.render(svg, this.player1, this.player2);
		this.pauseText.render(svg);
		this.score1.render(svg, this.player1);
		this.score2.render(svg, this.player2);
		document.getElementById('paused').style.visibility = 'hidden';
	}
}