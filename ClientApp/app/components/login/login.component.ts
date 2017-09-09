import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { IdentityService } from '../../services/identity/identity.service';
import { BurtsonAuthentication } from '../../Models/BurtsonAuthentication';
import { Http } from "@angular/http";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class LoginComponent  {

    //private username: string;
    //private password: string;
    //constructor(private identity: IdentityService,
    //            private http: Http) { }

    //ngOnInit(): void {
    //    this.identity.authEvent.subscribe((auth: BurtsonAuthentication) => {
    //        if(auth.authorized) {
    //            this.onLoginSuccess(auth);
    //        }
            
    //    });
    //}

    //onSubmit(): void {
    //    let auth = new BurtsonAuthentication(this.username, this.password);
    //    this.identity.authenticate(auth);
    //}

    //onLoginSuccess(auth: BurtsonAuthentication): void {
    //    this.http.post('fileupload', auth);
    //    //this.router.navigate(['/upload']);
    //}

}
