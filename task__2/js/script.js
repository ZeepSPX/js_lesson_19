// Задача 3.Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану і з випадковою швидкістю рухається вниз.Як тільки сніжинка досягає нижньої частини екрану вона знову повинна з’явитись у верхній частині екрану. ---------------------------------------------------------------------------------

const snowfallButton = document.getElementById('snowfall-button');
const snowfallContainer = document.querySelector('.snowfall');

snowfallButton.addEventListener('click', () => {
	snowfallContainer.innerHTML = '';
	for (let i = 0; i < 50; i++) {
		const snowflake = document.createElement('div');
		snowflake.classList.add('snowflake');
		snowflake.style.left = Math.random() * 100 + '%';
		snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
		snowfallContainer.appendChild(snowflake);
	}
});









