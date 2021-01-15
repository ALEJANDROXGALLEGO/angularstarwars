import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PeliculaInterface } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  
  public ResultPeliculas: any;
  public ResultPersonajes: any;
  constructor(private http: HttpClient) {}

  getServicesPeliculas( idx: string) {
    const promise = new Promise<any>((resolve, reject) => {
      let mURLfilms: string = `${environment.urlApi}/films/${idx}`;
      this.http
        .get<any>(mURLfilms)
        .toPromise()
        .then((res: any) => {
          this.ResultPeliculas = res;
          console.log(res);
          resolve(this.ResultPeliculas);
        })
        .catch((err: any) => {
          this.ResultPeliculas = err;
          reject(this.ResultPeliculas);
        });
    });
    return promise;
  }

  getServicesPersonajes( idx: string) {
    const promise = new Promise<any>((resolve, reject) => {
      let mURLpersonajes= `${environment.urlApi}/people/${idx}`;
      this.http
        .get<any>(mURLpersonajes)
        .toPromise()
        .then((res: any) => {
          this.ResultPersonajes = res;
          console.log(this.ResultPersonajes);
          resolve(this.ResultPersonajes);
        })
        .catch((err: any) => {
          this.ResultPersonajes = err;
          reject(this.ResultPersonajes);
        });
    });
    return promise;
  }

  getPeliculas(): PeliculaInterface[] {
    return this.ResultPeliculas;
  }

  getPelicula(idx: string) {
      return this.ResultPeliculas.results[idx];
  }

  buscarPeliculas(termino: string): PeliculaInterface[] {
    let searchArr: PeliculaInterface[] = [];
    termino = termino.toLowerCase();
    for (let i = 0; i < this.ResultPeliculas.length; i++) {
      let pelicula = this.ResultPeliculas[i];
      let nombre = pelicula.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        pelicula.idx = i;
        searchArr.push(pelicula);
      }
    }
    return searchArr;
  }
}
