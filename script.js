
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const counter = document.querySelector("#counter");

let setCounter = 0;


const jump = () => {

	const pipePosition = pipe.offsetLeft;

	mario.classList.add('jump');


	if(pipePosition >= 160 && pipePosition < 230){
		setCounter++;
	}


	setTimeout(() => {
		mario.classList.remove('jump')

	},500);

}

const loop = setInterval(() => {

	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

	counter.innerHTML = setCounter;

	if(pipePosition <= 120 && pipePosition > 0  && marioPosition < 80){

		pipe.style.animation = 'none';
		pipe.style.left = `${pipePosition}px`;

        
        mario.style.animation = 'none';
		mario.style.bottom = `${marioPosition}px`;


		mario.src ='./img/game-over.png'
		mario.style.width = '75px'
		mario.style.marginLeft = '50px'

		clearInterval(loop);
	}
}, 10);



document.addEventListener('keydown', jump);