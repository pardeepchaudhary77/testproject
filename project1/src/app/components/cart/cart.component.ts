import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCart: Array<any> = []
  successMsg: string = ''
  errorMsg: string = ''

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getCart().subscribe(cs => 
      {
        this.shoppingCart = cs.map( x =>{
        return{
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
          }
        })
        console.log(this.shoppingCart)
      }
    )
    
  }

  deleteCart(index: any){
    if(confirm("Are you sure to delete "+this.shoppingCart[index].name)) {
      this.cart.removeCart(this.shoppingCart[index].id).then(alert => this.errorMsg = 'Cart item delete successfully')
    }
  }

  updateCart(index: any){
    this.cart.updateDocCart(this.shoppingCart[index].id, this.shoppingCart[index].amount).then(alert => this.successMsg = 'Amount has been update successfully')
  }


}
