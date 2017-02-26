import { CUUser } from './cu-user.class';

export class CUObject {
    public id: string;
    name: string;
    description: string;
    user: CUUser;
    createdAt: string;
    updatedAt: string;

    constructor(id: string, name: string, description: string, user: CUUser, createdAt: string, updatedAt: string) {
        this.id = id,
        this.name = name,
        this.description = description,
        this.user = user;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}