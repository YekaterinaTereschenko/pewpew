import type { IItemToCard } from "../model/types"
import { post } from '@/shared/api/request'

export async function fetchAddToCard(data: IItemToCard) {
    return await post('api/basket', data, localStorage.getItem('token') ?? undefined)
}