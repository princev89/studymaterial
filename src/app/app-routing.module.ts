import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExploreComponent} from './explore/explore.component';
import { IntroComponent } from './intro/intro.component';
const routes: Routes = [
  {
    path : '', component:IntroComponent 
  },
  {
    path : 'explore', component:ExploreComponent 
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
