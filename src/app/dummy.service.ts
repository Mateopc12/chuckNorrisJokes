import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/pairwise';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DummyService {
  url = 'https://api.chucknorris.io/jokes/random';
  // url = 'https://my.api.mockaroo.com/my_saved_schema.json?key=0bf59570';
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return Observable
    .timer(0, 6000)
    .switchMap(o => this.http.get(this.url))
    .pluck('value')
    .pairwise();
  }
}
