// Задача 1.  Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку-----------------------------

class Cards {
	constructor() { }

	render({ target, container, sticker, title, price, picture }) {
		const Targets = document.querySelector(target)
		const Containers = document.createElement('a')
		const Stickers = document.createElement('p')
		const Pictures = document.createElement('picture')
		const Img = document.createElement('img')
		const Title = document.createElement('h3')
		const Prices = document.createElement('p')


		Containers.className = container.class
		Stickers.className = sticker.class
		Pictures.className = picture.class
		Title.className = title.class
		Prices.className = price.class

		Img.src = picture.src

		Stickers.innerText = sticker.text
		Title.innerText = title.text
		Prices.innerHTML = `${price.value} &#8372`

		Targets.append(Containers)
		Containers.append(Stickers)
		Pictures.append(Img)
		Containers.append(Pictures)
		Containers.append(Title)
		Containers.append(Prices)
	}
}


const cardsList = [

	{
		target: '.result_1',
		container: {
			class: 'card-box',
		},
		sticker: {
			class: 'top-sellers_sticker',
			text: 'ТОП ПРОДАЖ',
			price: {
				value: '30 999',
				class: 'card-price',
			},
		},
		title: {
			class: 'card-title',
			text: 'Ноутбук Acer Aspire 7 A715-42G-R3EZ',
		},
		picture: {
			class: 'card-image',
			src: 'https://content2.rozetka.com.ua/goods/images/big/175333147.jpg'
		},
		price: {
			value: '30 999',
			class: 'card-price'
		},
	},

	{
		target: '.result_1',
		container: {
			class: 'card-box',
		},
		sticker: {
			class: 'top-sellers_sticker',
			text: 'ТОП ПРОДАЖ'
		},
		title: {
			class: 'card-title',
			text: 'Ноутбук ASUS Laptop X515EA-BQ2066',
		},
		picture: {
			class: 'card-image',
			src: 'https://content.rozetka.com.ua/goods/images/big/275056537.jpg'
		},
		price: {
			value: '19 999',
			class: 'card-price'
		},
	},

	{
		target: '.result_1',
		container: {
			class: 'card-box',
		},
		sticker: {
			class: 'top-sellers_sticker promotion',
			text: 'АКЦІЯ'
		},
		title: {
			class: 'card-title',
			text: 'Ноутбук Lenovo IdeaPad 1 15ADA7',
		},
		picture: {
			class: 'card-image',
			src: 'https://content.rozetka.com.ua/goods/images/big/320933637.jpg'
		},
		price: {
			value: '13 999',
			class: 'card-price'
		},
	},

	{
		target: '.result_1',
		container: {
			class: 'card-box',
		},
		sticker: {
			class: 'top-sellers_sticker',
			text: 'ТОП ПРОДАЖ'
		},
		title: {
			class: 'card-title',
			text: 'Ноутбук Apple MacBook Air 13" M1',
		},
		picture: {
			class: 'card-image',
			src: 'https://content1.rozetka.com.ua/goods/images/big/144249716.jpg'
		},
		price: {
			value: '39 999',
			class: 'card-price'
		},
	},
]

const cards = new Cards()

cardsList.forEach(card => {
	cards.render(card)
})


















