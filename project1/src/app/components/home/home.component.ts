import { Component, OnInit } from '@angular/core';
import { Products } from '../../interface/products.interface';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  add: number = -1;
  wishList_heart: boolean = false;
  
  
  Products : Array<any> = [
    // {Name: "Banana", Price: 5, Desc: "Fruit", ProductPath: '../assets/Pics/banana.jpg'},
    // {Name: "Kiwi", Price: 12, Desc: "Fruit", ProductPath: '../assets/Pics/Kiwi.jpg'},
    // {Name: "Orange", Price: 8, Desc: "Fruit", ProductPath: '../assets/Pics/orange.jpg'},
    // {Name: "Strawberry", Price: 10, Desc: "Fruit", ProductPath: '../assets/Pics/stoberry.jpg'}
  ]
  
 
  constructor(private productsService: ProductsService, private cart: CartService, private as: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(
      data => this.Products = data
    )
  }

  //wishList code
  wishList(index: any){
    //this.wishList_heart = !this.wishList_heart
    let select_wish = +index
    console.log(select_wish)
  }

  addToCart(index: any){
    if(this.as.userId){
      this.add = +index
      console.log("Added ", this.Products[index])
    } else{
      this.router.navigate(['/login'])
    }
  }
  buy(amount: number){
    let selectedProduct = this.Products[this.add]
    let data ={
      name: selectedProduct.Name,
      price: selectedProduct.Price,
      amount: +amount
    }
    this.cart.addCart(data)
      .then( () => this.add = -1)
      .catch( err => console.log(err))
  }
}
