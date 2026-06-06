import { Link } from 'react-router-dom'
import ThemeButton from '../../../features/theme-switch/ui/ThemeSwitcher'

export default function Header() {
    return (
        <nav className='flex justify-between items-center p-4 shadow-2xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'>
            <img src="icon.png" alt="" className='w-10'/>

            <div className="nav-links flex items-center gap-10">
                <ThemeButton />
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
        </nav>
    )
}
