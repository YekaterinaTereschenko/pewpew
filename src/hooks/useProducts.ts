import { useEffect, useState } from "react"
import type { IProduct } from "../models/models"

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const load = async () => {
            setLoading(true)

            try {
                const res = await fetch('https://fakestoreapi.com/products')

                if (!res.ok) {
                    throw new Error(`Продукт не найден (status ${res.status})`)
                }

                const data = await res.json()
                setProducts(data)

            } catch (e) {
                console.error('Ошибка:', e)
                setError('Не удалось загрузить продукт')

            } finally {
                setLoading(false)
            }
        }

        load()

    }, [])

    return { products, error, loading }
}
