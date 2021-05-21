import { Produto } from './Produto';
import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ead-webservice';
  @Output()
  produto: string = "";
  mostrarCadastro: Boolean = true;

  constructor(){}

  traferirProduto(valor:string) {
    this.produto = valor;
    console.log('prod :>> ', this.produto);
    this.mostrarCadastro = false
  }

  trocarParaCadastro(valor: string){
    this.mostrarCadastro = true;
  }

  ngOnInit(){}
}

