import { Component } from '@angular/core';
import { IdentityService } from '../../services/identity/identity.service';
import { UploadService } from '../../services/upload/upload.service';
import { BurtsonAuthentication } from '../../Models/BurtsonAuthentication';


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ 
        IdentityService,
        UploadService
    ]
})
export class AppComponent {
}
