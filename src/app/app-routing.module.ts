import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './MainPortal/ContactUs/contact-us/contact-us.component';
import { DirectiveComponent } from './MainPortal/Directive/directive/directive.component';
import { HomeComponent } from './MainPortal/Home/home/home.component';
import { ProductsComponent } from './MainPortal/Products/products/products.component';
import { ShopComponent } from './MainPortal/Shop/shop/shop.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contactus',
    component:ContactUsComponent
  },
  {
    path:'directives',
    component:DirectiveComponent
  },
  {
    path:'shop',
    component:ShopComponent
  },
  {
    path:'products',
    component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
