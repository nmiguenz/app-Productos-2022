import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listadoUsuarios : [] | any;

  loginGroup : FormGroup | any;

  constructor(private fb : FormBuilder, private route: Router, private service: AuthService) { 
    
    this.loginGroup = fb.group({
      'email' : '',
      'password' : ''
    })

    this.listadoUsuarios = [
      {email: 'rosasanchez@gmail.com', password: '123456ad', perfil:'admin'},
      {email: 'juanperez@gmail.com', password: 'lalalaemp', perfil:'empleado'}
    ];
  }

  ngOnInit(): void {
  }

  cargarEmpleado(){
      this.loginGroup.controls.email.setValue(this.listadoUsuarios[1].email);
      this.loginGroup.controls.password.setValue(this.listadoUsuarios[1].password);
      console.log(this.loginGroup.value)
  }

  cargarAdmin(){
    this.loginGroup.controls.email.setValue(this.listadoUsuarios[0].email);
    this.loginGroup.controls.password.setValue(this.listadoUsuarios[0].password);
    console.log(this.loginGroup.value)
  }    

  login(){
    if(this.loginGroup.value.email === 'rosasanchez@gmail.com' && this.loginGroup.value.password === '123456ad')
    {
      this.service.estaLogueado('admin');
      console.log('entro', this.service.isLogged, this.service.perfil)
      this.route.navigate(['alta']);
    }
    else if (this.loginGroup.value.password === 'juanperez@gmail.com' || this.loginGroup.value.password === 'lalalaemp'){
      this.service.estaLogueado('empleado');
      this.route.navigate(['alta']);
    }
    else{
      alert('No es un usuario válido');
    }

  }

}
