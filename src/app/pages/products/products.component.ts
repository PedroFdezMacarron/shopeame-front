import { Product } from './../../shared/models/Product.interface';
import { Component,OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/Product.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  // listProducts?:Product[];
  comicList: any [] = [];
  listProducts:any[]=[];
  viewProducts?:Product[];
  tot?:number;
  view?:boolean=true;
  product?:Product;
  
constructor(private productsService: ProductsService){}
changeView(){
  this.view = !this.view ;
  console.log(this.view);
  
}

ngOnInit(): void {
  this.productsService.getProducts().subscribe((data: any) => {  
    this.listProducts = [...data];
    this.viewProducts=[...data];
    this.tot=this.listProducts.length;
  })
}

filtrar(productName: string){  
  console.log(productName);
  
  let filteredProducts = this.listProducts.filter((product)=> product.name.includes(productName))
  this.viewProducts=[...filteredProducts];
  this.tot=this.viewProducts.length;
}

}
