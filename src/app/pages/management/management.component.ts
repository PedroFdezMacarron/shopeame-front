import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/Product.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  
  productForm!: FormGroup;

  id: number = this.productService.id;
    
  updatedProduct: Product = this.productService.product;

  newProduct:Product =this.updatedProduct;
  
  constructor(private formBuilder: FormBuilder, private productService: ProductsService ,private router:Router){ }
   
  ngOnInit(): void {
    console.log(this.id);
    this.productForm = this.formBuilder.group({
      name: [this.newProduct.name, [Validators.required]],
      description: [this.newProduct.description, [Validators.required]],
      price: [this.newProduct.price, [Validators.required]],
      image: [this.newProduct.image, [Validators.required]],
      stars: [this.newProduct.stars, [Validators.required,Validators.min(1),Validators.max(5)]],
    });
    this.productForm.valueChanges.subscribe(changes => {
      this.newProduct = changes;
    })
  }
  
  onSubmit(){
    console.log(this.newProduct);
    if(this.id===0){
      this.productService.postProduct(this.newProduct).subscribe((data) => {
        console.log('nuevo producto');
      })
      this.productForm.reset();
    }else{
      this.productService.putProduct(this.newProduct).subscribe((data) => {
        console.log('modificar');
      })      
      this.productService.setProductNew();
      this.router.navigate(['/products'])
    }

  }

}
