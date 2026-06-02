import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  precio = 2000;
  minusculas = 'nombre';
  mayusculas = 'APELLIDO';
  fecha = new Date();
  pi = 3.1415;
  porcentual = Math.random();
  textaso = 'tukiiii';
  dni = 30123123;
}
