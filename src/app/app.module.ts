import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { RotatingCubeComponent } from './rotating-cube/rotating-cube.component';
import { LightSaberComponent } from './light-saber/light-saber.component';
import { BengalsComponent } from './bengals/bengals.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    RotatingCubeComponent,
    LightSaberComponent,
    BengalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
