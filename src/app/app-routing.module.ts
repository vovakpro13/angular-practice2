import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UsersResolveService} from "./services/usersResolve.service";
import {PostsComponent} from "./components/posts/posts.component";
import {PostsResolveService} from "./services/postsResolve.service";
import {UserDetailsComponent} from "./components/users/user-details/user-details.component";
import {PostDetailsComponent} from "./components/posts/post-details/post-details.component";

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {data: UsersResolveService}, children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {path: 'posts', component: PostsComponent, resolve: {data: PostsResolveService},children:[
      {path: ':id', component: PostDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
