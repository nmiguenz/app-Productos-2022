import { Producto } from './../../clases/producto';
import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  productoSeleccionado : Producto | any;

  constructor() { }

  ngOnInit(): void {
  }

  tomarProductoParaMostrar(producto : Producto){
    this.productoSeleccionado = producto;
    console.log(this.productoSeleccionado);
  }


}
