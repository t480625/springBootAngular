import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  public getMessage(): Observable<any> {
    console.log(' services is working fine.......');
    // return this.http.get('http://localhost:8080/1/2', {responseType : 'text'});
    return this.http.get('http://192.168.1.129:8080/1/2', {responseType : 'text'});
  }
}
