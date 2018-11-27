import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Cliente } from '../../cliente/cliente';

@Component({
  selector: 'app-auth-sing-up',
  templateUrl: './auth-sing-up.component.html',
  styleUrls: ['./auth-sing-up.component.css']
})
export class AuthSingUpComponent implements OnInit {

  constructor(
    private servicio:AuthService,
    private toastr:ToastrService,
  ) { }
user: User;
cliente:Cliente
roles:string[];

singUp()
{
  this.servicio.login(this.user.cedula,this.user.role);
  this.toastr.success("Se ha creado exitosamente")
}

  ngOnInit() 
  {
    
  }

}
