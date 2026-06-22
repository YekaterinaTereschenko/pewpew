import type { IItemToCard } from "../model/types"


export async function fetchAddToCard(data: IItemToCard) {
    const res = await fetch("http://localhost:5000/api/basket", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        throw new Error(`Ошибка (status ${res.status})`)
    }

    const result = await res.json()
    return result
}
