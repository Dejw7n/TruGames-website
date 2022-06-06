import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	apiUrl: string = "http://127.0.0.1/api";

	constructor(private http: HttpClient) {}

	loginUser(userData: any) {
		return this.http.post<any>(this.apiUrl + "/auth/authorize", userData);
	}
	loggedIn() {
		if (localStorage.getItem("token") !== null) {
			return this.http.get(this.apiUrl + "/auth/verifyToken").subscribe(
				(res) => {
					console.log("# authServ // res: " + res);
					return true;
				},
				(err) => {
					return false;
				}
			);
		} else {
			return false;
		}
	}
	getToken() {
		return localStorage.getItem("token");
	}
}
