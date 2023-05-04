import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.scss']
})
export class PaginadorComponent implements OnInit {

  @Input() elementos;
  @Output() out = new EventEmitter();
  arrayPaginacion = [];
  @Input() web;
  @Input() mobile;
  @Input() indice = 0;
  tamWeb = 5;
  tamMobile = 3;
  cantidadMuestra = this.service.isMobile() ? this.tamMobile : this.tamWeb;
  //elementos = 40;
  datosDerecha = this.cantidadMuestra;
  datosIzquierda = this.cantidadMuestra;

  constructor(
    private service: ServiceService,
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.arrayPaginacion.length = changes.elementos.currentValue;
    /* this.irSelected(0); */
  }

  irAnterior() {
    if (this.indice > 0) {
      this.irSelected(this.indice - 1);
    }
    this.scrolltop();
  }


  irSiguiente() {
    if (this.indice < this.arrayPaginacion.length - 1) {
      this.irSelected(this.indice + 1);
    }
    this.scrolltop();
  }

  irSelected(idx) {
    this.datosIzquierda = this.cantidadMuestra;
    this.datosDerecha = this.cantidadMuestra;
    if (idx - this.cantidadMuestra < 0) {
      this.datosIzquierda = idx - this.cantidadMuestra;
    } else {
      this.datosIzquierda = this.cantidadMuestra;
    }
    if (idx + this.cantidadMuestra > this.arrayPaginacion.length) {
      this.datosDerecha = this.arrayPaginacion.length - idx - this.cantidadMuestra;
    } else {
      this.datosDerecha = this.cantidadMuestra;
    }
    if (this.datosIzquierda < 0 && this.datosDerecha < 0) {
      this.datosIzquierda = this.cantidadMuestra;
      this.datosDerecha = this.cantidadMuestra;
    } else if (this.datosIzquierda < 0 && this.datosDerecha > 0) {
      this.datosDerecha = this.cantidadMuestra - this.datosIzquierda + 1;
      this.datosIzquierda += this.cantidadMuestra;
    } else if (this.datosIzquierda > 0 && this.datosDerecha < 0) {
      this.datosIzquierda = this.cantidadMuestra - this.datosDerecha + 2;
      this.datosDerecha += this.cantidadMuestra;
    } else {
      this.datosIzquierda = this.cantidadMuestra;
      this.datosDerecha = this.cantidadMuestra
      if (idx - this.cantidadMuestra == 0) {
        this.datosDerecha++;
      }
      if ((this.cantidadMuestra + idx) - this.arrayPaginacion.length == 0) {
        this.datosIzquierda++;
        this.datosIzquierda++;
      } else if ((this.cantidadMuestra + idx) - this.arrayPaginacion.length == -1) {
        this.datosIzquierda++;
      }
    }
    if (this.datosIzquierda + this.datosDerecha >= this.elementos) {
      this.datosIzquierda = this.elementos;
      this.datosDerecha = this.elementos;
    }
    this.indice = idx;
    this.out.emit(this.indice);
    this.scrolltop();
  }

  irCantidadArriba() {
    this.irSelected(this.indice + this.cantidadMuestra);
    this.scrolltop();
  }

  irCantidadAbajo() {
    this.irSelected(this.indice - this.cantidadMuestra);
    this.scrolltop();
  }

  btnMostrarAtras() {
    return !(this.indice != 0);
  }

  btnMostrarSiguiente() {
    return !(this.indice != this.arrayPaginacion.length - 1);
  }

  mostrar3PuntosSiguiente(i) {
    return (this.indice < this.arrayPaginacion.length - (this.datosIzquierda + 1)) && (i > this.arrayPaginacion.length - 2);
  }

  mostrar3PuntosAtras(i) {
    return (this.indice > this.datosDerecha) && i < 1;
  }

  mostrarElemento(i) {
    return (i < (this.indice + this.datosDerecha) && i > (this.indice - this.datosIzquierda)) || i == 0 || i == this.arrayPaginacion.length - 1
  }

  scrolltop() {
    document.documentElement.scrollTo({ top: 0, behavior: 'auto' });
  }

}
