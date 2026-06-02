import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor (private router: Router) {}
  
  public usuario: Usuario = new Usuario('','');
  public error: string = '';

  public login() {
    this.error = '';
    if(this.usuario.nombre == "lautaro" && this.usuario.clave == "clave") {
      localStorage.setItem('nombre', this.usuario.nombre );
      this.router.navigateByUrl("bienvenido"); //aca se manda la ruta absoluta desde el root
    }
    else
      this.error = 'Usuario o contraseña incorrecta.';
  }
}