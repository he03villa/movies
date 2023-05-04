import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMoviesComponent } from './card-movies/card-movies.component';
import { PaginadorComponent } from './paginador/paginador.component';



@NgModule({
  declarations: [CardMoviesComponent, PaginadorComponent],
  exports: [CardMoviesComponent, PaginadorComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
