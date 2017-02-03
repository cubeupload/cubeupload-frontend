import { CUUser } from './cu-user.class';

export class CUObject {
    name: string;
    description: string;
    user: CUUser;

    constructor(name: string, description: string, user: CUUser) {
        this.name = name,
        this.description = description,
        this.user = user;
    }
}