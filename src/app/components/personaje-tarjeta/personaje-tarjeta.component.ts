import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaje-tarjeta',
  templateUrl: './personaje-tarjeta.component.html',
  styleUrls: ['./personaje-tarjeta.component.scss']
})

export class PersonajeTarjetaComponent implements OnInit {
  @Input() personaje: any = {};
  @Output() personajeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.personajeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.personaje);
  }

  verPersonaje(personaje: string) {
    var parm = personaje.substr(27,30);
    parm = parm.replace('/', '').replace(/\s/g, '');
    this.router.navigate( ['/pelicula', parm] );
  }

}
