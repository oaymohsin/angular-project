import { Injectable } from '@angular/core';
import Product from '../JSONData/product.json'
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  Myproducts=Product;
  constructor() { }
  GetAllProducts(){
    return this.Myproducts;
  }
}
