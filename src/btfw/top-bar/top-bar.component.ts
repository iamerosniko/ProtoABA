import { Component, OnInit } from '@angular/core';

import { FrameworkConfigService } from '../services/framework-config.service';

@Component({
  selector: 'btfw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

}
