export interface IProduct {
    id?: number
    name: string
    price: number
    // description: string
    type: string
    brand: string
    img: string
    rating?: {
        rate: number
        count: number
    }
}
