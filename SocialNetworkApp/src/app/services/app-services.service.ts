import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../domain/user-model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AppServicesService {


  // IPserver : 'http://192.168.1.100'
  constructor(private http: HttpClient ) { }

  //CRUD

  //Mis-Historias

  //GET
  
  getUserLogged(): Observable<UserModel>{
    return this.http.get<UserModel>('http://192.168.1.100/users/1');
  }

  //  getUserLogged(){ 
  //    return this.http.get('${this.IPserver}/users');
  //    }
  

}

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
  })
};
