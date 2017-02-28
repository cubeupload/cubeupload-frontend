import { SharingOption } from './_sharing-options';

export class QuickShare implements SharingOption {
    public getLink(url: string): string {
        return url + ' lol quick share';
    }
}