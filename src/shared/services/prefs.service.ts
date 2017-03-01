import { CUUserPreferences } from './../../shared/models/cu-user-preferences.class';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Constants } from './../../shared/constants';

@Injectable()
export class PrefsService {
    userPreferences: CUUserPreferences;

    constructor(private _http: Http) { }

    getPreferences(): Observable<CUUserPreferences> {
        return this._http.get(Constants.API_Preferences_Get()).map(response => {
            this.userPreferences = response.json();
            return response.json();
        });
    }

}