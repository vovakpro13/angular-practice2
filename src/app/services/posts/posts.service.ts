import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../../models/post";
import {urls} from "../../constans";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts);
  }
  getUserPosts(userId: number): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.users + '/' + userId + '/posts')
  }
}
