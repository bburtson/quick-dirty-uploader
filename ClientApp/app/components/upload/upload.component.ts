import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IdentityService } from '../../services/identity/identity.service';
import { BurtsonAuthentication } from '../../Models/BurtsonAuthentication';
import { Router } from '@angular/router';
import { UploadService } from "../../services/upload/upload.service";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Component({
    selector: 'upload',
    templateUrl: './upload.component.html'
})
export class UploadComponent implements OnInit {
    @ViewChild('fileInput') fileInput: ElementRef;
    public currentCount = 0;

    constructor(public identity: IdentityService,
                private router: Router,
                private http: Http) { }
    
    ngOnInit(): void {
        if(!this.identity.authentication) {
            this.router.navigate(['/login']);
        } else if(this.identity.authentication.authorized == false){
            this.router.navigate(['/login']);
        }    
    }
}
