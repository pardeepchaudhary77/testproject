import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {

  stateJsonData: any = []
  addressess: any

  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit(): void {
    this.addressService.getState().subscribe(
      data => {
        this.stateJsonData = data;
      }
    )

    //getAddress
    this.addressService.getAddress().subscribe(data => this.addressess = data)
  }

  onAddress(f: any){
    let address = f.address,
        address2 = f.address2,
        phone = f.phone,
        zipcode = f.zipcode,
        city = f.city,
        state = f.state,
        country = f.country;
    this.addressService.addAddress(address, address2, phone, zipcode, city, state, country)
    this.router.navigate(["/address"])
  }

  deliverAddress(index: any){
    const add = this.addressess[index]
    console.log(add)
  }
}
