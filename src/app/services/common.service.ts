import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  BASE_URL: any = 'https://api.spaceXdata.com/v3/launches?limit=100';

  constructor() { }
}
