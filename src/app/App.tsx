import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from '../widgets/header/ui/Header'
import CartBtn from '../widgets/cartBtn/ui/CartBtn'
import Loader from '@/shared/ui/Loader'
import Cart2 from '@/pages/cart/ui/Cart2'

const Home = lazy(() => import('../pages/home/ui/Home'))
const About = lazy(() => import('../pages/about/ui/About'))
const User = lazy(() => import('../pages/user/ui/User'))
const Cart = lazy(() => import('../pages/cart/ui/Cart'))
const Sign = lazy(() => import('../pages/sign/ui/Sign'))
const Registration = lazy(() => import('../pages/registration/ui/Registration'))

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart2" element={<Cart2 />} />
        </Routes>
      </Suspense>
      <CartBtn />
    </>
  )
}

export default App