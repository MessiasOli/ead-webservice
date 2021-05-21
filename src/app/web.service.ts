import { Produto } from './Produto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {
  baseUrl = "https://banco-dados-teste.glitch.me/api"

  cadastrarProduto(produto:any) : Observable<any> {
    let body = new HttpParams();
    body = body.set("title", produto.title)
    body = body.set("price", produto.price.toString().replace(",", "."))
    body = body.set("description", produto.description)

    return this.http.post(this.baseUrl + "/produtos", body, {observe: "response"})
  }

  apagarProduto(id:string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/produtos/${id}`,{observe: "response"});
  }
  
  getProdutos() : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl + "/produtos");
  }

  editProduto(prod: Produto){
    let body = new HttpParams();
    body = body.set("title", prod.title)
    body = body.set("price", prod.price.toString().replace(",", "."))
    body = body.set("description", prod.description)
    return this.http.put(`${this.baseUrl}/produtos/${prod._id}`, body,{observe: "response"});
  }

  constructor(private http : HttpClient) { }
}
