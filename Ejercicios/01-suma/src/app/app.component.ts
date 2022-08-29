import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01-suma';

  edadUno: string = '';
  edadDos: string = '';
  suma: string = '';
  promedio: string = '';

  calcular(): void {    
    this.suma = (Number.parseFloat(this.edadUno) + Number.parseFloat(this.edadDos)).toString();
    this.promedio = (Number.parseFloat(this.suma)/2).toString();
  }

  limpiar(): void {
    this.edadUno = '';
    this.edadDos = '';
    this.suma = '';
    this.promedio = '';
  }
}
