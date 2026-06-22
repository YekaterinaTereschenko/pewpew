
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/ui/Home'
import About from '../pages/about/ui/About'
import Header from '../widgets/header/ui/Header'
import User from '../pages/user/ui/User'
import Cart from '../pages/cart/ui/Cart'
import CartBtn from '../widgets/cartBtn/ui/CartBtn'
import Sign from '../pages/sign/ui/Sign'
import Registration from '../pages/registration/ui/Registration'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <CartBtn />
    </>
  )
}

export default App
