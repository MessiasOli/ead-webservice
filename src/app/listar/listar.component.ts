import { WebService } from './../web.service';
import { Produto } from './../Produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listarProdutos: Produto[] = [];

  constructor(private web : WebService) { }

  carregarProdutos(): void {
    this.web.getProdutos().subscribe(res => this.listarProdutos = res);
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

}
