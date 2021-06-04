import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IComment} from "../../models/comment";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../constans";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

  getPostComments(postId: number) : Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.posts + '/' + postId + '/comments' );
  }
}
