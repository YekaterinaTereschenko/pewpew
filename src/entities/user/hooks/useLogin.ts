import { useMutation } from '@tanstack/react-query'
import { fetchSignIn } from '../api/fetchSignIn'
import type { IUser } from '../model/types'
import type { ILogIn } from '@/features/sign-form/model/types'

export function useLogin() {
    const { mutate, mutateAsync, isPending, isError, data, error } = useMutation<IUser, Error, ILogIn>({
        mutationFn: (credentials: ILogIn) => fetchSignIn(credentials),
    })

    return { mutate, mutateAsync, isPending, isError, data, error }
}