import { post } from '@/shared/api/request'
import type { IUser } from '../model/types'

export async function fetchRegistration(data: any): Promise<IUser> {
    const result = await post<IUser>('api/user/registration', data)
    localStorage.setItem('token', result.token)
    return result
}