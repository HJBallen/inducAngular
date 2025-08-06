import { Component, input } from '@angular/core';
import { Producto } from '@app/core/models/ProductoModel';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone:true
})
export class Product {
  readonly productInfo = input.required<Producto>()
}
