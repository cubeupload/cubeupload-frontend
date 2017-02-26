import { CUUserPreferences } from './cu-user-preferences.class';

export class CUUser {
    username: string;
    email: string;
    settings: CUUserPreferences;

    constructor(username: string, email: string, settings: CUUserPreferences) {
        this.username = username,
        this.email = email,
        this.settings = settings
    }
}