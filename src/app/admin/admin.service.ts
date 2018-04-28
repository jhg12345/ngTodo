import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TodoVO} from '../domain/todo.vo';
import {ResultVO} from '../domain/result.vo';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdminService {

  private SERVER: string;
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  findNews(params: any): Observable<ResultVO> {
    return this.http.post<ResultVO>(
      this.SERVER + '/api/newsList',
      params,
      {headers: this.headers}
    );
  }
}
