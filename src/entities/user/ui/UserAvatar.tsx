interface Props {
    name: string
}

export default function UserAvatar({ name }: Props) {
    return (
        <div className='w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600'>
            {name.charAt(0)}
        </div>
    )
}