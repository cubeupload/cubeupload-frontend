import { CUUserPreferences } from './../../shared/models/cu-user-preferences.class';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Constants } from './../../shared/constants';
import { SharingOptionFactory, SharingOption } from './../../shared/models/sharing/_sharing-options';


@Injectable()
export class PrefsService {
    userPreferences: CUUserPreferences;

    constructor(private _http: Http) { }

    getPreferences(): Observable<CUUserPreferences> {
        return this._http.get(Constants.API_Preferences_Get()).map(response => {
            this.userPreferences = response.json();
            this.userPreferences.sharingOptions = this.userPreferences.sharingOptions.map(option => {
                var op = new SharingOption(option.name, option.description, option.enabled, option.order, option.imageUrl, option.strategyId);
                return op;
            })
            return this.userPreferences;
        });
    }

}