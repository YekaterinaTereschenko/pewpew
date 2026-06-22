import type { IUpdateUser } from '../model/types'

export async function updateUser(data: IUpdateUser) {
    const res = await fetch('http://localhost:5000/api/user', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
    })

    if (!res.ok) throw new Error(String(res.status))
    return res.json()
}