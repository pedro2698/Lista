
import { Component, OnInit } from '@angular/core'; 
import { Alum } from '../alum';
import {Alumnos} from '../mock-alumnos';

@Component({ 
  selector: 'app-alumnos',
templateUrl: './alumnos.component.html',
styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit { 
  
  alumnos = Alumnos;
selectedAlum: Alum;

constructor() { }

 ngOnInit() {
}
onSelect(alum: Alum):void{
  this.selectedAlum = alum;
}
}
