export interface ICustomer {
    id: number;
    label: string;
    password: string;
    description: string;
}

export class Customer implements ICustomer {
    id: number;
    label: string;
    password: string;
    description: string;

    constructor(id: number = null, label='', password='', description='') {
        this.id = id;
        this.label = label;
        this.password = password;
        this.description = description;
    }
}