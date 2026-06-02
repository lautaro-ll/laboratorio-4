import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingsComponent } from './componentes/bindings/bindings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ //aca van los componentes
    AppComponent,
    BindingsComponent
  ],
  imports: [ //aca van los modulos
    BrowserModule,
    FormsModule
  ],
  providers: [], //min 01:40hs ver
  bootstrap: [AppComponent] //dice donde inicia la aplicacion
})
export class AppModule { }
