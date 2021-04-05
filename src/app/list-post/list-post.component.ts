import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from '../services/posts-service.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts: any;
  // currentDate = new Date();
  constructor(private postsServiceService: PostsServiceService) { }

  ngOnInit(): void {
    this.posts=this.postsServiceService.getAllPosts();
  }

  
  deletePost(i){
    this.postsServiceService.deletePostByIndex(i);
    this.posts=this.postsServiceService.getAllPosts();
  }

}
