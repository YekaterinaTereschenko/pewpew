import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../api/fetchProducts'

export function useProducts() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    return { isPending, isError, data, error }
}
