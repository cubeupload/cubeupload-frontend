import { CUUserPreferences } from './../shared/models/cu-user-preferences.class';
import { Injectable } from '@angular/core';

@Injectable()
export class PrefsService {
    userPreferences: CUUserPreferences;

    constructor() { }

    getPreferences(): CUUserPreferences {

        var preferences: CUUserPreferences = {
            uploadShowPreviews: true,
            otherPreference: false,
            somethingElse: false
        }

        return preferences;

    }

    setPreferences(prefs: CUUserPreferences): void {
        
    }

}