import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListDogsComponent } from './pages/list-characteres/list-characters.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ListCharacters2Component } from './pages/list-characters2/list-characters2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDogsComponent,
    NavbarComponent,
    ListCharacters2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
