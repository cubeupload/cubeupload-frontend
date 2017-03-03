import { SharingOption, SharingOptionInterface } from './../models/sharing/_sharing-options'
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SharingService {

    constructor(private _http: Http) { }

    getSharingOptions(): Observable<SharingOption[]> {
        return Observable.of([]);
    }

}