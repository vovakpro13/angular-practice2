import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";
import {urls} from "../constans";

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<IUser[]>{

  constructor(private httpClient:HttpClient) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.httpClient.get<IUser[]>(urls.posts);
  }
}
