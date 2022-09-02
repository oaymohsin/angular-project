import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchvalue : string='';
  displayalert : boolean=false;
  showinput(event:any){
    // console.log(event);
    this.searchvalue=((<HTMLInputElement> event.target).value);
  }
  closealert(){
    this.displayalert=true;
  }
}
