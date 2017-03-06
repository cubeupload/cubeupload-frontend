import { SharingOption, QuickShare, FullShare } from '../../shared/services/share/_sharing-options';

export interface CUUserPreferencesInterface {
    sharingOptions: CUSharingOption[];
}

export class CUUserPreferences {
    sharingOptions: CUSharingOption[];

    constructor(sharingOptions: CUSharingOption[]) {
        this.sharingOptions = sharingOptions;
    }

    sharingOptionForId(): CUSharingOption {
        return {
            name: 'p',
            description: 'l',
            strategy: new QuickShare(),
            order: 1
        };
    }
}

export interface CUSharingOption {
    name: string;
    description: string;
    strategy: SharingOption;
    order: number;
}