import { Constants } from './../../constants';

export class SharingOption {
    name: string;
    description: string;
    enabled: boolean;
    order: number;
    link: string;

    constructor(name, description, enabled, order, url){
        this.name = name;
        this.description = description;
        this.enabled = enabled;
        this.order = order;
        this.link = 'll';
    }
}