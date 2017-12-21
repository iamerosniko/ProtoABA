import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApi } from '../user-api';
import { FrameworkConfigService } from '../../services/framework-config.service';

@Component({
  selector: 'btfw-noaccess',
  templateUrl: './noaccess.component.html',
  styleUrls: ['./noaccess.component.css']
})
export class NoaccessComponent implements OnInit {

  constructor(private userApi: UserApi, private router: Router, 
      private frameworkConfig: FrameworkConfigService) { }

  ngOnInit() {
    
  }

  enterNow() {
    // this.userApi.signIn("sarmife", "admin")
    // .subscribe((data) => {
    //   console.log('got valid: ', data)
    //   this.router.navigate(['admin-access']);
    // });

    let inputNow = this.userApi.signIn(this.frameworkConfig.currentUserLog);

    if (inputNow) {
      this.router.navigate(['admin-access'])
    }
  }

}
