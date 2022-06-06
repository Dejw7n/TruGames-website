import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './pages/server/server.component';
import { FilesComponent } from './pages/files/files.component';



@NgModule({
  declarations: [
    ServerComponent,
    FilesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServerModule { }
