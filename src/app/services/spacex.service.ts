import { Injectable } from '@angular/core';
import { SpacexApiService } from './spacex-api.service';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(public spacexApiService: SpacexApiService) { }

  getSpaceXData(launch_success?: any, land_success?: any, launch_year?: any) {
    this.spacexApiService.loadingData = true;
    this.spacexApiService.getSpaceXDataAPI(launch_success, land_success, launch_year)
      .subscribe((response: any) => {
        console.log(response);
        this.spacexApiService.SpaceXData = response;
        this.spacexApiService.loadingData = false;
      })
  }
}
