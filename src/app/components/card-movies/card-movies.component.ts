import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-card-movies',
  templateUrl: './card-movies.component.html',
  styleUrls: ['./card-movies.component.scss']
})
export class CardMoviesComponent implements OnInit {

  @Input() data;
  img = environment.urlImg;

  constructor(
    private _service: ServiceService
  ) { }

  ngOnInit() {
  }

  ir(id) {
    console.log(id);
    this._service.url('/detalle/' + id);
  }

}
