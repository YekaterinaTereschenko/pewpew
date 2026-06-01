export interface IProduct {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating?: {
        rate: number
        count: number
    }
}

export interface IModal {
    modal: boolean
    selectedProduct: IProduct | null
    open: (product: IProduct) => void
    close: () => void
}

export interface IForm {
    name: string
    surname: string
    phone: string
}