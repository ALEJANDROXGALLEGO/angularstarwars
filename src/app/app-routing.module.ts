import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'about', component: AboutComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'personaje/:id', component: PersonajeComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'peliculas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
