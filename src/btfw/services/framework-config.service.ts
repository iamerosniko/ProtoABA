import { Injectable } from '@angular/core';

export interface FrameworkConfigSettings {
  applicationTitle?: string;
  currentUserLog?: string;
}

@Injectable()
export class FrameworkConfigService {
  applicationTitle = 'Put App Name in Config';
  currentUserLog = 'Unknow User'; 

  configure(settings: FrameworkConfigSettings) : void {
    Object.assign(this, settings)
  }

  constructor() { }

}
