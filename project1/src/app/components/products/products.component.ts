import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: any
  productId: any

  constructor(private productService: ProductsService, private actrouter: ActivatedRoute, private cartServices: CartService) { }

  ngOnInit(): void {
    this.productId = this.actrouter.snapshot.params['id']
    this.loadProductDetails(this.productId)
  }

  loadProductDetails(productId: any){
    this.productService.getSingleProduct(productId).subscribe(product => {
      this.product = product;
    });
  }

  addToCart(amount: number){
    let selectedProduct = this.product
    let data ={
      name: selectedProduct.Name,
      price: selectedProduct.Price,
      amount: +amount
    }

    this.cartServices.addCart(data).catch( err => console.log(err))
  }

}
