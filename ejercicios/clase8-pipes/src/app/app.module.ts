import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { FechaPipe } from './pipes/fecha.pipe';
import { TimePipe } from './pipes/time.pipe';
import { LongPipe } from './pipes/long.pipe';
import { CustomPipe } from './pipes/custom.pipe';

@NgModule({
  declarations: [AppComponent, ResaltarDirective, FechaPipe, TimePipe, LongPipe, CustomPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
