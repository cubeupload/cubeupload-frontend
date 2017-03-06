import { SharingOption } from './sharing/_sharing-options';

export class CUUserPreferences {
    sharingOptions: SharingOption[];

    constructor(sharingOptions: SharingOption[]) {
        this.sharingOptions = sharingOptions;
    }
}