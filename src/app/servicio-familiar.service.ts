import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {
  hermanoGrande?: string;
  hermanoPequeño?: string;

  getHermanoGrande():string{
    return this.hermanoGrande || ''
  }

  setHermanoGrande(hermano: string){
     this.hermanoGrande = hermano
  }

  getHermanoPequeno():string{
    return this.hermanoPequeño || ''
  }

  setHermanoPequeno(hermano: string){
     this.hermanoPequeño = hermano
  }

  saludar(hermano: string){
    console.log(`Hola ${hermano}`)
  }

  preguntarPorHijo(){
    return '¿Como estas hijo?';
  }

  constructor() { }

}
