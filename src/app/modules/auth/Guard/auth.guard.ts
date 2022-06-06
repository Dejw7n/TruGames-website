import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "../Service/auth.service";
import { UsersService } from "../../users/Service/users.service";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router, private usersService: UsersService) {}
	paymentID = [67, 73];
	canActivate(next: ActivatedRouteSnapshot): boolean {
		return true;
		console.log("# canActivate");
		if (this.authService.loggedIn()) {
			console.log("# loggedIn");
			return this.checkUser(next);
		} else {
			console.log("# router.navigate /login");
			this.router.navigate(["/login"]).then((navigated: boolean) => {
				if (navigated) {
					//this.snackBar.open("Wrong login information", "X", { panelClass: ["error"] });
				}
			});
			return false;
		}
	}

	checkUser(route: ActivatedRouteSnapshot) {
		let Userrole = this.usersService.getData()[0].roleID;
		let UserId = this.usersService.getData()[0].userID;
		if (UserId && this.paymentID.includes(UserId)) {
			this.router.navigate(["/payment_required"]);
			return true;
		} else {
			if (route.data["required_role"] && route.data["required_role"] !== Userrole) {
				this.router.navigate([""]);
				return false;
			} else {
				return true;
			}
		}
	}
}
