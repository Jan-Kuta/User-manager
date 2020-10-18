export type User = {
    id: string
    username: string
    firstName: string
    lastName: string
    email: string
    phone: string
    state: UserState
    permanentAddress: Address
    contactAddress?: Address
};

export type Address = {
    street: string
    city: string
    zip: string
};

export enum UserState {
    NEW = 'STATE_NEW',
    VALIDATED = 'STATE_VALIDATED',
    VIP = 'STATE_VIP'
}
