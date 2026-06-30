import { useState } from 'react'
import type { IUser, IUpdateUser } from '@/entities/user/model/types'
import { updateUser } from '../api/fetchUserUpdate'

export function useEditUser(user: IUser, refetch: () => void) {
    const [isEditing, setIsEditing] = useState(false)
    const [form, setForm] = useState<IUpdateUser>({ name: '', phone: '', address: '' })

    const handleEdit = () => {
        setForm({ name: user.name, phone: user.phone, address: user.address })
        setIsEditing(true)
    }

    const handleSave = async () => {
        await updateUser(form)
        await refetch()
        setIsEditing(false)
    }

    const handleCancel = () => setIsEditing(false)

    return { isEditing, form, setForm, handleEdit, handleSave, handleCancel }
}