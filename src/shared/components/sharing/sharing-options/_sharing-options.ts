import { QuickShare } from './quick-share.option'; 
import { FullShare } from './full-share.option'; 

export { QuickShare, FullShare }

export interface SharingOption {
    getLink(url: string): string;
}

export class SharingOptionContext {
    private strategy: SharingOption;

    constructor(strategy: SharingOption) {
        this.strategy = strategy;
    }

    public getLink(url: string): string {
        return this.strategy.getLink(url);
    }
}