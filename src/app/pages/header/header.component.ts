import { Component } from '@angular/core';
import { BtnIcon } from 'src/app/shared/models/BtnIcon';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {


constructor(private productsService: ProductsService,private router:Router){

  this.productsService.setProductNew()

}

btn1?:BtnIcon={route:"/",icon:"../../../assets/home.png",text:"Home"}
btn2?:BtnIcon={route:"/products",icon:"../../../assets/buscar.png",text:"Productos"}
btn3?:BtnIcon={route:"/gestion",icon:"../../../assets/gestion.png",text:"Gestión"}



newProduct(){
  this.productsService.setProductNew()  
  // this.router.navigate(['/gestion'])  
}



}
