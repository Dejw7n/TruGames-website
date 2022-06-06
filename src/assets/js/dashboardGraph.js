window.addEventListener(
	"load",
	function () {
		const labels = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

		const data = {
			labels: labels,
			datasets: [
				{
					type: "line",
					label: "CPU",
					data: [0, 130, 80, 23, 12, 8, 34, 51, 187, 49, 68, 62, 32, 12, 80, 45, 32, 45, 12, 100, 12, 8, 9, 14],
					tension: 0.3,
					borderColor: ["rgba(255, 56, 56, 1)"],
					backgroundColor: ["rgba(255, 56, 56, 1)"],
				},
				{
					type: "line",
					label: "RAM",
					data: [0, 24, 12, 87, 76, 87, 72, 48, 67, 54, 42, 35, 70, 88, 21, 61, 72, 49, 89, 0, 81, 68, 76, 83],
					backgroundColor: ["rgba(0, 0, 255, 1)"],
					borderColor: ["rgba(0, 0, 255, 1)"],
				},
				{
					label: "SWAP",
					data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
					fill: "-1",
					borderColor: ["rgba(0, 0, 255, 0.2)"],
					backgroundColor: ["rgba(0, 0, 255, 0.2)"],
				},
			],
		};

		const config = {
			type: "line",
			data: data,
			options: {
				responsive: true,
				maintainAspectRatio: false,
				animation: false,
				scales: {
					x: {
						grid: {
							display: false,
						},
					},
					y: {
						grid: {
							display: false,
						},
					},
				},
				elements: {
					point: {
						radius: 0,
					},
				},
			},
		};

		//load
		const myChart = new Chart(document.getElementById("myChart"), config);
	},
	false
);
