import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPaisesComponent } from './componentes/lista-paises/lista-paises.component';
import { BienvenidaComponent } from './paginas/bienvenida/bienvenida.component';
import { LoginComponent } from './paginas/login/login.component';
import { AltaProductoComponent } from './paginas/alta-producto/alta-producto.component';
import { environment } from '../environments/environment';

//Modulos AngularFire
import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DetalleProductoComponent } from './paginas/detalle-producto/detalle-producto.component';
import { ListadoProductosComponent } from './componentes/listado-productos/listado-productos.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { AbmContainerComponent } from './paginas/abm-container/abm-container.component';
import { AltaContainerComponent } from './componentes/alta-container/alta-container.component';
import { ModificaContainerComponent } from './componentes/modifica-container/modifica-container.component';
import { BajaContainerComponent } from './componentes/baja-container/baja-container.component';
import { ListaContainerComponent } from './componentes/lista-container/lista-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPaisesComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaProductoComponent,
    DetalleProductoComponent,
    ListadoProductosComponent,
    DetalleComponent,
    DetallePaisComponent,
    AbmContainerComponent,
    AltaContainerComponent,
    ModificaContainerComponent,
    BajaContainerComponent,
    ListaContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
