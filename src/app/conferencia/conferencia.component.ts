import { Component, OnInit } from '@angular/core';
import { Conferencia } from './conferencia';
import { ConferenciaService } from './conferencia.service';
@Component({
  selector: 'app-conferencia',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent implements OnInit {
  
  conferencias:Array<Conferencia> = [];
  
  constructor(private conferenciaService:ConferenciaService) { }
  getConferencias(){
    this.conferenciaService.getConferencias().subscribe(conferencias =>{this.conferencias = conferencias;});
  }
  ngOnInit() {
    this.getConferencias();
  }

}
