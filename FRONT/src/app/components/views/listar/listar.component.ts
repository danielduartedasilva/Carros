import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/Carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  carros: Carro[] = [];

  constructor(private service: CarroService) { }
  
  ngOnInit(): void {
    //Observable - para notificar quando voltar a informação
    this.service.listar().subscribe((carros) => {
    this.carros = carros;
  });
  }
  
}
