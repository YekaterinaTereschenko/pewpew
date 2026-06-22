import { useQuery } from '@tanstack/react-query'
import { fetchUserProfile } from '../api/fetchUserProfile'

export function useUserProfile() {
    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: fetchUserProfile,
        retry: false,
    })

    return { isPending, isError, data, error, refetch }
}