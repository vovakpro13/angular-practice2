import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[]

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe(({data: posts}) =>{
      this.posts = posts;
    });
  }

  ngOnInit(): void {
  }

}
