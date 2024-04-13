import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categoryArray:any //Array<object>
  formCategory:any;
  formStatus:any='Add';
  categoryId:any='';
  constructor(private categoryService:CategoriesService){}

  ngOnInit():void{
    this.categoryService.loadData().subscribe(val=>{
      console.log(val);
      this.categoryArray=val;
    })
  }

  onSubmit(formData:any){
    let categoryData:Category={
      category: formData.value.category
    }
    if(this.formStatus=='Add'){
      this.categoryService.saveData(categoryData);
      formData.reset();
    }else if(this.formStatus=='Edit'){
      console.log(1111,this.categoryId,categoryData)
      this.categoryService.updateData(this.categoryId,categoryData)
    }
    // let subCategoryData={
    //   subCategory: formData.value.category
    // }
    // this.afs.collection('categories').add(categoryData).then(docRef=>{
    //   console.log(docRef)
    // }).catch(err=>{console.log(err);})
  }
  onEdit(category:any,id:any){
    console.log(id,category)
    this.formCategory=category;
    this.formStatus='Edit';
    this.categoryId=id;
  }
  onDelete(id:any){
    this.categoryService.deleteData(id)
  }
}
