import { post } from '@/shared/api/request'
import type { IUser } from '../model/types'

export async function fetchSignIn(data: any): Promise<IUser> {
    const result = await post<IUser>('api/user/login', data)
    localStorage.setItem('token', result.token)
    return result
}