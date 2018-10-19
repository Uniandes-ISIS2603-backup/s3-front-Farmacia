import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../registro.service';
import { Registro } from '../registro';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html',
  styleUrls: ['./registro-list.component.css']
})
export class RegistroListComponent implements OnInit {

  constructor(private registroService : RegistroService) { }

  registros : Registro[];

  getRegistros():void{
    this.registroService.getRegistros().subscribe(registros => this.registros = registros);
  }

  ngOnInit() {
    this.getRegistros();
  }

}
