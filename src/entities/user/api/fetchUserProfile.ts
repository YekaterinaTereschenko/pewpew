import type { IUser } from "../model/types";

export async function fetchUserProfile(): Promise<IUser> {
    const res = await fetch("http://localhost:5000/api/user/me", {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }       
        
    })

    if (!res.ok) {
        throw new Error(`Пользователь не найден (status ${res.status})`)
    }
    console.log(res);
    
    return res.json()
}