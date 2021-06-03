import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {IUser} from "../../models/user";
import {urls} from "../../constans";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<IUser[]>{

  constructor(private usersService:UsersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.usersService.getAll();
  }
}
