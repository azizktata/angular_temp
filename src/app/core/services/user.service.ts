import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // private apiURL = 'https://jsonplaceholder.typicode.com';
  private apiURL = environment.apiURL;

  getUsers(): Observable<HttpResponse<User[]>> {
    // let myParams =  new HttpParams().set('page', "3").set("sort", "1");
    return this.http.get<User[]>(this.apiURL + "/users", {observe: 'response'});
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiURL}/users/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL + "/users",user);
  }

  putUser(user:User, id:number): Observable<User> {
    return this.http.put<User>(`${this.apiURL}/users/${id}`, user);
  }

  deleteUser(id:number): Observable<any>{ // <response type>
    return this.http.delete(`${this.apiURL}/users/${id}`);
  }
}
