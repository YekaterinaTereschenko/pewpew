interface Props {
    label: string
    value: string
    isEditing?: boolean
    onChange?: (value: string) => void
}

export default function UserField({ label, value, isEditing, onChange }: Props) {
    return (
        <div>
            <span className='block text-xs text-gray-400 mb-1'>{label}</span>
            {isEditing && onChange ? (
                <input
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    className='w-full text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-transparent outline-none focus:border-blue-500'
                />
            ) : (
                <span className='block text-sm text-gray-800 dark:text-gray-200'>{value}</span>
            )}
        </div>
    )
}