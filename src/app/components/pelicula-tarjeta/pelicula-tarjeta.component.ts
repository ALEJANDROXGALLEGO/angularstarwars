import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html',
  styleUrls: ['./pelicula-tarjeta.component.scss']
})
export class PeliculaTarjetaComponent implements OnInit {
  @Input() pelicula: any = {};
  @Output() peliculaSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.peliculaSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verPersonaje(personaje: string) {
    let parm = personaje.substr(28,32).replace('/', '');
    this.router.navigate( ['/personaje', parm] );
  }

}
