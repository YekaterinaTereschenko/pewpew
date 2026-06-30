import { get } from '@/shared/api/request'
import type { IUser } from "../model/types"

export async function fetchUserProfile(): Promise<IUser> {
    return await get<IUser>('api/user/me', localStorage.getItem('token') ?? undefined)
}