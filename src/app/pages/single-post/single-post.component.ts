import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit{
  postData:any;
  similarPostArray:any; //Array<object>;
  cnt=0;
  constructor(private route:ActivatedRoute,private postService:PostsService){}
  ngOnInit(): void {
    this.route.params.subscribe(val=>{
      this.postService.loadOnePost(val['id']).subscribe(post=>{
        this.postData=post;
        this.loadSimilarPost(this.postData.category.categoryId); 
              
        (this.cnt==0 ? this.postService.countViews(val['id']) : '')
        this.cnt++;
      })
    })
  }
  loadSimilarPost(catId:any){
    this.postService.loadSimilar(catId).subscribe(val=>{
      this.similarPostArray=val;
    })
  }
}
