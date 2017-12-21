import { Component } from '@angular/core';

import { 
  FrameworkConfigSettings, 
  FrameworkConfigService 
} from '../btfw/services/framework-config.service';

import { 
  MenuItem, 
  MenuService 
} from '../btfw/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private frameworkConfigService: FrameworkConfigService,
      private menuService: MenuService) {
    let config: FrameworkConfigSettings = {
      applicationTitle: 'Skillset Database',
      currentUserLog: 'sarmife' //API for current user should be here
    };

    frameworkConfigService.configure(config);

    let initialMenuItem: Array<MenuItem> = [
      {
        text: 'Search',
        icon: 'fa-search',
        route: null,
        visible: true,
        submenu: [
          {
            text: 'Show Result',
            icon: 'fa-cogs',
            route: 'admin-access/show-search',
            visible: true,
            submenu: null
          },
          {
            text: 'import Result',
            icon: 'fa-cogs',
            route: null,
            visible: true,
            submenu: [
              {
                text: 'In PDF',
                icon: 'fa-cogs',
                route: 'admin-access/pdf-export',
                visible: true,
                submenu: null
              },
              {
                text: 'In Excel',
                icon: 'fa-cogs',
                route: 'admin-access/excel-export',
                visible: true,
                submenu: null
              }
            ]
          }
        ]
      },
      {
        text: 'Skillset',
        icon: 'fa-cogs',
        route: 'admin-access/skillset',
        visible: true,
        submenu: null
      },
      {
        text: 'Maintenance',
        icon: 'fa-wrench',
        route: null,
        visible: true,
        submenu: [
          {
            text: 'Location List',
            icon: 'fa-cogs',
            route: 'admin-access/location-maint',
            visible: true,
            submenu: null
          },
          {
            text: 'Department List',
            icon: 'fa-cogs',
            route: 'admin-access/department-maint',
            visible: true,
            submenu: null
          },
          {
            text: 'Skill List',
            icon: 'fa-cogs',
            route: 'admin-access/skill-maint',
            visible: true,
            submenu: null
          }
        ]
      },
      {
        text: 'Admin',
        icon: 'fa-cogs',
        route: 'admin-access/admin',
        visible: true,
        submenu: null
      },
      {
        text: 'ABA Sample',
        icon: 'fa-cogs',
        route: 'admin-access/aba-sample',
        visible: true,
        submenu: null
      },
    ];

    menuService.items = initialMenuItem;
  }
}
