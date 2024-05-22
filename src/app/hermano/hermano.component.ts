import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit{
  /* constructor(
    private _servicioFamiliar: ServicioFamiliarService
  ){
    
  } */

  nombre?: string;
  //injet con constructor
  /* ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequeno('Pedro')
    this.nombre = this._servicioFamiliar.getHermanoPequeno()
  } */

  ngOnInit(): void {
    this._servicioFamiliar2.setHermanoPequeno('pedro')
    this.nombre = this._servicioFamiliar2.getHermanoPequeno()
  }

  //inject con Injects
  private _servicioFamiliar2 = inject(ServicioFamiliarService);


  saludar(){
    this._servicioFamiliar2.saludar(this._servicioFamiliar2.getHermanoGrande() || "")
  }

  preguntar(){
    console.log(this._servicioFamiliar2.preguntarPorHijo())
  }

}
