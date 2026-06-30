import { del } from '@/shared/api/request'

export async function fetchDeleteFromBasket(id: number) {
    return await del(`api/basket/${id}`, localStorage.getItem('token') ?? undefined)
}