import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public lat: number = 51.678418;
  public lng: number = 7.809007;
  
  constructor() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.lat=position.coords.latitude;
        this.lng=position.coords.longitude;
      })
    }
   }
 
  ngOnInit() {
  }

}
