import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { LoginComponent } from './components/login/login.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        UploadComponent,
        FetchDataComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'upload', component: UploadComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'login' }
        ])
    ]
})
export class AppModuleShared {
}
