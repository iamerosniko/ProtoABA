import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exportexcel',
  templateUrl: './exportexcel.component.html',
  styleUrls: ['./exportexcel.component.css']
})
export class ExportexcelComponent implements OnInit {
  public testResult = true && true || 'heello';
  constructor() { }

  ngOnInit() {
  }

}
