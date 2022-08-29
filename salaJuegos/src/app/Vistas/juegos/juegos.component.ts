import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  usuario:Usuario = new Usuario();

  // public nombre:string;
  // // Por defecto son public
  // apellido:string='';

  constructor() { 
    this.usuario.nombre = '';
    this.usuario.apellido = 'Lemos';
  }

  ngOnInit(): void {
    this.usuario.nombre = "Lautaro";
    console.log(this.usuario.nombre);
  }

  cambiarNombre(): void {
    this.usuario.nombre = "Lucas";
    this.usuario.apellido = "Light";
  }

  aceptar(): void {
    console.log(this.usuario);
  }

}
