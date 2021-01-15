import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PeliculasService } from 'src/app/core/peliculas.service';
import { PersonajeInterface } from 'src/app/interfaces/personaje';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent {
  personaje: PersonajeInterface[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService
    ){
    this.activatedRoute.params.subscribe( params =>{
      this.peliculasService.getServicesPersonajes(params['id']).then((res) => {
          this.personaje.push(res);
      }).catch(()=> {
        console.log('error pelicula')
      }); 
    });
  }





}
