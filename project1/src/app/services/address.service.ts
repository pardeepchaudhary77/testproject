import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  stateUrl: string = '../assets/JSON/state.json'

  constructor(private authService: AuthService, private fireStore: AngularFirestore, private http: HttpClient) { }

  addAddress(address: string, address2: string, phone: number, zipcode: number, city: string, state: string, country: string){
    return this.fireStore.collection(`users/${this.authService.userId}/address`).add(
      {
        address, address2, phone, zipcode, city, state, country
      }
    )
  }
  getState(){
    return this.http.get(this.stateUrl)
  }

  getAddress(){
    return this.fireStore.collection(`users/${this.authService.userId}/address`).valueChanges()
  }

}
