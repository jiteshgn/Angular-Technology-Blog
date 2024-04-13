import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css'
})
export class SingleCategoryComponent {
  postsArray:any //Array<object>
  categoryObj:any
  constructor(private route:ActivatedRoute,private postService:PostsService){}

  ngOnInit(): void {
      this.route.params.subscribe(val=>{
        this.categoryObj=val
        this.postService.loadCategoryPosts(val['id']).subscribe(post=>{
          this.postsArray=post;
        });
      })
  }
}
