import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Talk } from './talk';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  private baseURL = "http://localhost:8080/talking/talks";

  constructor(private httpClient: HttpClient) { }

  getTalksList(): Observable<Talk[]> {
    return this.httpClient.get<Talk[]>(`${this.baseURL}`);    
  }

  createTalk(talk: Talk): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,talk);
  }

  getTalkById(id: number): Observable<Talk>{
    return this.httpClient.get<Talk>(`${this.baseURL}/${id}`);
  }

  updateTalk(id: number, talk: Talk): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, talk);
  }

  deleteTalk(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
