import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class UsersService {
	apiUrl: string = "https://spsul-sis.mvahouse.cz/UsaaaerApi/";

	constructor(private http: HttpClient) {}

	getAllUser(): Observable<any> {
		const headers = { "content-type": "application/json" };
		return this.http.post<any>(this.apiUrl + "getAllUsers", {}, { headers: headers });
	}
	getMyData(): Observable<any> {
		return this.http.post<any>(this.apiUrl + "getMyData", {});
	}
	getData() {
		let data = JSON.parse(localStorage.getItem("userData")!);
		return data;
	}
}
