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

  @Output() incrementarDesdeHijo = new EventEmitter<void>();
  @Output() decrementarDesdeHijo = new EventEmitter<void>();

  incrementar(){
    this.incrementarDesdeHijo.emit()
  }
  
  decrementar(){
    this.decrementarDesdeHijo.emit()
  }

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje)
  }

}
