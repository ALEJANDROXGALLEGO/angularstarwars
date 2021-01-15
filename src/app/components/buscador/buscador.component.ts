import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/core/peliculas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  public peliculas:any[] = [];
  public termino: string = "" ;

  constructor( private activatedRoute:ActivatedRoute,
              private peliculasService: PeliculasService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.peliculas = this.peliculasService.buscarPeliculas( params['termino'] );
      console.log( this.peliculas );
    });

  }

}
