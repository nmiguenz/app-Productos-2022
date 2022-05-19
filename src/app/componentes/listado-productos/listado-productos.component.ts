import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  listadoProductos : Producto[] = [];
  @Output() productoSeleccionado : EventEmitter<any>= new EventEmitter<any>();

  constructor(private db : DataBaseService) { }

  ngOnInit(): void {
    this.db.getCollection('productos').then( (ref:any) => ref.subscribe((listadoRef:any) => {
      listadoRef.forEach((element : any) => {
        this.listadoProductos.push(element.payload.doc.data());
        console.log(this.listadoProductos)
      });
   }));
  }

  getProductoSeleccionado(detalleProd: Producto){
    this.productoSeleccionado.emit(detalleProd);

  }

}
