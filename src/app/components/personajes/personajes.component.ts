import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from 'src/app/core/peliculas.service';
import { PersonajeInterface } from 'src/app/interfaces/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  personajes: PersonajeInterface[] = [];

  constructor( private peliculasService:PeliculasService,
               private router:Router
             ) {

              this.peliculasService.getServicesPersonajes('').then((res) => {
                res.results.forEach((element: PersonajeInterface, i: number)  => {
                  this.personajes.push(element);
                  console.log(element);
                  console.log(this.personajes);
                });
              }).catch(()=> {
                this.router.navigate( ['/about'] );
              }); 

             }

  ngOnInit() {

  }

  verPersonaje( idx:number ){
    this.router.navigate( ['/personaje',idx] );
  }

}
