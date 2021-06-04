import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {UserComponent} from "./components/user/user.component";
import {UsersComponent} from "./components/users/users.component";
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserPostsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
