export class CUUserPreferences {
    uploadShowPreviews: boolean;
    otherPreference: boolean;
    somethingElse: boolean;

    constructor(prefs: CUUserPreferences) {
        this.uploadShowPreviews = prefs.uploadShowPreviews,
        this.otherPreference = prefs.otherPreference,
        this.somethingElse = prefs.somethingElse
    }
}