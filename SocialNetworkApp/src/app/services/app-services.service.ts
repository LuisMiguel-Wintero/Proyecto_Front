import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../domain/user-model';
import { Observable } from 'rxjs';
import { HistorysModel } from '../domain/historys-model';



@Injectable({
  providedIn: 'root'
})

export class AppServicesService {


  //  URL_BASE : 'http://192.168.1.100'
  constructor(private http: HttpClient ) { }

  //CRUD

  //Mis-Historias

  //GET

  getUserLogged(): Observable<UserModel>{
    return this.http.get<UserModel>('http://localhost:8080/users/1');
  }

  //POST

   addHistory (history: HistorysModel): Observable<HistorysModel> {
    return this.http.post<HistorysModel>('http://localhost:8080/messages',history,httpOptions);
     }





}

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
  })
};
