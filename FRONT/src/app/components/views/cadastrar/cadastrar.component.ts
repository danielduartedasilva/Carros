import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/Carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  carro: Carro = new Carro();
  constructor(private service: CarroService) { }

  ngOnInit(): void {}

  cadastrar(): void{
    //console.log(this.carro.modelo);
    this.service.cadastrar(this.carro).subscribe((carro) => {
      console.log(carro);
    });
  }
}
