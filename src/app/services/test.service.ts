import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: variable-name
  private _url = '/assets/Data/data.json';


  User(): Observable<Test[]> {
    return this.http.get<Test[]>(this._url);
  }


}



