import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) { }

  apiUrl:string = "http://localhost:8081/"

  register(data: any): Promise<any> {
    return fetch(this.apiUrl+ 'register', {method: 'POST',body: JSON.stringify(data),headers: {'Content-type': 'application/json',},})
    .then((res) => res.text());
  }

  login(data: any): Promise<any> {
    return fetch(this.apiUrl + 'login', {method: 'POST',body: JSON.stringify(data),headers: {'Content-type': 'application/json',},})
    .then((res) => res.text());
  }

  getUserByEmail(email: string): Promise<any> {
    return fetch(this.apiUrl + `useremail/${email}`, {method: 'GET',})
    .then((res) => res.json());
  }

  getApprovedQuestions(): Promise<any> {
    return fetch(this.apiUrl + 'questions/approved').then((res) => res.json());
  }

  getUnique(): Promise<any> {
    return fetch(
      this.apiUrl + 'users/unique/' + localStorage.getItem('name')!
    ).then((res) => res.json());
  }

  updateUser(data:any):Promise<any>{

    return fetch(this.apiUrl+ 'updateuser', {method: 'POST',body: JSON.stringify(data),headers: {'Content-type': 'application/json',},})
    .then((res) => res.text());
  }

 
  

}
