import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ErrorComponent } from './componentes/error/error.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: '/login', //ruta de redireccion
    pathMatch: 'full', //las rutas de redireccion siempre deben tener un pathMatch ('prefix' | 'full')
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "bienvenido",
    component: BienvenidoComponent,  
    children: [ // todas las rutas que hay en un children solo pueden ser accedidas desde el padre
      {
        path: "acercaDe", //en la url se ve como: /bienvenido/acercaDe 
        component: AcercaDeComponent,   
      }
    ] 
  },
  {
    path: "**", //siempre al final porque busca el match en el orden en que estan declarados
    component: ErrorComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
