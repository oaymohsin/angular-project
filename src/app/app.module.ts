import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MainPortal/Header/header/header.component';
import { FooterComponent } from './MainPortal/Footer/footer/footer.component';
import { HomeComponent } from './MainPortal/Home/home/home.component';
import { ContactUsComponent } from './MainPortal/ContactUs/contact-us/contact-us.component';
import { DirectiveComponent } from './MainPortal/Directive/directive/directive.component';
import { ShopComponent } from './MainPortal/Shop/shop/shop.component';
import { ProductsComponent } from './MainPortal/Products/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    DirectiveComponent,
    ShopComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
