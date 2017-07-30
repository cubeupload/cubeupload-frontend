import { SharingOptionInterface } from './_sharing-options';
import { Constants } from './../../constants';

export class DirectShare implements SharingOptionInterface {
    id: string = '1001';

    public getLink(url: string): string {
        return `${Constants.Site_URL()}/i/${url}`;
    }
}
