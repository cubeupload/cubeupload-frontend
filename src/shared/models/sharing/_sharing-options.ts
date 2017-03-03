import { QuickShare } from './quick-share.option';
import { FullShare } from './full-share.option';

export { QuickShare, FullShare }

export interface SharingOptionInterface {
    id: string;
    getLink(url: string): string;
}

export class SharingOption {
    name: string;
    description: string;
    enabled: boolean;
    order: number;
    strategyId: string;
    private link: string;
    private strategy: SharingOption;

    constructor(name: string, description: string, enabled: boolean, order: number, imageUrl: string, strategy: SharingOption) {
        this.name = name;
        this.description = description;
        this.enabled = enabled;
        this.order = order;
        this.strategy = strategy;
        this.link = this.getLink(imageUrl);
    }

    public getLink(url: string): string {
        return this.strategy.getLink(url);
    }
}