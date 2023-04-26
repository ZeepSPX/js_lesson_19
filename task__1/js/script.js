// Задача 2. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.----------------------------------------

class listAthlete {
	constructor(sportmenList) {
		this.sportmenList = sportmenList;
	}

	render({ root, playersItem, playerName, arrowRight, arrowLeft }) {
		this.root = root;
		this.arrowRight = arrowRight;
		this.arrowLeft = arrowLeft;

		const target_1 = document.getElementById(root.id_1);
		for (let i = 0; i < this.sportmenList.length; i++) {
			const itemBox = document.createElement(playersItem.tag);
			itemBox.className = playersItem.class;

			const name = document.createElement(playerName.tag);
			name.className = playerName.className;
			name.innerText = `${this.sportmenList[i]}`;

			const arrow = document.createElement(arrowRight.tag);
			arrow.className = arrowRight.class;
			arrow.innerText = arrowRight.text;

			target_1.append(itemBox);
			itemBox.append(name);
			itemBox.append(arrow);
		}
	}

	favorites() {
		const firstList = document.getElementById(this.root.id_1);
		const secondList = document.getElementById(this.root.id_2);

		firstList.addEventListener(`click`, e => {
			if (e.target.className.includes(this.arrowRight.class)) {
				e.target.className = this.arrowLeft.class;
				const player = e.target.parentElement;
				const copy = player.cloneNode(true);
				secondList.append(copy);
				player.remove();
			}
		});

		secondList.addEventListener(`click`, e => {
			if (e.target.className.includes(this.arrowLeft.class)) {
				e.target.className = this.arrowRight.class;
				const player = e.target.parentElement;
				const copy = player.cloneNode(true);
				firstList.append(copy);
				player.remove();
			}
		});
	}
}

const data = {
	root: {
		id_1: 'first-players-list',
		id_2: 'second-players-list',
	},
	playersItem: {
		tag: 'li',
		class: 'player-item',
	},
	playerName: {
		tag: 'p',
		className: 'players-name',
	},
	arrowRight: {
		tag: 'div',
		class: 'arrow arrow-right',
		text: 'click',
	},
	arrowLeft: {
		tag: 'div',
		class: 'arrow arrow-left',
		text: 'click',
	},
};

const athleteList = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const someList = new listAthlete(athleteList);
someList.render(data);
someList.favorites();
