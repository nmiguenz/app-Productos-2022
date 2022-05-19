import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged : boolean = false;
  perfil : string = '';

  constructor() { }

  estaLogueado(perfilUser : string){
    this.isLogged = true;
    this.perfil = perfilUser;
  }

  deslogueado(){
    this.isLogged = false;
  }
}
