import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BengalsComponent } from './bengals/bengals.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LightSaberComponent } from './light-saber/light-saber.component';
import { RotatingCubeComponent } from './rotating-cube/rotating-cube.component';

const routes: Routes = [
  {path: "", component: ButtonsComponent},
  {path: "buttons", component: ButtonsComponent},
  {path: "rotating-cube", component: RotatingCubeComponent},
  {path: "light-saber", component: LightSaberComponent},
  {path: 'bengals', component: BengalsComponent},
  {path: "*", component: ButtonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
