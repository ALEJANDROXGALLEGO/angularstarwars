import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PeliculasService } from 'src/app/core/peliculas.service';
import { PeliculaInterface } from 'src/app/interfaces/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent {

  pelicula: PeliculaInterface[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService
    ){
    this.activatedRoute.params.subscribe( params =>{
      this.peliculasService.getServicesPeliculas(params['id']).then((res) => {
         console.log(res) 
        this.pelicula.push(res);
      }).catch(()=> {
        console.log('error pelicula')
      }); 
    });
  }
}
