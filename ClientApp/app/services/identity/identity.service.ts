import { Injectable, Inject, EventEmitter } from '@angular/core';
import { BurtsonAuthentication } from '../../Models/BurtsonAuthentication';
import { Http } from '@angular/http';


@Injectable()
export class IdentityService {
    private _baseUrl: string;
    public authentication: BurtsonAuthentication;
    public authEvent: EventEmitter<BurtsonAuthentication> = new EventEmitter<BurtsonAuthentication>();

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this._baseUrl = baseUrl;
    }


    public authenticate(authentication: BurtsonAuthentication) {
        this.http.post(this._baseUrl + 'authorize', authentication)
            .subscribe(result => {
                this.authentication = result.json() as BurtsonAuthentication; 
                this.authEvent.emit(this.authentication);
            });
    }
}
