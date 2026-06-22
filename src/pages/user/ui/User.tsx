export default function User() {
    return (
        <div className="min-h-screen flex justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <div className='max-w-220 w-full h-fit mx-auto mt-10 p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl shadow-md'>
                <div className='flex items-center gap-4 mb-6'>
                    <div className='w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600'>
                        ИИ
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold text-gray-900'>Иванов Иван Иванович</h2>
                        <p className='text-sm text-gray-500'>Пользователь</p>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <div>
                        <span className='block text-xs text-gray-400'>Телефон</span>
                        <span className='block text-sm text-gray-800'>+7 (700) 123-45-67</span>
                    </div>

                    <div>
                        <span className='block text-xs text-gray-400'>Почта</span>
                        <span className='block text-sm text-gray-800'>example@mail.com</span>
                    </div>

                    <div>
                        <span className='block text-xs text-gray-400'>Адрес</span>
                        <span className='block text-sm text-gray-800'>
                            г. Караганда, ул. Гоголя, д. 12, кв. 5
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}