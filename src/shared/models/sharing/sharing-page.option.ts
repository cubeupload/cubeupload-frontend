import { SharingOptionInterface } from './_sharing-options';
import { Constants } from './../../constants';

export class SharingPage implements SharingOptionInterface {
    id: string = '1002';

    public getLink(url: string): string {
        return `${Constants.Site_URL()}/img/${url}`;
    }
}
