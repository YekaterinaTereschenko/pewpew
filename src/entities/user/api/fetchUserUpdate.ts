import { put } from '@/shared/api/request'
import type { IUpdateUser } from '../model/types'

export async function updateUser(data: IUpdateUser) {
    return await put('api/user', data, localStorage.getItem('token') ?? undefined)
}