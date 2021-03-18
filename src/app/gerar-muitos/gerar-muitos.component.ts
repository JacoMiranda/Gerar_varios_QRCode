import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerar-muitos',
  templateUrl: './gerar-muitos.component.html',
  styleUrls: ['./gerar-muitos.component.css']
})
export class GerarMuitosComponent implements OnInit {

 inicial: number;
 final: number;
  constructor() { }

  ngOnInit(): void {
  }
  
  gerar():any{
   for( let i= this.inicial; i<= this.final; i++) {
         console.log(i);

   }
  }
  

}
