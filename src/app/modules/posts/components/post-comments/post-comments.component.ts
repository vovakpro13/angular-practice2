import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentsService} from "../../../../services";
import {IComment} from "../../../../models/comment";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  comments: IComment[];

  constructor(private activatedRoute:ActivatedRoute, private commentsService: CommentsService) {
    this.activatedRoute.params.subscribe(({id}) =>{
      this.commentsService.getPostComments(id).subscribe((comments) =>{
        console.log(comments)
        this.comments = comments;
      })
    })
  }

  ngOnInit(): void {

  }

}
