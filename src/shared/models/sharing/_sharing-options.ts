import { DirectShare } from './direct-share.option';
import { SharingPage } from './sharing-page.option';

export { DirectShare, SharingPage }

export interface SharingOptionInterface {
    id: string;
    getLink(url: string): string;
}

export enum SharingPriority {
    Primary = 1,
    Secondary,
    Tertiary
}

export class SharingOption {
    
    name: string;
    description: string;
    enabled: boolean;
    order: number;
    priority: SharingPriority;
    glyphicon: string;
    strategyId: string;
    strategy: SharingOptionInterface;

    constructor(name: string, description: string, enabled: boolean, order: number, priority: SharingPriority, strategyId: string, glyphicon: string) {
        this.name = name;
        this.description = description;
        this.glyphicon = glyphicon;
        this.enabled = enabled;
        this.priority = priority;
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
            new DirectShare(),
            new SharingPage()
        ];
    }

    getSharingOptionWithId(id: string): SharingOptionInterface {
        return this.sharingOptions
            .find((option) => option.id === id);
    }
}