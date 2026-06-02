import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // etiqueta del componente que estoy creando, debe tener un guion intermedio para distinguir los custom component de los nativos
  templateUrl: './app.component.html', // es la vista, unico archivo html del componente
  styleUrls: ['./app.component.scss'] // es un array pq puedo tener varios archivos, puedo hacer un estilo para los <p> por ej. y afecta solo a este componente. lo encapsula.
})
export class AppComponent {
  title = 'clase1';
}
