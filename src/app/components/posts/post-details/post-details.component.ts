import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../../models/IPost";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPost
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(() =>{
      this.postDetails = this.router.getCurrentNavigation()?.extras.state as IPost
    })
  }

  ngOnInit(): void {
  }
}
