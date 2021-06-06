import { Component, OnInit } from '@angular/core';
import { Products } from '../../interface/products.interface';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {

  add: number = -1;
  wishList_heart: boolean = false;
  
  
  Products : Array<any> = []
  Categories: Array<any> =[]
  
 
  constructor(private productsService: ProductsService, 
              private cart: CartService, 
              private as: AuthService, 
              private router: Router,
              private catagoryServices: CategoryService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(cs =>{
        this.Products = cs.map(x => {
          return{
            id: x.payload.doc.id,
            ...x.payload.doc.data() as {}
          }
        })
      }
    )

    this.catagoryServices.getAllCategories().subscribe(cs => {
      this.Categories = cs.map(x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
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
