import { SharingOptionInterface } from './_sharing-options';

export class QuickShare implements SharingOptionInterface {
    id: string = '1001';

    public getLink(url: string): string {
        return url + ' lol quick share';
    }
}