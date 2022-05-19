import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/clases/producto';
import { DataBaseService } from 'src/app/services/data-base.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  nacionalidad : {} | any;
  bandera : string = '';

  productGroup : FormGroup | any;

  constructor(private fb : FormBuilder, private db : DataBaseService) { 

    this.productGroup = this.fb.group({
      'codigo' : ['',[Validators.required]],
      'descripcion' : ['',[Validators.required]],
      'precio' : ['',[Validators.required, Validators.min(30)]],
      'stock' : ['',[Validators.required,Validators.min(1)]],
      'nacionalidad': ['',[Validators.required]],
      'comestible' : ['',[Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  obtenerNacionalidadProdcuto(paisSeleeccionado : any){
    this.nacionalidad = paisSeleeccionado;
    this.productGroup.controls.nacionalidad.setValue(paisSeleeccionado.translations.spa.common); 
    this.bandera = this.nacionalidad.flags.png; 
  }

  async altaProducto(){
    let producto : Producto = this.productGroup.value;

    producto.nacionalidad = this.nacionalidad;

    let res = await this.db.alta(producto, 'productos');

    if (res){
      this.productGroup.reset();
      alert('Se dio de alta el producto.');
    }
    else
      alert('No se dio de alta el producto.');
  }


}
