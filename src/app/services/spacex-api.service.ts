import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  loadingData: any = false;

  SpaceXData: any = [];

  LaunchYear: any = [
    { year: "2006", active: false },
    { year: "2007", active: false },
    { year: "2008", active: false },
    { year: "2009", active: false },
    { year: "2010", active: false },
    { year: "2011", active: false },
    { year: "2012", active: false },
    { year: "2013", active: false },
    { year: "2014", active: false },
    { year: "2015", active: false },
    { year: "2016", active: false },
    { year: "2017", active: false },
    { year: "2018", active: false },
    { year: "2019", active: false },
    { year: "2020", active: false },
  ]

  LaunchSuccess: any = [
    {success: 'true', active: 'false'},
    {success: 'false', active: 'false'},
  ]

  LandSuccess: any = [
    {success: 'true', active: 'false'},
    {success: 'false', active: 'false'},
  ]

  filter: any = {
    launch_year: '',
  }

  constructor(public http: HttpClient, public commonService: CommonService) { }

  getSpaceXDataAPI(launch_success?: any, land_success?: any, launch_year?: any) {
    return this.http.get(this.commonService.BASE_URL + '&launch_success=' + launch_success + '&land_success=' + land_success + '&launch_year=' + launch_year);
  }

}
