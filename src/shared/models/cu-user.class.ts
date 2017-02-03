import { CUUserPreferences } from './cu-user-preferences.class';

export class CUUser {
    Username: string;
    Email: string;
    Settings: CUUserPreferences;

    constructor(username: string, email: string, settings: CUUserPreferences) {
        this.Username = username,
        this.Email = email,
        this.Settings = settings
    }
}