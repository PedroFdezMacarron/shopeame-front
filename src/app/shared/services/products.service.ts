import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  db_url: string = 'http://localhost:3000/products';
  
  product!: Product;
  id!: number;

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get(this.db_url)
  }

  postProduct(product: Product){
    return this.httpClient.post(this.db_url, product);
  }

  putProduct(product: Product){
    return this.httpClient.put(this.db_url+"/"+this.id, product);
    console.log("haciendo el put");
    this.id=0;
    product={
      id: 0,
      name: "",
      price: 0,
      description: "",
      stars: 0,
      image: ""
    };
  }

  setProduct(product: Product){
    this.product = product;
    this.id = product.id;
  }
  
  setProductNew(){
    this.id = 0;    
    this.product={
      id: 0,
      name: "",
      price: 0,
      description: "",
      stars: 0,
      image: ""
    }
 
  };

}

  

