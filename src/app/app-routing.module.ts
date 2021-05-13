import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExploreComponent} from './explore/explore.component';
import { IntroComponent } from './intro/intro.component';
import { ModelpaperComponent } from './modelpaper/modelpaper.component';
import { NotesComponent } from './notes/notes.component';
import { QuantumComponent } from './quantum/quantum.component';
const routes: Routes = [
  {
    path : '', component:IntroComponent 
  },
  {
    path : 'explore', component:ExploreComponent 
  },
  {
    path : 'notes', component: NotesComponent 
  },
  {
    path : 'quantum', component: QuantumComponent 
  },
  {
    path : 'modelpaper', component: ModelpaperComponent 
  },


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
