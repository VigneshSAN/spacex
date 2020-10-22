import { Component } from '@angular/core';
import { SpacexApiService } from './services/spacex-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spacex';

  constructor(public spacexApiService: SpacexApiService) {

  }
}
