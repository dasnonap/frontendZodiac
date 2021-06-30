import { UserType } from './types';

export class User{
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    password: string;
    iban: string;
    email: string;
    userTypeID: UserType;
}