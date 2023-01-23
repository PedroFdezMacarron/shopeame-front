import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { ManagementComponent } from './pages/management/management.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SingleProductComponent } from './shared/components/single-product/single-product.component';
import { BtnIconComponent } from './shared/components/btn-icon/btn-icon.component';
import { ManageProductComponent } from './shared/components/manage-product/manage-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { StarsComponent } from './shared/components/stars/stars.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsComponent,
    ManagementComponent,
    HeaderComponent,
    FooterComponent,
    SingleProductComponent,
    BtnIconComponent,
    ManageProductComponent,
    StarsComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
