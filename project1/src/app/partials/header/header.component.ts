import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isopen : boolean = false;
  isUser: boolean = false;
  shoppingCart: any[] = []

  toggleNavBar(){
    this.isopen = !this.isopen
  }
  

  constructor(private as: AuthService, private cart: CartService) { }

  logout(){
    this.as.logout()
  }

  ngOnInit(): void {
     //cart length
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

    this.as.user.subscribe( user => {
      if(user) {
        this.isUser = true
        this.as.userId = user.uid
       // console.log(this.isUser)
      }
      else {
        this.isUser = false
        this.as.userId = ''
        //console.log(this.isUser)
      }
    })

   
  }

}
