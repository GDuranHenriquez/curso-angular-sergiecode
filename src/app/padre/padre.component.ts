import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  valorContador: number = 0;
  messagePadre = 'Ahumentando mis conocimientos'
  reciboMensaje: string = "";

  nombre?: string;
  fecha?: Date = new Date()
  dolar: number = 36.64
  pi?: number = Math.PI;
  factor: number = 0.5

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan')
    this.nombre = this._servicioFamiliar.getHermanoGrande()
  }

  constructor(
    private _servicioFamiliar: ServicioFamiliarService
  ){
    
  }

  recibirMensaje($event : string){
    this.reciboMensaje = $event;
  }

  incrementar(){
    this.valorContador++;
  }

  decrementar(){
    if(this.valorContador > 0){
      this.valorContador--;
    }
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || "")
  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo())
  }

}
