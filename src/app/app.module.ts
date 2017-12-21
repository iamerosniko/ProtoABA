import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BtfwModule } from '../btfw/btfw.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShowresultComponent } from './search/showresult/showresult.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { appRoutes } from './app.routing';
import { LocationComponent } from './maintenance/location/location.component';
import { DepartmentComponent } from './maintenance/department/department.component';
import { SkillsetmComponent } from './maintenance/skillsetm/skillsetm.component';
import { ExportpdfComponent } from './search/export/exportpdf/exportpdf.component';
import { ExportexcelComponent } from './search/export/exportexcel/exportexcel.component';
import { AdminComponent } from './admin/admin.component';
import { AdminaccessComponent } from './adminaccess/adminaccess.component';
import { AbaSampleComponent } from './aba-sample/aba-sample.component';

import { ReactiveFormsModule } from '@angular/forms'; // reactive forms

import { UserService } from './com_services/user.service';
import { UserApi } from '../btfw/users/user-api';
import { AuthGuard } from './com_services/auth-guard.service';
import { AdmGuard } from './com_services/adm-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowresultComponent,
    SkillsetComponent,
    LocationComponent,
    DepartmentComponent,
    SkillsetmComponent,
    ExportpdfComponent,
    ExportexcelComponent,
    AdminComponent,
    AdminaccessComponent,
    AbaSampleComponent
  ],
  imports: [
    BrowserModule,
    BtfwModule,
    ReactiveFormsModule,    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard,
    AdmGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
