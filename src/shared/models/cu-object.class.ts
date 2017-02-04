import { CUUser } from './cu-user.class';

export class CUObject {
    id: string;
    name: string;
    description: string;
    user: CUUser;

    constructor(id: string, name: string, description: string, user: CUUser) {
        this.id = id,
        this.name = name,
        this.description = description,
        this.user = user;
    }
}