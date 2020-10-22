import { Component, OnInit } from '@angular/core';
import { SpacexApiService } from 'src/app/services/spacex-api.service';
import { SpacexService } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-lanch-programs',
  templateUrl: './lanch-programs.component.html',
  styleUrls: ['./lanch-programs.component.scss']
})
export class LanchProgramsComponent implements OnInit {

  LoaderArray: any = [1,2,3,4,5,6,7,8]

  constructor(public spacexApiService: SpacexApiService, public spacexService: SpacexService) { }

  ngOnInit(): void {
    this.spacexService.getSpaceXData('','', '');
  }

}
