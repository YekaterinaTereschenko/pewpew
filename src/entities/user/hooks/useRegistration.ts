import { useMutation } from '@tanstack/react-query'
import { fetchRegistration } from '../api/fetchRegistration'
import type { IUser } from '../model/types'
import type { ILogIn } from '@/features/sign-form/model/types'

export function useRegistration() {
    const { mutate, mutateAsync, isPending, isError, data, error } = useMutation<IUser, Error, ILogIn>({
        mutationFn: (credentials: ILogIn) => fetchRegistration(credentials),
    })

    return { mutate, mutateAsync, isPending, isError, data, error }
}