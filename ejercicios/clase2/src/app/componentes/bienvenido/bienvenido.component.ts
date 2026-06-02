import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})

export class BienvenidoComponent {
  public nombre: string = '';

  constructor(public router: Router) {}
  
  ngOnInit(): void {
    if(localStorage.getItem('nombre') == null){
      this.router.navigateByUrl("login");
    }
    else {
      this.nombre = localStorage.getItem('nombre')!
    }
  }
}
