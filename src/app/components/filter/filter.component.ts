import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/services/spacex-api.service';
import { SpacexService } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  launch_year: any = '';
  launch_success: any = '';
  land_success: any = '';

  constructor(public spacexApiService: SpacexApiService, public spacexService: SpacexService) { }

  ngOnInit(): void {

  }

  onClickLaunchYearFilter(year: any) {
    this.launch_year = year;
    this.spacexService.getSpaceXData(this.launch_success, this.land_success, this.launch_year);
  }

  onClickLaunchSuccess(data) {
    this.launch_success = data;
    this.spacexService.getSpaceXData(this.launch_success, this.land_success, this.launch_year);
  }

  onClickLandSuccess(data) {
    this.land_success = data;
    this.spacexService.getSpaceXData(this.launch_success, this.land_success, this.launch_year);
  }

}
