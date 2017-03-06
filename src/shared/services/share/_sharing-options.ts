import { QuickShare } from './quick-share.option';
import { FullShare } from './full-share.option';

export { QuickShare, FullShare }

export interface SharingOption {
    uniqueId: number;
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

export class SharingOptionFactory {
    sharingOptions: SharingOption[];

    constructor() {
        this.sharingOptions = [
            new QuickShare(),
            new FullShare()];
    }

    getSharingOptionWithId(id: number): SharingOption {
        return this.sharingOptions
            .find((option) => option.uniqueId === id);
    }
}