import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css'
})
export class CategoryNavbarComponent implements OnInit{
  categoryArray:any; //Array<object>;
  constructor(private categoryService:CategoriesService){}

  ngOnInit():void{
    this.categoryService.loadData().subscribe(val=>{
      this.categoryArray=val;
    })
  }
}
