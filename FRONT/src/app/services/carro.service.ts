import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Carro } from "../models/Carro";

@Injectable({
  providedIn: "root",
})
export class CarroService {
  private baseURL = "http://localhost:1234/";

  constructor(private http: HttpClient) {}
  listar(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.baseURL}carro/listar`);
  }
  cadastrar(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(`${this.baseURL}carro/cadastrar`, carro);
  }
  // alterar(carro: Carro): Observable<Carro> {
  //   return this.http.put<Carro>(`${this.baseURL}carro/alterar/:placa`, carro);
  // }
  // remover(idCarro: number): void {
  //   this.http.delete<Carro>(`${this.baseURL}carro/remover/:placa`)
  //   return 
  // }
}
