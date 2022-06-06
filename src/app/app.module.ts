import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./modules/auth/Guard/auth.guard";
import { TokenInterceptor } from "./modules/auth/Interceptor/token.interceptor";
import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { ClientAreaModule } from "./modules/client-area/client-area.module";
import { MainModule } from "./modules/main/main.module";
import { PanelModule } from "./modules/panel/panel.module";

@NgModule({
	declarations: [AppComponent, LoginComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, MainModule, ClientAreaModule, PanelModule],
	providers: [
		AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
