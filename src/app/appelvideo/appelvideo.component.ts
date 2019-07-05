import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appelvideo',
  templateUrl: './appelvideo.component.html',
  styleUrls: ['./appelvideo.component.sass']
})
export class AppelvideoComponent implements OnInit {

  public isMuted :boolean;
  public isOff :boolean;

  constructor() { }

  ngOnInit() {
  }

}
