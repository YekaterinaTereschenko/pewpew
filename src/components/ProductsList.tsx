import ProductCard from './ProductCard'
import type { IProduct } from '../models/models'
import { ModalContext } from './context/ModalState'
import { useContext } from 'react'
import Modal from '../components/Modal'

interface ProductsProps {
    products: IProduct[]
}

export default function ProductsList({ products }: ProductsProps) {
const { modal, selectedProduct, close } = useContext(ModalContext)

return (
  <>
    {products.map(p => (
      <ProductCard key={p.id} product={p} />
    ))}

    {modal && selectedProduct && (
      <Modal title="About product" onClose={close}>
        <img src={selectedProduct.image} className="w-25"/>
        <h3>{selectedProduct.title}</h3>
        <p>{selectedProduct.description}</p>
      </Modal>
    )}
  </>
)
}