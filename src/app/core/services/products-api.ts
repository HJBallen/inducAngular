import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@core/models/apiResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductsApi {
  private readonly baseApiUrl = 'http://localhost:8080/api/v1/productos'

  getProductsList():HttpResourceRef<ApiResponse | undefined >{
    return httpResource<ApiResponse>(()=>this.baseApiUrl);
  }
}
