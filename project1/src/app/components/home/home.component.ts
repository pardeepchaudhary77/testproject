import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products.interface';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  Products : Array<any> = [
    // {Name: "Banana", Price: 5, Desc: "Fruit", ProductPath: '../assets/Pics/banana.jpg'},
    // {Name: "Kiwi", Price: 12, Desc: "Fruit", ProductPath: '../assets/Pics/Kiwi.jpg'},
    // {Name: "Orange", Price: 8, Desc: "Fruit", ProductPath: '../assets/Pics/orange.jpg'},
    // {Name: "Strawberry", Price: 10, Desc: "Fruit", ProductPath: '../assets/Pics/stoberry.jpg'}
  ]
  
 
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(
      data => this.Products = data
    )
  }

  addToCart(index: any){
    console.log("Added ", this.Products[index])
  }

}
