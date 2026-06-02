import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Repartidor } from 'src/app/classes/repartidor';
import { RepartidoresService } from 'src/app/services/repartidores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent {

  regForm!: FormGroup;
  get dni() { return this.regForm.get('dni'); }
  get nombre() { return this.regForm.get('nombre'); }
  get apellido() { return this.regForm.get('apellido'); }
  get edad() { return this.regForm.get('edad'); }
  get capacidadTransporte() { return this.regForm.get('capacidadTransporte'); }
  get paisOrigen() { return this.regForm.get('paisOrigen'); }
  get unidadPropia() { return this.regForm.get('unidadPropia'); }
  
  constructor() { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      dni: new FormControl("", { validators: [Validators.required, Validators.min(0), Validators.maxLength(99999999)], updateOn: 'blur' }),
      nombre: new FormControl("", { validators: [Validators.required, Validators.minLength(3), Validators.pattern("[A-Z]|[a-z]")], updateOn: 'blur' }),
      apellido: new FormControl("", { validators: [Validators.required, Validators.minLength(2), Validators.pattern("[A-Z]|[a-z]")], updateOn: 'blur' }),
      edad: new FormControl("", { validators: [Validators.required, Validators.min(16), Validators.maxLength(99)], updateOn: 'blur' }),
      capacidadTransporte: new FormControl("", { validators: [Validators.required, Validators.min(1)], updateOn: 'change' }),
      paisOrigen: new FormControl("", { validators: [Validators.required], updateOn: 'change' }),
      unidadPropia: new FormControl("", { validators: [Validators.required], updateOn: 'change' })
    });
    this.unidadPropia?.setValue(true);
  }
  
  cargarPais(paisSeleccionado: string) {
    this.paisOrigen?.setValue(paisSeleccionado);
  }
  
  save() {
    let nuevoRepartidor = new Repartidor(
      this.dni?.value!,
      this.nombre?.value!.trim(),
      this.apellido?.value!.trim(),
      this.edad?.value!,
      this.capacidadTransporte?.value!,
      this.paisOrigen?.value!,
      this.unidadPropia?.value!,
    );
    this.repartidoresService.addDocument(nuevoRepartidor)
    .then(()=>{
      window.alert('success');
    })
    .catch((error: any)=>{
      window.alert(error);
    });
  }
}
