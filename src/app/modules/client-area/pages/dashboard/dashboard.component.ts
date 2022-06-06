import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	cardInfo = [
		{
			col1: "Card",
			col2: "Debit",
		},
		{
			col1: "Card Type",
			col2: "MasterCard",
		},
		{
			col1: "Card Number",
			col2: "**** **** **** 4637",
		},
		{
			col1: "Expiry Date",
			col2: "06/2024",
		},
		{
			col1: "Status",
			col2: "Active",
		},
	];
}
