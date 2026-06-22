export async function fetchDeleteFromBasket(id: number) {
    const res = await fetch("http://localhost:5000/api/basket/" + id, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    if (!res.ok) {
        throw new Error(`${res.status}`) // просто бросаем ошибку
    }
    
    return res.json()
}