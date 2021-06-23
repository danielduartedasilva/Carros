import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Carro } from 'src/app/models/Carro';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  carros: Carro[] = [];
  
  constructor(private http: HttpClient) { 
    //Observable - para notificar quando voltar a informação
    http.get<Carro[]>("http://localhost:1234/carro/listar").subscribe((carros) => {
    for (let carro of carros) {
      console.log(carro._id);
    }  
    });
  }
  ngOnInit(): void {
  }

}
