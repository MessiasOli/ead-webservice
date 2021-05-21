import { WebService } from './../web.service';
import { Produto } from './../Produto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.setProduto();
  }
  @Output() cancelarForm = new EventEmitter();
  @Input() prod: string = "";
  produto: Produto = {
    _id : "",
    title: "",
    description: "",
    price: 0,
    createAt: "",
    updatedAt: "",
    _v: 0,
  }

  setProduto(){
    this.produto = {...JSON.parse(this.prod)};
  }

  salvar(){
    this.web.editProduto(this.produto).subscribe(res=> {
      if(res.ok == true){
        alert("O produto foi atualizado com sucesso!")
        window.location.reload();
      }else{
        alert("O cadastro não foi realizado!")
      }
    });
  }

  cancelar(){
    this.cancelarForm.emit("");
  }

}
