import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/SharedPortal/Services/productservice.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor( private _ProductService:ProductserviceService) { }
  MyData:any=[];
  ngOnInit(): void {
  }
  GetMyAllData(){
    this.MyData = this._ProductService.GetAllProducts();
  }
}
