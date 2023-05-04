import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private router: Router,
  ) { }

  url(url) {
    this.router.navigate([url]);
  }

  promise(subscribe) {
    return new Promise((resolve, reject) => subscribe.subscribe(resul => {
      resolve(resul);
    }, error => resolve(error)));
  }

  isMobile() {
    return document.documentElement.clientWidth < 1195;
  }
}
