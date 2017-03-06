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
    imageUrl: string;
    strategyId: string;
    strategy: SharingOptionInterface;

    constructor(name: string, description: string, enabled: boolean, order: number, imageUrl: string, strategyId: string) {
        this.name = name;
        this.description = description;
        this.enabled = enabled;
        this.order = order;
        this.strategy = this.strategyForId(strategyId);
    }

    public getLink(url: string): string {
        return this.strategy.getLink(url);
    }

    public strategyForId(strategyId: string): SharingOptionInterface {
        return new SharingOptionFactory().getSharingOptionWithId(strategyId);
    }
}

export class SharingOptionFactory {
    sharingOptions: SharingOptionInterface[];

    constructor() {
        this.sharingOptions = [
            new QuickShare(),
            new FullShare()
        ];
    }

    getSharingOptionWithId(id: string): SharingOptionInterface {
        return this.sharingOptions
            .find((option) => option.id === id);
    }
}