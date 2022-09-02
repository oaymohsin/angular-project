import { Injectable } from '@angular/core';
import ShopItems from '../../SharedPortal/JSONData/shop.json'
@Injectable({
  providedIn: 'root'
})
export class ShopServicesService {
  MyShopItems=ShopItems;
  constructor() { }
  getallshopitems(){
    return this.MyShopItems;
  }
}
