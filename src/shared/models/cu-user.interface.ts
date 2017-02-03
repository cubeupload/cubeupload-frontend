import { CUUserPreferences } from './cu-user-preferences.interface';

export interface CUUser {
    Username: string,
    Email: string,
    Settings: CUUserPreferences
}