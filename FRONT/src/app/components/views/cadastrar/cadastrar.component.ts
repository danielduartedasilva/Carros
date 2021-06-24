import { Component, OnInit } from "@angular/core";
import { Carro } from "src/app/models/Carro";
import { CarroService } from "src/app/services/carro.service";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  modelo!: string;
  placa!: string;
  ano!: string;
  //createdAt!: Date;
  constructor(private service: CarroService) {}

  ngOnInit(): void {}

  cadastrar(): void {
    let carro = new Carro();
    carro.modelo = this.modelo;
    carro.placa = this.placa;
    carro.ano = Number.parseInt(this.ano);
    this.service.cadastrar(carro).subscribe((carro) => {
      console.log(carro);
    });
    this.modelo = "";
    this.placa = "";
    this.ano = "";
  }
}
