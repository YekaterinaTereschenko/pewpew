import type { IProduct } from '../model/types'

export async function fetchProducts(): Promise<IProduct[]> {
    const res = await fetch('https://fakestoreapi.com/products')

    if (!res.ok) {
        throw new Error(`Продукт не найден (status ${res.status})`)
    }

    return res.json()
}
