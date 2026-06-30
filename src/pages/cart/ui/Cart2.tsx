import { basketStore } from '@/entities/basket/store-mobx/basket.store'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
const API_URL = import.meta.env.VITE_API_URL

const Cart2 = observer(() => {
    useEffect(() => {
        basketStore.fetchBasket()
    }, [])

    if (basketStore.isLoading) return <div>Загрузка...</div>

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6 max-w-2xl mx-auto">
            {basketStore.basket?.basket_devices.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-4 mb-3 border border-gray-200 dark:border-gray-800 rounded-xl">
                    <img
                        src={API_URL + item.device.img}
                        alt={item.device.name}
                        className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                        <p className="font-medium">{item.device.name}</p>
                        <p className="text-sm text-gray-500">Количество: {item.quantity}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <p className="font-medium">{(item.device.price * item.quantity).toLocaleString()} ₸</p>
                        <button
                            onClick={() => basketStore.removeItem(item.id)}
                            className="text-xs text-red-500 hover:text-red-600"
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            ))}
            <p>Итого: {basketStore.totalPrice} ₸</p>
            <p>Товаров: {basketStore.itemCount}</p>
        </div>
    )
})

export default Cart2