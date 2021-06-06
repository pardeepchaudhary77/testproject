import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @ViewChild('image') image!: ElementRef;

  selectFile: any = null
  imgSrc:any = ''
  successMsg: string = ''
  errorMsg: string = ''
  Products: Array<any> = []
  addform: boolean = false
  addCategoryForm: boolean = false
  Categories: Array<any> = []


  uploadFile(event: any){
    //this.selectFile = <File>event.target.files[0]
    //const file: File = event.target.files[0]
    //console.log(file)

    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
      }
      reader.readAsDataURL(event.target.files[0])
      this.selectFile = event.target.files[0]
    }
  }

  constructor(private products: ProductsService, private category: CategoryService) { }

  ngOnInit(): void {
    this.products.getAllProductsForAdmin().subscribe(cs => {
      this.Products = cs.map( x => {
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })

    // category Data
    this.category.getAllCategories().subscribe(cs =>{
      this.Categories = cs.map(x =>{
        return {
          id: x.payload.doc.id,
          ...x.payload.doc.data() as {}
        }
      })
    })
  }

  showForm(){
    this.addform = true
  }
  cancelForm(){
    this.addform = false
  }


  addProduct(f:any){

    let Name = f.Name,
        Price = f.Price,
        Desc = f.Desc,
        category = f.category,
        img = this.selectFile
      this.products.addNewProduct(Name, Price, Desc, category, img)
      this.addform = false
  }

  removeProduct(index: any){
    if(confirm("Are you sure to delete "+this.Products[index].Name)) {
      this.products.deleteProduct(this.Products[index].id).then((alert: any) => this.errorMsg = 'Delete successfully')
    }
  }

  updateProduct(index: any){
    const update = this.Products[index]
    this.products.updateSingleProduct(update.id, update.Name, update.Price, update.category, update.Desc).then((alert: any) => this.successMsg = 'Update successfully')
  }

  //Category Data
  addCategory(c: any){
    let category = c.category, 
        message = c.message;
    
    this.category.addNewCategory(category, message)
    this.addCategoryForm = false
  }
  updateCategory(index: any){
    const update = this.Categories[index]
    this.category.updateSingleCategory(update.id, update.category, update.message).then((alert: any) => this.successMsg = 'Update successfully')
  }
  removeCategory(index: any){
    if(confirm('Are you sure to delete '+ this.Categories[index].category)){
      this.category.deleteCategory(this.Categories[index].id).then((alert: any) => this.errorMsg = 'Delete successfully')
    }
  }
  showCategoryForm(){
    this.addCategoryForm = true
  }
  cancelCategoryForm(){
    this.addCategoryForm = false
  }
}
