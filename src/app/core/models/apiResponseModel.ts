import { Producto } from './ProductoModel'

export interface ApiResponse{
  codigo:number,
  mensaje: string,
  productos: Producto[] | null
}
