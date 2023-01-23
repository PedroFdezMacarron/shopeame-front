import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './shared/components/single-product/single-product.component';
import { ProductsComponent } from './pages/products/products.component';
import { ManagementComponent } from './pages/management/management.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [

  {
    path: '', component: HomePageComponent
  },

  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'product/:id', component: SingleProductComponent
  },
  {
    path: 'gestion', component: ManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
