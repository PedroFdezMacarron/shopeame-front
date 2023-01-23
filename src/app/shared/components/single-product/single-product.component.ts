import { RouterModule } from '@angular/router';
import { Product } from './../../models/Product.interface';
import { Component,Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  showdetails:boolean=false;
  constructor(private productsService: ProductsService,private router:Router){}

  @Input() product:Product ={
    id: 0,
    name: "",
    price: 0,
    description: "",
    stars: 0,
    image: ""
  };

  // this.comicsService.setComic(data);

  editProduct(){
    this.productsService.setProduct(this.product)
    this.router.navigate(['/gestion'])
  }

  showDetails(){
    this.showdetails = !this.showdetails;
  } 


}
