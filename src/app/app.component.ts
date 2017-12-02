import { DummyService } from './dummy.service';
import { Component } from '@angular/core';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke;
  constructor(private dummyService: DummyService) {
    this.joke = this.dummyService.get();

  }
}
