import { SharingOption } from './_sharing-options';

export class QuickShare implements SharingOption {
    
    uniqueId: number = 1001;

    public getLink(url: string): string {
        return url + ' lol quick share';
    }
}