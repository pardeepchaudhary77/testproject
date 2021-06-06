import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private fs: AngularFirestore) { }

  getAllCategories(){
    return this.fs.collection('Categories').snapshotChanges()
  }

  addNewCategory(category: string, message: string){
    return this.fs.collection('Categories').add(
      {
      category, 
      message}
      )
  }

  deleteCategory(id: any){
    return this.fs.doc(`Categories/${id}`).delete()
  }

  updateSingleCategory(id:any,category: string, message: string){
    return this.fs.doc(`Categories/${id}`).update({category, message})
  }
}
