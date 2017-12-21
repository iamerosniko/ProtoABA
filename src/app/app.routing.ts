import { Routes } from '@angular/router';

import { NoaccessComponent } from '../btfw/users/noaccess/noaccess.component';
import { AdminaccessComponent } from './adminaccess/adminaccess.component';
import { ShowresultComponent } from './search/showresult/showresult.component';
import { ExportpdfComponent } from './search/export/exportpdf/exportpdf.component';
import { ExportexcelComponent } from './search/export/exportexcel/exportexcel.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { LocationComponent } from './maintenance/location/location.component';
import { DepartmentComponent } from './maintenance/department/department.component';
import { SkillsetmComponent } from './maintenance/skillsetm/skillsetm.component';
import { AdminComponent } from './admin/admin.component';
import { AbaSampleComponent } from './aba-sample/aba-sample.component';

import { AuthGuard } from './com_services/auth-guard.service';
import { AdmGuard } from './com_services/adm-guard.service';

export const appRoutes: Routes = [
    { path: 'no-access', component: NoaccessComponent },
    { path: 'admin-access', component: AdminaccessComponent, canActivate: [AuthGuard], children: [
        { path: '', canActivateChild: [AuthGuard],
            children: [
                { path: '', redirectTo: 'skillset', pathMatch: 'full' },
                { path: 'show-search', component: ShowresultComponent },
                { path: 'pdf-export', component: ExportpdfComponent },
                { path: 'excel-export', component: ExportexcelComponent },
                { path: 'skillset', component: SkillsetComponent },
                { path: 'location-maint', component: LocationComponent},
                { path: 'department-maint', component: DepartmentComponent},
                { path: 'skill-maint', component: SkillsetmComponent},
                { path: 'aba-sample', component : AbaSampleComponent}
                
            ]
        },
        { path: '', canActivateChild: [AdmGuard],
        children: [
            
            { path: 'admin',  component: AdminComponent },
        ]
    }
    ]},
    { path: '', component: NoaccessComponent },
    { path: '**', component: NoaccessComponent }
];