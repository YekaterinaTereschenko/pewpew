import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='flex justify-between items-center p-4 shadow-2xs'>
            <img src="icon.png" alt="" className='w-10'/>

            <div className="nav-links flex items-center gap-10">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
        </nav>
    )
}
