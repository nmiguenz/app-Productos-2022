import { Producto } from './../../clases/producto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() inputProducto : Producto | any;

  constructor() { }

  ngOnInit(): void {
  }

}
