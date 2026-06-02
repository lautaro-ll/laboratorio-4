import { Component, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clase1';
  public edadUno: number | undefined;
  public edadDos?: number;
  public suma?: number;
  public promedio?: number;
  public errorUno: string = '';
  public errorDos: string = '';

  public calcular(): void {
    if(this.validarEdades()){
      this.suma = this.edadUno! + this.edadDos!;
      this.promedio = this.suma! / 2;
    }
  }

  public limpiar(): void {
    this.errorUno = this.errorDos = '';
    this.edadUno = this.edadDos = this.suma = this.promedio = undefined;
  }

  private validarEdades(): boolean {
    var retorno: boolean = true;
    this.errorUno = this.errorDos = '';
    if(this.edadUno == undefined) {
      this.errorUno = 'Debe ingresar las primer edad.';
      retorno = false;
    }
    if(this.edadDos == undefined) {
      this.errorDos = 'Debe ingresar las segunda edad.';
      retorno = false;
    }
    return retorno;
  }
}
