import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/*
Ya habíamos visto las directivas estructurales que trae Angular: ngIf, ngFor, ngSwitch
Vimos también algunas directivas de estilo como ngStyle, ngClass.

Lo que vamos a ver hoy son las directivas de atributos, las cuales nos permiten modificar la apariencia y/o comportamiento del DOM
ng generate directive directives/resaltar

En esta directiva vamos a ver cómo manipular el dom para que un elemento de nuestro HTML, CUALQUIERA, se modifique para reslatar el texto que contiene.

Particularidades: Las directivas pueden recibir datos por Input y utilizarlos para modificar distintos aspectos.
Para que revisen: ¿Puedo emitir información con Output?
*/

// https://angular.io/guide/attribute-directives

// El selector es el nombre del atributo que colocamos en las tag html:
//         ↓
// <h3 directivaResaltar [appHighlight]="'green'">Resalta en verde</h3>
@Directive({
  selector: '[directivaResaltar]',
})
export class ResaltarDirective {
  @Input() appHighlight = '';

  // Podemos recibir datos por @Input() →  [appHighlight]="'dato'"   (noten las comillas simples dentro de las dobles. ¿Qué pasa si no las pongo?)

  // Con ElementRef podemos acceder directamente al elemento del DOM que contiene nuestra directiva y modificar distintos atributos.
  // Algo similar a hacer un getElementById(). Más info en → https://angular.io/api/core/ElementRef
  constructor(private el: ElementRef) {}

  // Con @HostListener podemos acceder a eventos del DOM, más info en → https://angular.io/api/core/HostListener
  @HostListener('mouseenter') onMouseEnter() {
    // En este ejemplo, tomamos el valor color del estilo del elemento y lo reemplazamos por appHighligh o (||) "red" en caso de que llegue vacío.
    this.el.nativeElement.style.color = this.appHighlight || 'red';
  }

  // Tarea: Modificar el código para que reciba por input un valor al que vuelva el color cuando se sale el mouse o dejar #000 como default.
  @HostListener('mouseleave') onMouseExit() {
    this.el.nativeElement.style.color = '#000';
  }
}

/*
  Tarea: Crear una nueva directiva que haga todo lo necesario para mostrar el texto en modo "error", "warning" e "info".

  Crear otra directiva que transforme un texto en un link. Agregando: Subrayado y color azul.
  # opcional:  Por Input debe recibir el link que va a abrir.
  Asignar al evento del hostlistener para click que el color pase a ser violeta.
*/
