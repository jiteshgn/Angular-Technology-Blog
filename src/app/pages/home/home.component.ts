import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  featuredPostsArray:any; //Array<object>;
  latestPostsArray:any; //Array<object>;

  constructor(private postService:PostsService){
    this.postService.loadFeatured().subscribe(val=>{
      this.featuredPostsArray=val;
    })
    this.postService.loadLatest().subscribe(val=>{
      this.latestPostsArray=val;
    })
  }
  ngOnInit(){}
}
