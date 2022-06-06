window.addEventListener(
	"load",
	function () {
		let activatedLink = -1;
		let menuElement = document.querySelectorAll("#menu")[0];
		let menuLinksElement = menuElement.querySelectorAll(".menu-links")[0];
		let menuLinkElements = menuLinksElement.querySelectorAll(".menu-link");

		window.onscroll = function () {
			onScrollEventHandler();
		};

		function onScrollEventHandler() {
			var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

			var linkCounts = [];
			for (let i = 0; i <= menuLinkElements.length - 1; i++) {
				linkCounts.push(i);
			}
			var goal = (winScroll / height) * menuLinkElements.length - 1;
			var closest = linkCounts.reduce(function (prev, curr) {
				return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
			});
			updateActiveLink(closest.toFixed(0));
		}

		function updateActiveLink(activateLink) {
			if (activatedLink != activateLink) {
				activatedLink = activateLink;
				menuLinkElements.forEach(function (element, i) {
					if (i == activateLink) {
						element.classList.add("menu-link-active");
						element.innerHTML = '<div class="menu-border-active"></div>' + element.innerHTML;
					} else {
						element.classList.remove("menu-link-active");
						try {
							element.querySelectorAll(".menu-border-active")[0].remove();
						} catch (error) {}
					}
				});
			}
		}
		updateActiveLink(0);
	},
	false
);
