import { WebService } from './../web.service';
import { Produto } from './../Produto';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaProdutos: Produto[] = [];
  @Output() editarProduto = new EventEmitter();

  constructor(private web : WebService) { }

  carregarProdutos(): void {
    this.web.getProdutos().subscribe(res => this.listaProdutos = res);
  }

  editar(id:any): void {
    console.log('id :>> ', id);
    let prod = this.listaProdutos.find(p => p._id == id)
    if(prod){
      this.editarProduto.emit(JSON.stringify(prod));
    }
  }

  excluir(id:any): void {
    this.web.apagarProduto(id)
    .subscribe(res => {
      console.log('res :>> ', res);
      if(res.ok == true){
        alert("Produto apagado com sucesso!")
        window.location.reload();
      }else{
        alert("Produto não foi realizado!")
      }
    });
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

}
