import { Link } from 'react-router-dom'


export default function CartBtn() {
    return (
        <Link to='/cart2' className='p-1.5 shadow-2xs bg-[#CBF6FF] rounded-2xl w-fit flex fixed bottom-3 right-3'>
            <img src="basket.png" alt="" className='max-w-10' />
        </Link>
    )
}
