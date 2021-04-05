import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsServiceService } from '../services/posts-service.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  index;
  submitted=false;
  updatePostForm: FormGroup = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    categories: new FormControl('', [Validators.required]),
    createDate: new FormControl(new Date())
  })
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postsServiceService: PostsServiceService) { }

  ngOnInit(): void {
    this.index = this.activatedRoute.snapshot.params['index'];
    this.loadData();
  }

  loadData()
  {
    let dataToUpdate = this.postsServiceService.getPostByIndex(this.index)
    this.updatePostForm.patchValue(dataToUpdate);
  }

  updatePost()
  {
    this.submitted = true;
    if(this.updatePostForm.invalid)
    {
      return ;
    }

    this.postsServiceService.updatePostByIndex(this.updatePostForm.value ,this.index)

    this.updatePostForm.reset();
    this.submitted = false;
    this.router.navigate(['ListPost'])

  }


}
