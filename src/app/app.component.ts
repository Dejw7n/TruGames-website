import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "TruGames";

	withoutOverlay = ["/logina"];

	menuLinks = [
		{
			name: "",
			iconSrc: "/assets/icons/cinema.png",
			selected: false,
		},
		{
			name: "",
			iconSrc: "/assets/icons/cinema.png",
			selected: false,
		},
	];

	constructor(public router: Router) {}
}
