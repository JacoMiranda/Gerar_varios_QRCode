import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qr-form',
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.css']
})
export class QrFormComponent implements OnInit {
  elementType: 'url' |'canvas'|'img' = 'url';
  valor: '';
  adicionado = false;
  valorSalvo = '';
  valorAtual = '';
  inicial='';
  final ='';
  descricao = '';
  

  @Output() qrAdicionado = new EventEmitter();

  gerarCodigo(): any {
    this.adicionado = true;
      this.gerar();
      
  }


   onKeyUp(evento: KeyboardEvent): any{
      this.valorAtual = (evento.target as HTMLInputElement).value;
   }

  salvarValor(valor): any{
    this.valorSalvo = valor;
    this.gerarCodigo();

  }
  salvarValor2(valor): any{
    const abc = valor.split('-', 3);
    this.descricao = abc[2].split(',', 1);
    this.valorSalvo = valor.split('-', 2).toString().replace(',', '-').trim();
    this.gerarCodigo();
  }
  limparInput(): any{
    this.valor = '';
    this.descricao='';
    this.final='';
    this.inicial='';
  }

  constructor() { }

  ngOnInit(): void {
  }

  gerar():any{//gera vários qrcode de uma só vez

    for( let i= Number.parseInt(this.inicial);
     i<= Number.parseInt(this.final); i++) {
     
      const qr = {
        valor: i.toString(),
        elementType: this.elementType,
        descricao: this.descricao
      }
      this.qrAdicionado.emit(qr);
      }
      this.limparInput();
   }

}
