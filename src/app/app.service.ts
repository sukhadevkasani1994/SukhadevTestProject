import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from './User/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(public http: HttpClient) { }
  geturl = 'https://jsonplaceholder.typicode.com/users';
  public GetUserDetails(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(this.geturl);
  }
}
