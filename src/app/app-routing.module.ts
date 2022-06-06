import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./modules/auth/Guard/auth.guard";
import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { DashboardComponent } from "./modules/client-area/pages/dashboard/dashboard.component";
import { HomeComponent } from "./modules/main/pages/home/home.component";
import { FilesComponent } from "./modules/panel/modules/server/pages/files/files.component";
import { ServerComponent } from "./modules/panel/modules/server/pages/server/server.component";
import { ServerListComponent } from "./modules/panel/pages/server-list/server-list.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "login", component: LoginComponent },
	{ path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: "servers", component: ServerListComponent, canActivate: [AuthGuard] },
	{ path: "server/:id", component: ServerComponent, canActivate: [AuthGuard] },
	{ path: "server/:id/files", component: FilesComponent, canActivate: [AuthGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
