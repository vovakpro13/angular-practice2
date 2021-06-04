import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostsResolveService} from "../../services";
import {PostCommentsComponent} from "./components/post-comments/post-comments.component";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {data: PostsResolveService},
    children:[
      {path: ':id', component: PostCommentsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
