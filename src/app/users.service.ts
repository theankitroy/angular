import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseurl: "http://localhost:8080/user/signup" = "http://localhost:8080/user/signup";
  constructor(private httpClient:HttpClient) { }

  createUser(user: User):Observable<Object>{
    return this.httpClient.post(`${this.baseurl}`,user);
  }
}
