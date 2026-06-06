import ProductCard from '../../../entities/product/ui/ProductCard'
import type { IProduct } from '../../../entities/product/model/types'
import { ModalContext } from '../../../features/modal/ui/ModalState'
import { useContext } from 'react'
import Modal from '../../../shared/ui/Modal'

interface ProductsProps {
    products: IProduct[]
}

export default function ProductsList({ products }: ProductsProps) {
const { modal, selectedProduct, close } = useContext(ModalContext)

return (
  <div className='bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-5'>
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
  </div>
)
}
