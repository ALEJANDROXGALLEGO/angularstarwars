import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from 'src/app/core/peliculas.service';
import { PeliculaInterface } from 'src/app/interfaces/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  peliculas: PeliculaInterface[] = [];


  constructor( private peliculasService:PeliculasService,
               private router:Router
                ) {
                  this.peliculasService.getServicesPeliculas('').then((res) => {

                    res.results.forEach((element: PeliculaInterface, i: number)  => {
                      this.peliculas.push(element);
                    });
              
                  }).catch(()=> {
                    console.log('error')
                  }); 
  }

  ngOnInit() {

  }

  verPelicula( idx:number ){
    this.router.navigate( ['/pelicula',idx] );
  }

}
