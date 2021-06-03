import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {IUser} from "../../models/user";
import {urls} from "../../constans";
import {IPost} from "../../models/post";
import {PostsService} from "./posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<IPost[]>{

  constructor(private postsService:PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postsService.getAll();
  }
}
