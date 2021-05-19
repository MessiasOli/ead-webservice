import { Produto } from './Produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {
  baseUrl = "https://banco-dados-teste.glitch.me/api"

  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl + "/produtos");
  }

  constructor(private http : HttpClient) { }
}
