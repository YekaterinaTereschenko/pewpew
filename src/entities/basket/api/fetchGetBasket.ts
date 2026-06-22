export async function fetchGetBasket() {
    const res = await fetch("http://localhost:5000/api/basket", {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    if (!res.ok) {
        throw new Error(`${res.status}`) // просто бросаем ошибку
    }
    
    return res.json()
}