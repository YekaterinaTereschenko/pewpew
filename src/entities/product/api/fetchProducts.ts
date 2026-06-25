import { get } from '@/shared/api/request'
import type { IProduct } from '../model/types'

interface IProductsResponse {
    count: number
    rows: IProduct[]
}

export async function fetchProducts(): Promise<IProductsResponse> {
    return await get<IProductsResponse>('api/device')
}