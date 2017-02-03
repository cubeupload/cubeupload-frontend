import { CUUser } from './cu-user.interface';

export interface CUObject {
    name: string,
    description: string,
    user: CUUser
}