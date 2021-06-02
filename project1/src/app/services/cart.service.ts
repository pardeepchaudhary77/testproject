import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore, private as: AuthService) { }

  addCart(Product: any){
    return this.fs.collection('users/'+this.as.userId+'/cart').add(Product)
  }

  getCart(){
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()
  }

  removeCart(id:any){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
  }

  updateDocCart(id: any, amount: any){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({amount})
  }
  
}
