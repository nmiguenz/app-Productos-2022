import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {

  public paises:[] | any = [];
  public pelis:[] | any = [];
  
  @Output() paisSeleccionado : EventEmitter<any>= new EventEmitter<any>(); 

  constructor(private http: HttpService) { 
    http.getArrayPaises().subscribe((listaPaises)=>{
      this.paises = listaPaises;
    });
  }

  ngOnInit(): void {
    
  }

  getPaisSeleccionado(pais: [] | any){
    this.paisSeleccionado.emit(pais);
  }

}
