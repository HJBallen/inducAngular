import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ProductsApi } from '@app/core/services/products-api';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {

  private readonly produtcoService =  inject(ProductsApi)

  registerForm = new FormGroup({
    nombre: new FormControl(""),
    imagen: new FormControl(File),
    descripcion: new FormControl(""),
    categoria: new FormControl(""),
  })

  submitProducto(){
    this.produtcoService.postProduct()
  }
}
