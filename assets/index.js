let actuallyId = 0;
const reviews = [
	{
		id: 0,
		name: "Sara Jones",
		job: "UX DESIGNER",
		img: "./person-1.jpeg",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius mollitia accusantium eligendi fuga at ducimus. Expedita facere reprehenderit ipsum saepe rem dignissimos cum fugit id minima veniam sint, commodi laudantium.",
	},
	{
		id: 1,
		name: "susan smith",
		job: "web developer",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: "anna johnson",
		job: "web designer",
		img: "https://img.freepik.com/free-photo/that-story-is-so-funny_329181-1339.jpg?w=900",
		text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		name: "peter jones",
		job: "intern",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
		text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 4,
		name: "bill anderson",
		job: "the boss",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
];

let buttons = document.querySelectorAll(".btn");

// Se setea el objeto inicial a mostrar, se toma un objeto aleatorio del arreglo
window.addEventListener("DOMContentLoaded", () => {
	let rand = (Math.random() * reviews.length) | 0;
	document.querySelector(
		".imgContainer"
	).style.backgroundImage = `url(${reviews[rand].img})`;
	document.querySelector(".name").innerText = reviews[rand].name;
	document.querySelector(".job").innerText = reviews[rand].job;
	document.querySelector(".review").innerText = reviews[rand].text;
	actuallyId = reviews[rand].id;
});

buttons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		/* 
            event.currentTarget.classList devolvera la lista
            de clases del elemento que recibio el evento
         */
		let classList = event.currentTarget.classList;
		let review;

		if (classList.length === 2) {
			let rand = (Math.random() * reviews.length) | 0;
			if (rand === actuallyId) {
				rand++;
				if (rand >= reviews.length) {
					rand = 0;
				}
			}
			review = reviews[rand];
		} else {
			if (classList[2] === "rightButton") {
				let newId = actuallyId - 1;
				if (newId < 0) {
					newId = reviews.length - 1;
				}
				review = reviews[newId];
			} else {
				let newId = actuallyId + 1;
				if (newId >= reviews.length) {
					newId = 0;
				}
				review = reviews[newId];
			}
		}
		document.querySelector(
			".imgContainer"
		).style.backgroundImage = `url(${review.img})`;
		document.querySelector(".name").innerText = review.name;
		document.querySelector(".job").innerText = review.job;
		document.querySelector(".review").innerText = review.text;
		actuallyId = review.id;
	});
});
