import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {
  registerForm = new FormGroup({
    nombre: new FormControl(""),
    imagen: new FormControl(File),
    descripcion: new FormControl(""),
    categoria: new FormControl(""),
  })
}
