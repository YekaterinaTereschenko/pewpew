export interface IItemToCard {
    deviceId: number,
    quantity: number
}

export interface IBasketDevice {
    id: number
    quantity: number
    device: {
        name: string
        price: number
        img: string
    }
}

export interface IBasket {
    basket_devices: IBasketDevice[]
}