import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  // IPserver : http://192.168.1.100
  constructor(private http: HttpClient ) { }

  //CRUD

  //Mis-Historias

  //GET
  getUserLogged(){
    return this.http.get('http://192.168.1.100/users');
    }

}
