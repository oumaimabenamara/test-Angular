import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor() { }
  
  addPost(data)
  {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(data);
    localStorage.setItem('posts', JSON.stringify(posts));
  };

  getAllPosts()
  {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    return posts;
  };

  getPostByIndex(index)
  {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    return posts[index];
  };

  updatePostByIndex(newData, index)
  {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.splice(index, 1, newData);
    localStorage.setItem('posts', JSON.stringify(posts));
  };

  deletePostByIndex(index)
  {
    let posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
}
