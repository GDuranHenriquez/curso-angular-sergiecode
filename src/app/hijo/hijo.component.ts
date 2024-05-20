import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  mensaje: string = ""

  //Mensaje que recibe desde el padre.
  @Input() recibeHijo: string = '';

  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  
  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje)
  }

}
