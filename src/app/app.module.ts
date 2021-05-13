import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { ModelpaperComponent } from './modelpaper/modelpaper.component';
import { NotesComponent } from './notes/notes.component';
import { QuantumComponent } from './quantum/quantum.component';

const routes: Routes = [
  {path: 'explore', component: ExploreComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExploreComponent,
    FooterComponent,
    IntroComponent,
    ModelpaperComponent,
    NotesComponent,
    QuantumComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
