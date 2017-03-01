import { SharingOption } from '../../shared/services/share/_sharing-options';

export class CUUserPreferences {
    sharingOptions: CUSharingOption[];

    constructor(sharingOptions: CUSharingOption[]) {
        this.sharingOptions = sharingOptions;
    }
}

export interface CUSharingOption {
    name: string;
    description: string;
    strategy: SharingOption;
    order: number;
}