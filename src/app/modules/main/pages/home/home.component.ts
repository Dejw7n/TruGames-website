import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	supportedEggs = [
		{
			name: "Minecraft",
			imageSrc: "/assets/images/eggs/minecraft.jpg",
			iconSrc: "/assets/icons/eggs/minecraft.jpg",
		},
		{
			name: "Bedrock",
			imageSrc: "/assets/images/eggs/minecraft.jpg",
			iconSrc: "/assets/icons/eggs/bedrock.png",
		},
		{
			name: "Terraria",
			imageSrc: "/assets/images/eggs/terraria.jpg",
			iconSrc: "/assets/icons/eggs/terraria.svg",
		},
		{
			name: "CS:GO",
			imageSrc: "/assets/images/eggs/CSGO.jpg",
			iconSrc: "/assets/icons/eggs/csgo.svg",
		},
		{
			name: "Rust",
			imageSrc: "/assets/images/eggs/rust.jpg",
			iconSrc: "/assets/icons/eggs/rust.svg",
		},
		{
			name: "Garry's Mod",
			imageSrc: "/assets/images/eggs/garrys-mod.webp",
			iconSrc: "/assets/icons/eggs/garrys-mod.svg",
		},
		{
			name: "Node.js",
			imageSrc: "/assets/images/eggs/nodejs.webp",
			iconSrc: "/assets/icons/eggs/nodejs.png",
		},
	];
}
