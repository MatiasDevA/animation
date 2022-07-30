import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';

const routes: Routes = [
  {
    path: "about",component:AboutComponent
  },
  {
    path:"right", component:RightComponent, data:{animation:"isRight"}
  },
  {
    path:"left", component:LeftComponent, data:{animation:"isLeft"}
  },
  {
    path:"dashboard", component:DashboradComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
