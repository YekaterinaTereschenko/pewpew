import { useNavigate } from 'react-router-dom'
import { useUserProfile } from '@/entities/user/hooks/useUserProfile'
import { useEditUser } from '@/entities/user/hooks/useEditUser'
import UserAvatar from '@/entities/user/ui/UserAvatar'
import UserField from '@/entities/user/ui/UserField'
import Loader from '@/shared/ui/Loader'

export default function User() {
    const { isPending, isError, data, refetch } = useUserProfile()
    const navigate = useNavigate()

    const { isEditing, form, setForm, handleEdit, handleSave, handleCancel } = useEditUser(data!, refetch)

    if (isPending) return <Loader />
    if (isError) { navigate('/sign'); return null }

    const user = data!

    return (
        <div className="min-h-screen flex justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <div className='max-w-220 w-full h-fit mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md'>
                <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-4'>
                        <UserAvatar name={user.name} />
                        <div>
                            <h2 className='text-lg font-semibold'>{user.name}</h2>
                            <p className='text-sm text-gray-500'>User</p>
                        </div>
                    </div>

                    {!isEditing ? (
                        <button onClick={handleEdit} className='text-sm text-blue-500 hover:text-blue-600'>
                            Редактировать
                        </button>
                    ) : (
                        <div className='flex gap-3'>
                            <button onClick={handleCancel} className='text-sm text-gray-400 hover:text-gray-500'>Отмена</button>
                            <button onClick={handleSave} className='text-sm text-blue-500 hover:text-blue-600'>Сохранить</button>
                        </div>
                    )}
                </div>

                <div className='flex flex-col gap-4'>
                    <UserField label='Name' value={isEditing ? form.name : user.name} isEditing={isEditing} onChange={v => setForm(p => ({ ...p, name: v }))} />
                    <UserField label='Phone' value={isEditing ? form.phone : user.phone} isEditing={isEditing} onChange={v => setForm(p => ({ ...p, phone: v }))} />
                    <UserField label='Email' value={user.email} />
                    <UserField label='Address' value={isEditing ? form.address : user.address} isEditing={isEditing} onChange={v => setForm(p => ({ ...p, address: v }))} />
                </div>
            </div>
        </div>
    )
}