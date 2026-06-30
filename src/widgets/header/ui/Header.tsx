import { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeButton from '@/features/theme-switch/ui/ThemeSwitcher'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='relative flex justify-between items-center p-4 shadow-2xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'>
            <Link to='/'>
                <img src="icon.png" alt="" className='w-10' />
            </Link>

            {/* Десктопное меню */}
            <div className="hidden md:flex items-center gap-10">
                <Link to='/about'>About</Link>
                <ThemeButton />
                <Link to='/user' className='p-1.5 bg-[#CBF6FF] rounded-2xl'>
                    <img src="user.png" alt="" className='max-w-8' />
                </Link>
            </div>

            {/* Кнопка-бургер (только на мобильных) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10'
                aria-label='Открыть меню'
                aria-expanded={isOpen}
            >
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Мобильное выпадающее меню */}
            {isOpen && (
                <div className='absolute top-full left-0 right-0 md:hidden flex flex-col items-center gap-6 py-6 bg-white dark:bg-gray-800 shadow-lg z-50'>
                    <ThemeButton />
                    <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to='/about' onClick={() => setIsOpen(false)}>About</Link>
                    <Link
                        to='/sign'
                        onClick={() => setIsOpen(false)}
                        className='p-1.5 bg-[#CBF6FF] rounded-2xl'
                    >
                        <img src="user.png" alt="" className='max-w-8' />
                    </Link>
                </div>
            )}
        </nav>
    )
}