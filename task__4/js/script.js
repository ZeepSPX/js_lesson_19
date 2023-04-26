// Задача 5.Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз. При кліку на танк він вибухає і зникає з екрану.---------------------------------------------------------------------------------

const gameContainer = document.querySelector('.game-container');

function createTank() {
	const tank = document.createElement('div');
	tank.classList.add('tank');
	gameContainer.appendChild(tank);
	const leftPosition = Math.random() * 100;
	tank.style.left = `${leftPosition}%`;

	const tankInterval = setInterval(() => {
		const bottom = parseInt(window.getComputedStyle(tank).bottom);
		if (bottom <= 0) {
			clearInterval(tankInterval);
			tank.remove();
			return;
		}
		tank.style.bottom = bottom - 10 + 'px';
	}, 100);

	tank.addEventListener('click', () => {
		tank.classList.add('explosion');
		setTimeout(() => {
			clearInterval(tankInterval);
			tank.remove();
		}, 500);
	});
}

setInterval(createTank, 2000);




