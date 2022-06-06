import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../Service/auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
	constructor(private AuthService: AuthService, private router: Router) {}

	ngOnInit(): void {}

	loginData = {
		email: "",
		password: "",
	};

	loginUser() {
		this.AuthService.loginUser(this.loginData).subscribe(
			(res) => {
				console.log("success token: " + res.token);
				localStorage.setItem("token", res.token);
				this.router.navigate(["/"]);
			},
			(err) => {
				console.log("error");
				if (err instanceof HttpErrorResponse) {
					if (err.status == 401) {
						//this.snackBar.open("Wrong login information", "X", { panelClass: ["error"] });
					} else if (err.status == 418) {
						//this.snackBar.open("Please enter email and pass", "X", { panelClass: ["error"] });
					} else if (err.status == 502) {
						//this.snackBar.open("Unknow error", "X", { panelClass: ["error"] });
					}
				}
			}
		);
	}
}
