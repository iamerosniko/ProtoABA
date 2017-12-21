import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-showresult',
  templateUrl: './showresult.component.html',
  styleUrls: ['./showresult.component.css']
})
export class ShowresultComponent implements OnInit {
  testNow: any; 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(
    
  ) {this.testNow = this.route.snapshot.url;
  }

}
