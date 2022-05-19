import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';
import { AbmContainerComponent } from './paginas/abm-container/abm-container.component';
import { AltaProductoComponent } from './paginas/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { DetalleProductoComponent } from './paginas/detalle-producto/detalle-producto.component';
import { LoginComponent } from './paginas/login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/bienvenida',
    pathMatch:'full'
  },
  {
    path:'bienvenida',
    component:BienvenidaComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'alta',
    component:AltaProductoComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'detalle',
    component:DetalleProductoComponent,
    // canActivate : [AuthGuard]
  },
  {
    path:'container',
    component:AbmContainerComponent,
    // canActivate : [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
