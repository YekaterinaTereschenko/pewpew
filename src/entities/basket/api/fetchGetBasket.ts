import { get } from '@/shared/api/request'
import type { IBasket } from '../model/types'

export async function fetchGetBasket(): Promise<IBasket> {
    return await get<IBasket>('/api/basket', localStorage.getItem('token') ?? undefined)
}