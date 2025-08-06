import { Component, inject } from '@angular/core';
import { ProductsApi } from '@core/services/products-api';
import { Product } from './product/product';

@Component({
  selector: 'products-list',
  imports: [Product],
  templateUrl: './list.html',
  styleUrl: './list.css',
  standalone:true
})

export class List {
  private readonly productsService = inject(ProductsApi)

  protected readonly productsListResource = this.productsService.getProductsList()

}
