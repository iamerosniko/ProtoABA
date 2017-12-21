import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { NoaccessComponent } from './users/noaccess/noaccess.component';

import { FrameworkConfigService } from './services/framework-config.service';
import { ScreenService } from './services/screen.service';
import { MenuService } from './services/menu.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    NoaccessComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class BtfwModule { }
