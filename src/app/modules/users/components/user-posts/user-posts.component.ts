import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../../services";
import {IPost} from "../../../../models/post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  userPosts: IPost[]

  constructor(private activatedRoute:ActivatedRoute, private usersService:PostsService) {
    this.activatedRoute.params.subscribe(({id}) =>{
      this.usersService.getUserPosts(id).subscribe(posts =>{
        this.userPosts = posts;
      })
    })
  }

  ngOnInit(): void {
  }

}
