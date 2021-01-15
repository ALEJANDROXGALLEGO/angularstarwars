import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { PersonajeTarjetaComponent } from './components/personaje-tarjeta/personaje-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscadorComponent,
    PeliculaTarjetaComponent,
    PeliculaComponent,
    PeliculasComponent,
    AboutComponent,
    PersonajesComponent,
    PersonajeComponent,
    PersonajeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
