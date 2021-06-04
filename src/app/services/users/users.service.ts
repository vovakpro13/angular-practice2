import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../models/user";
import {urls} from "../../constans";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) {
  }

  getAll(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users);
  }
}
