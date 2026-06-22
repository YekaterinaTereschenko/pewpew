import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchGetBasket } from '@/entities/basket/api/fetchGetBasket'
import { fetchDeleteFromBasket } from '@/entities/basket/api/fetchDeleteFromBasket'

export default function Cart() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { isPending, isError, error, data } = useQuery({
    queryKey: ['basket'],
    queryFn: fetchGetBasket,
  })

  useEffect(() => {
    if (isError && error.message === '401') {
      navigate('/sign')
    }
  }, [isError, error])

  const handleDelete = async (id: number) => {
    await fetchDeleteFromBasket(id)
    queryClient.invalidateQueries({ queryKey: ['basket'] })
  }

  if (isPending) return <div>Загрузка...</div>
  if (isError) return <div>Ошибка</div>

  const total = data.basket_devices.reduce(
    (sum: number, item: any) => sum + item.device.price * item.quantity, 0
  )

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6 max-w-2xl mx-auto">
      {data.basket_devices.length === 0 && (
        <p className="text-gray-500 text-center mt-20">Корзина пуста</p>
      )}

      {data.basket_devices.map((item: any) => (
        <div key={item.id} className="flex items-center gap-4 p-4 mb-3 border border-gray-200 dark:border-gray-800 rounded-xl">
          <img
            src={`http://localhost:5000/${item.device.img}`}
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
              onClick={() => handleDelete(item.id)}
              className="text-xs text-red-500 hover:text-red-600"
            >
              Удалить
            </button>
          </div>
        </div>
      ))}

      {data.basket_devices.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <span className="text-gray-500">Итого</span>
          <span className="text-lg font-semibold">{total.toLocaleString()} ₸</span>
        </div>
      )}
    </div>
  )
}