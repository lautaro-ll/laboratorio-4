import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})

//encargado de la logica
export class BindingsComponent {
  //se comunica con el controlador mediante DATA BINDING o BINDEO
  public name: string = 'Angular 16'; 
  public label: string = 'Click me'; 
  public apellido: string = ''; 

  //evento que puede recibir un argumento de cualquier tipo y devuelve void, la lista de eventos son los nativos de html5
  public ponerNumRand(event: any): void {
    console.log(event);
    this.name = 'Angular ' + (16 + Math.random()).toFixed(2).toString();
  }

  public limpiarApellido(): void {
    this.apellido = '';
  }
}
