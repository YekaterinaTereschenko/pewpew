import ProductCard from '@/entities/product/ui/ProductCard'
import type { IProduct } from '@/entities/product/model/types'
import { ModalContext } from '@/features/modal/ui/ModalState'
import { useContext, useState } from 'react'
import Modal from '@/shared/ui/Modal'
import PrimaryButton from '@/shared/ui/PrimaryButton'
import { fetchAddToCard } from '@/entities/basket/api/ferchaAddToCard'
const API_URL = import.meta.env.VITE_API_URL

interface ProductsProps {
  products: IProduct[]
}

export default function ProductsList({ products }: ProductsProps) {
  const { modal, selectedProduct, close } = useContext(ModalContext)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className='bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-5'>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}

      {modal && selectedProduct && (
        <Modal title="About product" onClose={close}>
          <div className='flex flex-col items-center'>
            <img src={API_URL + selectedProduct.img} className="w-25 mx-auto md:mx-0" />
            <h3 className='text-xl'>{selectedProduct.name}</h3>
            {/* <p>{selectedProduct.description}</p> */}
            <div className="flex items-center gap-3 my-4">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 font-bold transition"
              >
                −
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 font-bold transition"
              >
                +
              </button>
            </div>
            <PrimaryButton onClick={() => {
              fetchAddToCard({ deviceId: selectedProduct.id, quantity: quantity})
              close()
            }}>Add to cart</PrimaryButton>
          </div>
        </Modal>
      )}
    </div>
  )
}
