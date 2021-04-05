import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/AddPost',
    pathMatch: 'full'
  },
  {
    path: 'AddPost',
    component: AddPostComponent
  },
  {
    path: 'ListPost',
    component: ListPostComponent
  },
  {
    path: 'UpdatePost/:index',
    component: UpdatePostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
