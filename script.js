// const pages = document.querySelectorAll(".page");

// pages.forEach((page) => {
// 	let startTime;
// 	let endTime;
// 	page.addEventListener("transitionstart", (e) => {
// 		console.log(e);
// 		startTime = new Date();
// 	});
// 	page.addEventListener("transitionend", (e) => {
// 		const count = page.dataset.count;
// 		page.style.zIndex = count;
// 		console.log(count);
// 		endTime = new Date();
// 		let timeDiff = endTime - startTime;
// 		timeDiff /= 1000;
// 		console.log(Math.round(timeDiff));
// 	});
// });
// const
const book = document.querySelector(".book");
book.addEventListener("click", (e) => {
	book.classList.toggle("close");
	book.classList.toggle("open");
});
