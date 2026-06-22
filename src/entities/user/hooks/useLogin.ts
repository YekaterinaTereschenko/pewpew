import { useMutation } from '@tanstack/react-query'
import { fetchSignIn } from '../api/fetchSignIn'
import type { IUser } from '../model/types'

export function useLogin() {
    const { mutate, mutateAsync, isPending, isError, data, error } = useMutation({
        mutationFn: (credentials: IUser) => fetchSignIn(credentials),
    })

    return { mutate, mutateAsync, isPending, isError, data, error }
}