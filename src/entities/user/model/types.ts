export interface IUser {
    name: string
    address: string
    email: string
    password: string
    phone: string
    token: string
}

export interface IUpdateUser {
    name: string
    phone: string
    address: string
}