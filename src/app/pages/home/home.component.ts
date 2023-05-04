import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrayMovies:any = [];
  page = 1;
  totalPages = 1;
  search = '';

  constructor(
    private _movie: MovieService
  ) { }

  ngOnInit() {
    this.cargarMovies();
  }

  async cargarMovies() {
    let res:any;
    if (this.search == '') {
      res = await this._movie.listMovies(this.page);
    } else {
      const data = { pagina: this.page, query: this.search };
      res = await this._movie.searchMovie(data);
    }
    this.arrayMovies = res.results;
    this.page = res.page;
    this.totalPages = res.total_pages;
  }

  paginacionOut(event) {
    this.page = event + 1;
    this.cargarMovies();
  }

  eliminarSearch() {
    this.search = '';
    this.cargarMovies();
  }

}
