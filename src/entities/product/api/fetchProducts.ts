import type { IProduct } from '../model/types'

interface IProductsResponse {
    count: number
    rows: IProduct[]
}

export async function fetchProducts(): Promise<IProductsResponse> {
    const res = await fetch('http://localhost:5000/api/device')

    if (!res.ok) {
        throw new Error(`Продукт не найден (status ${res.status})`)
    }

    return res.json()
}