import { Injectable } from '@angular/core';
import { AngularFirestore } from'@angular/fire/firestore'
import { AngularFireStorage } from'@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private fs: AngularFirestore, private storage: AngularFireStorage) { }

  getAllProducts(){
    return this.fs.collection('Products').snapshotChanges()
  }

  addNewProduct(Name: string, Price: number, Desc: string, category: string, image: File){
    let ref = this.storage.ref('ProductImages/' + image.name + '_' + new Date().getTime())
    ref.put(image).then(() => {
      ref.getDownloadURL().subscribe(ProductPath => {
        this.fs.collection('Products').add(
          {
            Name,
            Price,
            Desc,
            category,
            ProductPath
          }
        )
      })
    })
    
  }
  getAllProductsForAdmin(){
    return this.fs.collection('Products').snapshotChanges()
  }
  deleteProduct(id: any){
      return this.fs.doc(`Products/${id}`).delete()
  }
  updateSingleProduct(id: any, Name: string, Price: number, category: string, Desc: string){
    return this.fs.doc(`Products/${id}`).update({Name, Price, category, Desc})
  }

  getSingleProduct(id: any){
    return this.fs.doc(`Products/${id}`).valueChanges()
  }
}
