// Задача 4.Сяючі зорі. Вказана кількість зірочок повинна з’являтися у випадковій частині екрану. Кожна зірка з певним кроком і інтервалом збільшується від мінімального до максимального розміру. Як тільки досягнути максимального розміру зірочка повинна з’являтися у іншій випадковій позиції.---------------------------------------------------------------------------------

const twinkleButton = document.getElementById('twinkle-button');
const body = document.body;

twinkleButton.addEventListener('click', () => {
	const numStars = 50;
	const minSize = 5;
	const maxSize = 30;
	const minDelay = 0;
	const maxDelay = 3;
	const containerWidth = window.innerWidth;
	const containerHeight = window.innerHeight;

	for (let i = 0; i < numStars; i++) {
		const star = document.createElement('div');
		star.classList.add('star');
		star.style.width = `${minSize}px`;
		star.style.height = `${minSize}px`;
		star.style.left = `${Math.random() * containerWidth}px`;
		star.style.top = `${Math.random() * containerHeight}px`;
		star.style.animationDelay = `${Math.random() * maxDelay}s`;
		body.appendChild(star);

		setTimeout(() => {
			star.style.width = `${maxSize}px`;
			star.style.height = `${maxSize}px`;
		}, i * 50 + Math.random() * 5000);

		setTimeout(() => {
			const newX = Math.random() * containerWidth;
			const newY = Math.random() * containerHeight;
			star.style.left = `${newX}px`;
			star.style.top = `${newY}px`;
			star.style.width = `${minSize}px`;
			star.style.height = `${minSize}px`;
		}, i * 50 + maxSize * 10 + Math.random() * 5000);
	}
});


