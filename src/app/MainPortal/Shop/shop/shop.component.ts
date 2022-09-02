import { Component, OnInit } from '@angular/core';
import { ShopServicesService } from 'src/app/SharedPortal/ShopServices/shop-services.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private _ShopService:ShopServicesService) { }
  ShopData:any=[];
  ngOnInit(): void {
  }
  getallshopdata(){
    this.ShopData=this._ShopService.getallshopitems();
  }
}
