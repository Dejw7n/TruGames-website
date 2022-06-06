window.addEventListener(
	"load",
	function () {
		let slideShowElements = document.querySelectorAll(".slideShow");

		function init() {
			slideShowElements.forEach((element) => {
				let elementImgElements = element.querySelectorAll("img");
				element.setAttribute("data-slideshow-currentImg", elementImgElements.length);
			});
			slideShowElements.forEach((element) => {
				let elementImgElements = element.querySelectorAll("img");
				let dotsElement = element.querySelectorAll(".slideShow-dots")[0];
				elementImgElements.forEach(function (elementImg, i) {
					dotsElement.innerHTML += '<div class="slideShow-dot" data-slideshow-dot-order=' + i + '><div class="slideShow-dot-wrapper"></div></div>';
				});
				let dotElements = element.querySelectorAll(".slideShow-dot");
				dotElements.forEach(function (dotEachElement, i) {
					dotEachElement.onclick = function () {
						setSlideShowImage(element, i + 1);
					};
				});
			});
			updateSlideShows();
		}

		function updateSlideShows() {
			highlightEgg();

			slideShowElements.forEach((element) => {
				let elementImgElements = element.querySelectorAll("img");
				let currentImg = parseInt(element.getAttribute("data-slideshow-currentImg"));
				let forCounter = 1;
				elementImgElements.forEach((elementImg) => {
					if (currentImg > elementImgElements.length) {
						currentImg = 1;
					}
					if (currentImg == forCounter) {
						elementImg.style.opacity = "1";
					} else {
						elementImg.style.opacity = "0";
					}
					forCounter++;
				});
				let dotElements = element.querySelectorAll(".slideShow-dot");
				dotElements.forEach(function (dotEachElement, i) {
					if (i == currentImg - 1) {
						dotEachElement.classList.add("slideShow-dot-active");
					} else {
						dotEachElement.classList.remove("slideShow-dot-active");
					}
				});
				element.setAttribute("data-slideshow-currentImg", currentImg);
			});
		}

		function setSlideShowImage(slideShowFuncElement, imgNumber) {
			console.log("call");
			slideShowFuncElement.setAttribute("data-slideshow-currentImg", imgNumber);
			updateSlideShows();
		}

		function nextImg() {
			slideShowElements.forEach((element) => {
				let currentImg = parseInt(element.getAttribute("data-slideshow-currentImg"));
				currentImg++;
				element.setAttribute("data-slideshow-currentImg", currentImg);
			});
			updateSlideShows();
		}

		//egg
		function highlightEgg() {
			slideShowElements[0].getAttribute("data-slideshow-currentImg");
			slideShowElements.forEach(function (element, i) {
				let elementImgElements = element.querySelectorAll("img");
				let currentImgNumber = element.getAttribute("data-slideshow-currentImg");
				let imgEgg = elementImgElements[currentImgNumber - 1].getAttribute("data-slideshow-imgegg");
				let eggElements = document.querySelectorAll("div[data-slideshow-egg]");
				eggElements.forEach(function (eggElement, i) {
					if (eggElement.getAttribute("data-slideshow-egg") == imgEgg) {
						eggElement.classList.add("egg-selected");
					} else {
						eggElement.classList.remove("egg-selected");
					}
				});
			});
		}

		init();
		setInterval(() => {
			nextImg();
		}, 10000);
	},
	false
);
