import type { IUser } from '../model/types'

export async function fetchSignIn(data: any): Promise<IUser> {
    const res = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    if (!res.ok) {
        throw new Error(`Ошибка (status ${res.status})`)
    }

    const result = await res.json()
    localStorage.setItem('token', result.token)

    return result
}