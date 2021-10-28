import { Book } from '../componentes/model/book';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private httpClient:HttpClient) { }

  getLivros(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(environment.BASE_URL+"books");
  }
}
