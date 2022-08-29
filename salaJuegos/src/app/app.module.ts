import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegosComponent } from './Vistas/juegos/juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Nos deja usar forms o hacer doble bindeo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
