import { useMutation } from '@tanstack/react-query'
import { fetchRegistration } from '../api/fetchRegistration'
import type { IUser } from '../model/types'

export function useRegistration() {
    const { mutate, mutateAsync, isPending, isError, data, error } = useMutation({
        mutationFn: (credentials: IUser) => fetchRegistration(credentials),
    })

    return { mutate, mutateAsync, isPending, isError, data, error }
}