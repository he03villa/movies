import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from './data.service';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private _data: DataService,
    private _service: ServiceService
  ) { }

  listMovies(pagina) {
    const url = environment.url + environment.api.list.replace('<<api_key>>', environment.key).replace('<<page>>', pagina);
    return this._service.promise(this._data.meotdoGet(url));
  }

  searchMovie(data) {
    const url = environment.url + environment.api.search.replace('<<api_key>>', environment.key).replace('<<page>>', data.pagina).replace('<<query>>', data.query);
    return this._service.promise(this._data.meotdoGet(url));
  }

  detailMovie(id) {
    const url = environment.url + environment.api.detalils.replace('<<api_key>>', environment.key).replace('{movie_id}', id);
    return this._service.promise(this._data.meotdoGet(url));
  }
}
