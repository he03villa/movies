import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MovieService } from '../../services/movie.service';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  dataMovie;
  img = environment.urlImg;

  constructor(
    private _route: ActivatedRoute,
    private _movie: MovieService,
    public _service: ServiceService
  ) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this.cargarMovie(id);
  }

  async cargarMovie(id) {
    const res = await this._movie.detailMovie(id);
    console.log(res);
    this.dataMovie = res;
  }

}
